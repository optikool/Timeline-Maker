let { app, BrowserWindow, ipcMain } = require('electron');
let { enableLiveReload } = require('electron-compile');
let url = require('url');
let path = require('path');
let win = null;

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './assets/data/timeline.sqlite3.db'
    }
});
const Characters = () => knex('Characters');

let mainWindow = null;
let characterIndex = 0;

const isDevMode = process.execPath.match(/[\\/]electron/);

// if (isDevMode) enableLiveReload();

const createWindow = async () => {
    let characters = CHARACTERS;
    characterIndex = characters.length + 1;
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
        event.returnValue = await characters;
        // event.returnValue = Characters.select();
    });

    ipcMain.on('get-character', async (event, id) => {
        event.returnValue = await characters.find(character => character.id === id);
        // event.returnValue = Characters.select()
        //     .where('id', id);
    });

    ipcMain.on('save-character', async (event, character) => {
        character.id = characterIndex;
        characterIndex++;
        characters.push(character);
        event.returnValue = await characters;
    });

    ipcMain.on('update-character', async (event, characterUpdate) => {
        characters = characters.map((character => {
            if (character.id !== characterUpdate.id) return character;
            return characterUpdate;
        }));
        event.returnValue = await characters;
    });

    ipcMain.on('delete-character', async (event, id) => {
        characters = characters.filter(character => character.id !== id);
        event.returnValue = await characters;
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

const CHARACTERS = [
    {
        id: 1,
        characterName: 'Adam',
        gender: 'M',
        dateOfBirth: '50',
        dateOfDeath: '3096',
        fatherId: null,
        motherId: null,
        fatherAgeAtBirth: 130,
        fatherContinuedToLive: 800,
        reference: 'Gen 5:3-5',
        description: ''
    },
    {
        id: 2,
        characterName: 'Eve',
        gender: 'F',
        dateOfBirth: '100',
        dateOfDeath: '3096',
        fatherId: null,
        motherId: null,
        fatherAgeAtBirth: 130,
        fatherContinuedToLive: 800,
        reference: 'Gen 5:3-5',
        description: ''
    },
    {
        id: 3,
        characterName: 'Seth',
        gender: 'M',
        dateOfBirth: '2896',
        dateOfDeath: '2984',
        fatherId: 1,
        motherId: 2,
        fatherAgeAtBirth: 105,
        fatherContinuedToLive: 807,
        reference: 'Gen 5:6-8',
        description: ''
    },
    {
        id: 4,
        characterName: 'E\'nosh',
        gender: 'M',
        dateOfBirth: '3791',
        dateOfDeath: '2976',
        fatherName: 1,
        motherName: 2,
        fatherAgeAtBirth: 90,
        fatherContinuedToLive: 815,
        reference: 'Gen 5:12-14',
        description: ''
    }
];
