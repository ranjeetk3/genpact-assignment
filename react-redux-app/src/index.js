import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import {userDetails} from './actions/userActions';
import UserInfo from './components/UserInfo';  
const store = configureStore();
store.dispatch(userDetails());
render(
<Provider store={store}>
    <UserInfo />
</Provider>,
document.getElementById('root')
);
