import { Dialog } from 'quasar'

import { ordersClasses, OrdersUi } from '@/modules/db/subjects/orders'

export default function useOrdersDialogCreation ({ isCreating, order }: { isCreating: boolean, order: ordersClasses.IOrder }) {
  return Dialog.create({
    component: OrdersUi.OrderDialogCreation,
    componentProps: {
      isCreating,
      order,
    },
    cancel: true,
    persistent: true,
  })
}
