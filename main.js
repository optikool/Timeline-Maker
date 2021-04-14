let {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
let {
  enableLiveReload
} = require('electron-compile');
let url = require('url');
let path = require('path');
let win = null;

const userData = app.getPath('userData');

const dbPath = path.resolve(__dirname, 'dist/timeline-maker/assets/data/timeline.sqlite3.db');
// const dbPath = path.resolve(userData, 'dist/timeline-maker/assets/data/timeline.sqlite3.db');
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath
  }
});

// const Characters = () => knex('timeline');

let mainWindow = null;
let characterIndex = 0;

const isDevMode = process.execPath.match(/[\\/]electron/);

function getParent(id, characters) {
  return characters.map(item => {
    return {
      id: item.id,
      name: item.characterName,
      gender: item.gender
    }
  }).find(item => id === item.id);
}

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/timeline-maker/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  if (isDevMode) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  ipcMain.on('get-characters', async (event) => {
    event.returnValue = await knex('timeline').select('*')
      .catch(e => e.message);
  });

  ipcMain.on('save-character', async (event, character) => {
    delete character.id;
    delete character.type;

    event.returnValue = await knex.insert(character).into('timeline')
      .then(() => knex('timeline').select('*'))
      .catch(e => e.message);
  });

  ipcMain.on('update-character', async (event, characterUpdate) => {
    const id = characterUpdate.id;
    delete characterUpdate.id;
    delete characterUpdate.type;

    event.returnValue = await knex('timeline').update(characterUpdate).where('id', id)
      .then(() => knex('timeline').select('*').then(rows => rows))
      .catch(e => e.message);
  });

  ipcMain.on('delete-character', async (event, data) => {
    event.returnValue = await knex('timeline').where('id', data.id)
      .del()
      .then(() => knex('timeline').select('*').then(rows => rows))
      .catch(e => e.message);
  });

  ipcMain.on('get-gender-characters', async (event, data) => {
    event.returnValue = await knex('timeline').select('*').where('gender', data)
      .then(() => knex('timeline').select('*'))
      .catch(e => e.message);
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
