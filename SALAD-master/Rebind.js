function Rebind() {
    this.oldvals = [];
    this.newvals = [];
    this.cmdnames = [];
    this.callbacks = [];
    this.rebind = function(oldval, newval) {
        this.oldvals[this.oldvals.length + 1] = oldval;
        this.newvals[this.newvals.length + 1] = newval;
    }

    this.runBinds = function(text) {
        var code = "";
        for (var i = 0; i < this.oldvals.length; i++) {
            var regex = new RegExp(this.oldvals[i], "g");
            code = text.replace(regex, this.newvals[i]);
        }
        return code;
    }
    
    this.bindCommand = function(cmdname, callback) {
        this.cmdnames[this.cmdnames.length + 1] = cmdname;
        this.callbacks[this.callbacks.length + 1] = callback;
    }
    
    this.runCommand = function(codeline) {
        for (var i = 0; i < this.cmdnames.length; i++) {
            var regex = new RegExp(this.cmdnames[i] + " ", "")
            if (regex.test(codeline)) {
                var arg = codeline.replace(this.cmdnames[i] + '', '');
                eval(this.callbacks[i] + "('" + arg + "');");
            }
        }
    }
    
    this.runCommandWithArgs = function(codeline, splitter) {
        var input = codeline.split(splitter);
        alert(input);
        for (var i = 0; i < this.cmdnames.length; i++) {
            if (input == this.cmdnames[i]) {
                var callback = this.callbacks[i]
                alert(callback);
                window[callback](input);
            }
        }
    }
    
}
var rbind = new Rebind();
