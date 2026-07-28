import { build } from 'vite'
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { routes, siteUrl } from '../src/seo.mjs'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const ssrOutDir = 'dist-ssr'

async function main() {
  const result = await build({
    root,
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: ssrOutDir,
      emptyOutDir: true,
      minify: false,
    },
    logLevel: 'warn',
  })

  const entryFile = result.output.find((chunk) => chunk.isEntry)?.fileName
  if (!entryFile) throw new Error('SSR build produced no entry chunk')

  const { render } = await import(pathToFileURL(path.join(root, ssrOutDir, entryFile)))
  const template = await readFile(path.join(root, 'dist/index.html'), 'utf-8')

  for (const route of routes) {
    const appHtml = render(route.path)

    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`)
    html = html.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${route.description}">`,
    )
    html = html.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${route.title}">`,
    )
    html = html.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${route.description}">`,
    )
    html = html.replace(
      '</title>',
      `</title>\n    <link rel="canonical" href="${siteUrl}${route.path}">`,
    )

    const outDir = route.path === '/' ? path.join(root, 'dist') : path.join(root, 'dist', route.path)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    console.log(`prerendered ${route.path}`)
  }

  await writeFile(path.join(root, 'dist/sitemap.xml'), buildSitemap())
  console.log('generated sitemap.xml')

  await rm(path.join(root, ssrOutDir), { recursive: true, force: true })
}

function buildSitemap() {
  const today = new Date().toISOString().split('T')[0]
  const urls = routes
    .map((route) => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})