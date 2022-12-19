import { app, BrowserWindow, Menu, Tray, Notification, nativeTheme, shell } from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(
      path.join(app.getPath('userData'), 'DevTools Extensions'),
    )
  }
} catch (_) {}

const appName = process.env.appName ?? 'DBO Desktop Client'
const appVersion = process.env.version ?? '?.?.?'
let mainWindow: BrowserWindow | undefined
let tray: Tray | undefined
let isAppQuit = false

function showNotification (title:string, body = '') {
  new Notification({ title, body, icon: path.join(__dirname, 'favicon.ico'), silent: false }).show()
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow?.webContents.closeDevTools()
    })
  }

  /*
  ** Перехват события нажатия на ссылку (тег: a) и попытку открытия ссылки в новом окне (target="_blank")
  ** чтобы открыть ссылку не в приложении, а в дефолтном браузере
  ** @see: https://github.com/electron/electron/issues/1344#issuecomment-392844066
  */
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
  })

  mainWindow.on('minimize', function (/* evt */) {
    // evt.preventDefault()
    // mainWindow.hide()
  })

  mainWindow.on('close', (evt) => {
    if (!isAppQuit) {
      evt.preventDefault()
      mainWindow?.hide()
    }

    return false
  })

  mainWindow.on('closed', () => {
    mainWindow = undefined
  })
}

app
  .whenReady()
  .then(() => {
    tray = new Tray(path.resolve(__dirname, 'icons/icon.png'))
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Show App',
        click: function () {
          mainWindow?.show()
        },
      },
      {
        label: 'Quit',
        click: function () {
          isAppQuit = true
          app.quit()
        },
      },
    ])
    tray.setToolTip(`${appName} :: v${appVersion}`)
    tray.setContextMenu(contextMenu)
    createWindow()
  })
  .then(() => showNotification('Start working'))

app.name = appName

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === undefined) {
    createWindow()
  }
})
