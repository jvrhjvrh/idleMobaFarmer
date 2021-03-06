import React from 'react';
import {Provider} from 'react-redux';
import { applyMiddleware, createStore} from 'redux';
import {render} from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Main from './main.tsx';
import rootReducer from './redux/index.ts';

import './style.scss';

BigInt.prototype.toJSON = function() { return this.toString()  }

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
render(<Provider store={store}><Main /></Provider>, document.getElementById("root"));
