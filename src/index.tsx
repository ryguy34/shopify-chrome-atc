import "bootstrap/dist/css/bootstrap.css";
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
import Header from "./header/Header";
import ProxiesPage from "./pages/ProxiesPage";
import Profiles from "./pages/Profiles";
import Tasks from "./pages/Tasks";
import Toolbox from "./pages/Toolbox";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div className="app-container">
				<div className="header-container">
					<Header />
				</div>
				<div>
					<Routes>
						<Route path="/proxies" element={<ProxiesPage />} />
						<Route path="/profiles" element={<Profiles />} />
						<Route path="/tasks" element={<Tasks />} />
						<Route path="/toolbox" element={<Toolbox />} />
						<Route path="*" element={<Navigate to="/proxies" replace />} />
					</Routes>
				</div>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
