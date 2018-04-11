// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyBtrwMcNGfAjObZwD1xWNgtvbW2IZCcOw0',
    authDomain: 'employee-app-9f511.firebaseapp.com',
    databaseURL: 'https://employee-app-9f511.firebaseio.com',
    projectId: 'employee-app-9f511',
    storageBucket: 'employee-app-9f511.appspot.com',
    messagingSenderId: '461707745932'
  }
};
