// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');

function activate(context) {
    // console.log('Congratulations, your extension "powershell-right-click-run" is now active!');

    let disposablePs = vscode.commands.registerCommand('extension.runPowershell', async (fileUri) => {
        //console.log(fileUri)

        // LOG LANGUAGES
        // vscode.languages.getLanguages().then(l => console.log('languages', l));

        let terminal = vscode.window.createTerminal();

        let userInput = fileUri.fsPath;

        let command = 'Powershell.exe -ExecutionPolicy Bypass -File ' + userInput;

        terminal.show();

        terminal.sendText(command);

        terminal.sendText('exit'); // quick and dirty
    });

    let disposableBs = vscode.commands.registerCommand('extension.runBatch', async (fileUri) => {
        let terminal = vscode.window.createTerminal();

        // Another way
        // 'Powershell.exe -ExecutionPolicy Bypass -Command {Start-Process ' + userInput + '}';
        let command = fileUri.fsPath;

        terminal.show();

        terminal.sendText(command);
    });

    context.subscriptions.push(disposablePs);
    context.subscriptions.push(disposableBs); // haha
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;