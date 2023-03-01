import { drawerDto } from '@/modules/gui/drawers'

export const SERVER_NAME = process.env.serverName
export const APP_NAME = process.env.appName
export const APP_VERSION = process.env.version

export const ROUTES = {
  ROOT: '/',
  DUBUG: '/debug',
  SETTINGS: '/settings',
  SHOWROOM: '/showroom',
  ACCOUNTS: '/accounts',
  NOTES: '/notes',
  ORDERS: '/orders',
  KNOWLEDGES: '/knowledges',
  PICTURES: '/pictures',
  WOW: '/wow',
}

export const MAIN_MENU_LINKS: drawerDto.TDrawerLeftLink[] = [
  {
    title: 'Accounts',
    icon: 'account_circle',
    link: ROUTES.ACCOUNTS,
  },
  {
    title: 'Notes',
    icon: 'description',
    caption: 'database notes',
    link: ROUTES.NOTES,
  },
  {
    title: 'Orders',
    icon: 'shopping_cart',
    link: ROUTES.ORDERS,
  },
  {
    title: 'Knowledges',
    icon: 'school',
    link: ROUTES.KNOWLEDGES,
  },
  {
    title: 'Pictures',
    icon: 'image',
    link: ROUTES.PICTURES,
  },
  {
    title: 'WoW',
    icon: 'videogame_asset',
    link: ROUTES.WOW,
  },
]

export const ERROR_MESSAGES = {
  SERVER_ERROR: 'An error occurred. Please try again later.',
}
