// Electron-Updater Module
const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater');

let mainWindow = null;

// Enable logging
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.autoDownload = false;

module.exports = class UpdaterService {
    static sendStatusToWindow(text) {
        autoUpdater.logger.info(text);
    }

    static checkForUpdates() {
        // Check for new updates
        autoUpdater.checkForUpdates();
    }

    static setMainWindow(mw) {
        this.mainWindow = mw;
    }

    static loadListeners() {
        // Listen for update found
        autoUpdater.on('update-available', () => {
            dialog.showMessageBox({
                type: 'info',
                title: 'Update available',
                message: 'A new version of Timeline-Maker is available. Do you want to update now?',
                buttons: ['Update', 'Cancel']
            }).then(result => {
                let buttonIndex = result.response;
                
                if (buttonIndex === 0) {
                    autoUpdater.downloadUpdate()
                        .catch(e => {
                            dialog.showMessageBox({
                                type: 'error',
                                title: 'Download and Update Failed',
                                message: 'An error occured while downloading update. See log for details',
                                buttons: ['Close']
                            });
                        });
                }
            });
            
        });

        autoUpdater.on('download-progress', (progressObj) => {
            const percent = progressObj.percent / 100;
            let log_message = "Download speed: " + progressObj.bytesPerSecond;
            log_message = log_message + ' - Downloaded ' + percent + '%';
            log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
            this.sendStatusToWindow(log_message);
            this.mainWindow.setProgressBar(percent);
        });

        autoUpdater.on('update-downloaded', () => {
            this.sendStatusToWindow('Update downloaded');
            dialog.showMessageBox({
                type: 'info',
                title: 'Update ready',
                message: 'Install & restart now?',
                buttons: ['Yes', 'Later']
            }).then(result => {
                let buttonIndex = result.response;
                buttonIndex === 0 && autoUpdater.quitAndInstall(false, true)
                    .catch(e => {
                        dialog.showMessageBox({
                            type: 'error',
                            title: 'Install Failed',
                            message: 'An error occured while installing application.',
                            buttons: ['Close']
                        });
                    });
            });
        });
    }
}