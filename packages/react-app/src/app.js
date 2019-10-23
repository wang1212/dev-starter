/* App entry file */

// @flow

// enable global async functions
import 'regenerator-runtime/runtime'

import './app.scss';

import React from 'react';
import { render } from 'react-dom';

import App from 'components/App.jsx';


const AppRootDOM = document.getElementById('App');


/* Render to dom */
if (AppRootDOM) {
	render(
		<App />,
		AppRootDOM
	);
}