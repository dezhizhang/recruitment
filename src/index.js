import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'
import reducers from './reducer'
import Login from './component/login/Login';
import BossInfo from './component/boss/BossInfo';
import AuthRouter from './component/auth/AuthRouter';
import Register from './component/register/Register';
import './config'
import './index.css'


const store = createStore(reducers, compose(
	applyMiddleware(thunk)
))

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRouter/>
				<Switch>
				<Route path='/bossinfo' component={BossInfo}></Route>
                <Route  path='/login'  component={Login}></Route>
                <Route  path='/register'  component={Register}></Route>
				</Switch>
            </div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
