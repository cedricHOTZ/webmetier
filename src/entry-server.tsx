import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import { StaticRouter } from 'react-router'
import App from './App'

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          let html = ''
          const passthrough = new PassThrough()
          passthrough.on('data', (chunk) => {
            html += chunk
          })
          passthrough.on('end', () => resolve(html))
          passthrough.on('error', reject)
          stream.pipe(passthrough)
        },
        onError(error) {
          reject(error)
        },
      },
    )
  })
}
