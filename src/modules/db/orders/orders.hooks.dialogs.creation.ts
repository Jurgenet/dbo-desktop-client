import { Dialog } from 'quasar'

import { ordersDto, OrdersUi } from '@/modules/db/orders'

export default function useOrdersDialogCreation ({ order }: { order: ordersDto.IOrderDraft }) {
  return Dialog.create({
    component: OrdersUi.OrderDialogCreation,
    componentProps: {
      order,
    },
    cancel: true,
    persistent: true,
  })
}
