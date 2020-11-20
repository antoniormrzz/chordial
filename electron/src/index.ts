import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, '..', 'assets', 'icons', 'cp.png'),
    title: 'Chordial'
  });

  win.setTitle('Chordial');
  // win.loadFile(path.join(__dirname, '..', 'assets', 'ui', '/index.html'));
  win.loadURL('http://localhost:8080');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
