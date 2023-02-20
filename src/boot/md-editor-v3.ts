import { boot } from 'quasar/wrappers'
import MdEditor from 'md-editor-v3'

import MarkedMarkExtension from './md-editor-v3-marked-mark-ext'

MdEditor.config({
  markedExtensions: [MarkedMarkExtension],
  markedRenderer (renderer) {
    renderer.link = (href, title, text) => {
      return `<a href="${href}" title="${title || ''}" target="_blank">${text}</a>`
    }

    return renderer
  },
})

export default boot(({ app }) => {
  app.use(MdEditor)
})
