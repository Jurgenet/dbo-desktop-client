import { h, VNode } from 'vue'

import { clipboardUtils } from '@/modules/core/clipboard'

function withClipboard (WrappedComponent: VNode) {
  return {
    props: {
      clipValue: {
        type: String,
        require: true,
      },
    },

    setup (props: Partial<{ clipValue: string }>) {
      function clip () {
        clipboardUtils.clip(props.clipValue)
      }

      return () => h(
        WrappedComponent,
        {
          onClick: clip,
        },
      )
    },
  }
}

export default withClipboard
