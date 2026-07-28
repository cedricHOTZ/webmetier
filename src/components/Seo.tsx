import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  noindex?: boolean
}

export default function Seo({ title, description, noindex = false }: SeoProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attr: string, attrValue: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
  }, [title, description, noindex])

  return null
}
