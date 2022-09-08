import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import AuthWrap from './AuthWrap';
import * as serviceWorker from './serviceWorker';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("39455888e4a81723f0f565ac5bf7d7c6c" , {"popupWidget":true,"automaticChatOpenOnNavigation":true})

ReactDOM.render(<AuthWrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
