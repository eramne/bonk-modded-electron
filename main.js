const { app, BrowserWindow } = require('electron');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 300,
        minHeight: 200
    })

    win.setMenu(null);
    win.loadFile('gameframe-release.html')

    win.webContents.on("before-input-event", (event, input) => {
        if (input.type === 'keyDown') {
            if (input.key === "F11") {
                event.preventDefault();
                if (!win.isFullScreen()) {
                    win.setFullScreen(true);
                } else {
                    win.setFullScreen(false);
                }
            }
            if (input.key === "F12") {
                event.preventDefault();
                if (!win.webContents.isDevToolsOpened()) {
                    win.webContents.openDevTools();
                } else {
                    win.webContents.closeDevTools();
                }
            }
            if (input.key === "F5") {
                event.preventDefault();
                win.reload();
            }
        }
    });
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
