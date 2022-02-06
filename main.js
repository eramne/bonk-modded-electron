const { app, BrowserWindow } = require('electron');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 300,
      minHeight: 200
    })
  
    //win.setMenu(null);
    win.loadFile('gameframe-release.html')
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})