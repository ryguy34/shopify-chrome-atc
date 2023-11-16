import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import Header from "./pages/header/Header";
import ProxiesPage from "./pages/proxies/ProxiesPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Tasks from "./pages/tasks/Tasks";
import Toolbox from "./pages/toolbox/Toolbox";
import { store } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<div className="app-container">
					<div className="header-container">
						<Header />
					</div>
					<Routes>
						<Route path="/profiles" element={<ProfilePage />} />
						<Route path="/proxies" element={<ProxiesPage />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/toolbox" element={<Toolbox />} />
						<Route
							path="*"
							element={<Navigate to="/profiles" replace />}
						/>
					</Routes>
				</div>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
