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
    const character = characters.find((data) => id === data.id);
    const parentFather = getParent(character?.fatherId, characters);
    const parentMother = getParent(character?.motherId, characters);
    const children = characters.filter(child => id === child.fatherId || id === child.motherId);

    event.returnValue = await {
      ...character,
      mother: parentMother,
      father: parentFather,
      children
    };

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
    characters = characters.map(character => {
      if (character.id !== characterUpdate.id) return character;
      return Object.assign(character, characterUpdate);
    });

    event.returnValue = await characters;
  });

  ipcMain.on('delete-character', async (event, data) => {
    characters = characters.filter(character => character.id !== data.id);
    event.returnValue = await characters;
  });

  ipcMain.on('get-gender-characters', async (event, data) => {
    const result = characters.filter((character) => character.gender.toLowerCase() === data.toLowerCase());
    event.returnValue = await result.map(data => {
      return {
        id: data.id,
        characterName: data.characterName
      }
    });
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

// : Character[]
const CHARACTERS = [
  {
    id: 1,
    characterName: 'Adam',
    gender: 'M',
    dateOfBirth: '50',
    dateOfDeath: '3096',
    fatherId: 0,
    motherId: 0,
    children: [],
    fatherAgeAtBirth: 130,
    fatherContinuedToLive: 800,
    reference: 'Gen 5:3-5',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.'
  },
  {
      id: 2,
      characterName: 'Eve',
      gender: 'F',
      dateOfBirth: '100',
      dateOfDeath: '3096',
      fatherId: 0,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 130,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:3-5',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.'
  },
  {
      id: 3,
      characterName: 'Seth',
      gender: 'M',
      dateOfBirth: '2896',
      dateOfDeath: '2984',
      fatherId: 1,
      motherId: 2,
      children: [],
      fatherAgeAtBirth: 105,
      fatherContinuedToLive: 807,
      reference: 'Gen 5:6-8',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 4,
      characterName: 'E\'nosh',
      gender: 'M',
      dateOfBirth: '3791',
      dateOfDeath: '2976',
      fatherId: 3,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 90,
      fatherContinuedToLive: 815,
      reference: 'Gen 5:9-11',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.'
  },
  {
      id: 5,
      characterName: 'Ca-l\nan',
      gender: 'M',
      dateOfBirth: '3701',
      dateOfDeath: '2861',
      fatherId: 4,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 70,
      fatherContinuedToLive: 840,
      reference: 'Gen 5:12-14',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.'
  },
  {
      id: 6,
      characterName: 'Ma-ha\'la-le-el',
      gender: 'M',
      dateOfBirth: '3631',
      dateOfDeath: '2801',
      fatherId: 5,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 65,
      fatherContinuedToLive: 830,
      reference: 'Gen 5:15-17',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 7,
      characterName: 'Ja\'red',
      gender: 'M',
      dateOfBirth: '3566',
      dateOfDeath: '2604',
      fatherId: 6,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 162,
      fatherContinuedToLive: 800,
      reference: 'Gen 5:18-20',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
  },
  {
      id: 8,
      characterName: 'E\'noch',
      gender: 'M',
      dateOfBirth: '3404',
      dateOfDeath: '2039',
      fatherId: 7,
      motherId: 0,
      children: [],
      fatherAgeAtBirth: 65,
      fatherContinuedToLive: 300,
      reference: 'Gen 5:21-23',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis.'
  }
];
