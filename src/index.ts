import { welcome } from './welcome';

const someText = 'Hello World';

welcome(someText);

document.body.innerHTML = `<h2>${someText}</h2>`;
