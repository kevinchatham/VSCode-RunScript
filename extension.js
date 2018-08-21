// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

function activate(context) {
    let disposablePs = vscode.commands.registerCommand('extension.runPowershell', async (fileUri) => {
        // Just some debug stuff
        // console.log(fileUri)

        // Log Available Languages
        // vscode.languages.getLanguages().then(l => console.log('languages', l));

        let userInput = fileUri.fsPath;

        let command = 'Powershell.exe -ExecutionPolicy Bypass -File ' + userInput;

        let terminal = vscode.window.createTerminal();

        terminal.show();

        terminal.sendText(command);

        // quick and dirty cause there doesn't seem to be another way
        terminal.sendText('exit');
    });

    let disposableBs = vscode.commands.registerCommand('extension.runBatch', async (fileUri) => {
        let userInput = fileUri.fsPath;

        let command = 'Powershell.exe -ExecutionPolicy Bypass -File ' + userInput;

        let terminal = vscode.window.createTerminal();

        terminal.show();

        terminal.sendText(command);

        terminal.sendText('exit');
    });

    context.subscriptions.push(disposablePs);
    context.subscriptions.push(disposableBs); // haha
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;