import {
  RegisteredFileSystemProvider,
  RegisteredMemoryFile,
  registerFileSystemOverlay,
} from '@codingame/monaco-vscode-files-service-override';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution';
import { useEffect, useRef } from 'react';
import * as vscode from 'vscode';
import * as monaco from 'monaco-editor';
import Editor from '../Editor';
import createJsonEditor from '../Editor';
import { editor, languages } from 'monaco-editor';
import { webpack } from 'webpack';
import {
  createConfiguredEditor,
  createModelReference,
  IReference,
  ITextFileEditorModel,
  writeFile,
} from 'vscode/monaco';
// import '@codingame/monaco-vscode-theme-defaults-default-extension';
// import '@codingame/monaco-vscode-json-default-extension';
// import getConfigurationServiceOverride from '@codingame/monaco-vscode-configuration-service-override';
// import getKeybindingsServiceOverride from '@codingame/monaco-vscode-keybindings-service-override';
// import getThemeServiceOverride from '@codingame/monaco-vscode-theme-service-override';
// import getTextmateServiceOverride from '@codingame/monaco-vscode-textmate-service-override';
import { initServices, MonacoLanguageClient } from 'monaco-languageclient';
import {
  CloseAction,
  ErrorAction,
  MessageTransports,
} from 'vscode-languageclient';
import {
  WebSocketMessageReader,
  WebSocketMessageWriter,
  toSocket,
} from 'vscode-ws-jsonrpc';
import { Uri } from 'vscode';
import { URI } from 'vscode/vscode/vs/base/common/uri';
import { parse } from 'yargs';
import { dark } from '@material-ui/core/styles/createPalette';
import { IEditorService } from 'vscode/services';
import WriteFilePlugin from 'write-file-webpack-plugin';
import { MEditor } from '../Mclient';
const App = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Editor />
      {/* <MEditor /> */}
    </div>
  );
};

var replaceButton = document.getElementById('replace-button-1');
replaceButton.addEventListener('click', () => {
  var MyED = vscode.window.activeTextEditor;
  if (MyED) {
    var fullRange = MyED.document.validateRange(
      new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE),
    );
    MyED.selection = new vscode.Selection(fullRange.start, fullRange.end);
  } else {
    console.log('No open text editor.');
  }
  MyED.edit((edit_builder) => {
    edit_builder.replace(MyED.selection, replaceButton.textContent);
  });
});


var replaceButtondva = document.getElementById('replace-button-2');
replaceButtondva.addEventListener('click', () => {
  var MyED = vscode.window.activeTextEditor;
  if (MyED) {
    var fullRange = MyED.document.validateRange(
      new vscode.Range(0, 0, Number.MAX_VALUE, Number.MAX_VALUE),
    );
    MyED.selection = new vscode.Selection(fullRange.start, fullRange.end);
  } else {
    console.log('No open text editor.');
  }
  MyED.edit((edit_builder) => {
    edit_builder.replace(MyED.selection, replaceButtondva.textContent);
  });
});


var replaceButtontri = document.getElementById('replace-button-3');
replaceButtontri.addEventListener('click', () => {
  var MyED = vscode.window.activeTextEditor;
  MyED.edit((edit_builder) => {
    edit_builder.replace(MyED.selection, replaceButtontri.textContent);
  });
});


export default App;
