const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		center: true,
		fullscreen: true,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			devTools: true,
			contextIsolation: false
		},
		width: 800
	});

	win.loadFile(path.join(app.getAppPath(), 'src/index.html'));
	win.setMenu(null);

	if(process.env.NODE_ENV == 'development')
		win.webContents.openDevTools();
	
	return win;
}

//Mac specific events
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
	if(BrowserWindow.getAllWindows().length === 0) createWindow();
});

//Create the main window when Electron has initialized
app.whenReady().then(createWindow).catch(err => {
	app.quit();
	throw err;
});