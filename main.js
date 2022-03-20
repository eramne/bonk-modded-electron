const { app, dialog, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 300,
        minHeight: 200
    })

    win.setMenu(null);
    win.loadFile('gameframe-release.html')
    win.webContents.on("dom-ready", () => {
        const scriptsFolder = app.getAppPath() + '/userscripts/';
        const files = fs.readdirSync(scriptsFolder);
        files.map(function(file) {
            fs.readFile(path.normalize(`${scriptsFolder}${file}`), 'utf8' , (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                win.webContents.executeJavaScript(data);
            });
        });
    });

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

    win.on('close', (e) => {
        const choice = dialog.showMessageBoxSync(win, {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Confirm',
            message: 'Are you sure you want to quit?'
        });
        if (choice === 1) {
            e.preventDefault();
        } else if (choice === 0) {
            win.destroy();
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
