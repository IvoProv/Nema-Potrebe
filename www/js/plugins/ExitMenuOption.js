(function() {

    // Add command to the menu after it’s initialized
    var _Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        _Scene_Menu_createCommandWindow.call(this);

        // Add Exit Game at the bottom of menu commands
        this._commandWindow.addCommand('Exit Game', 'exit');

        // Bind the command
        this._commandWindow.setHandler('exit', this.commandExit.bind(this));
    };

    // Exit function
    Scene_Menu.prototype.commandExit = function() {
        if (Utils.isNwjs()) {
            const gui = require('nw.gui');
            gui.Window.get().close(); // close game
        } else {
            alert("Cannot exit browser version!");
        }
    };

})();