import React from 'react';
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./redux/store"
import { Provider } from "react-redux"

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary"
import OwmService from "./services/OwmService"
import OwmServiceContex from "./components/owmServiceContex/OwmServiceContex"

import App from "./App";
import "./index.css";


const ownService = new OwmService()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundary>
				<OwmServiceContex.Provider value={ownService}>
					<Router>
						<App />
					</Router>
				</OwmServiceContex.Provider>
			</ErrorBoundary>
		</Provider>


	</React.StrictMode>,
	document.getElementById('root')
);