import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/MainPage/Header";
import Home from "./components/MainPage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Register from "./components/LoginPage/Register";
import EventTasks from "./components/EventPage/EventTasks";
import AdminDashboard from "./components/AdminPage/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [baseData, setBaseData] = useState([]);

	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
		data: [baseData, setBaseData],
	};

	return (
		<UserContext.Provider value={globalStates}>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route exact path="/events">
						<EventTasks></EventTasks>
					</Route>
					<PrivateRoute path="/events/:_id">
						<Register></Register>
					</PrivateRoute>
					<Route path="/admin">
						<AdminDashboard></AdminDashboard>
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
