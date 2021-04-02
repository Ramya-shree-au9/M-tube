import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Store from './components/store'
import Routing from './components/display/routing'

ReactDOM.render(
    <Provider store={Store}>
    <Routing/>
    </Provider>,
  document.getElementById('root')
);


