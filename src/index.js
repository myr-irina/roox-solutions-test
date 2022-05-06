import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import UserInfoList from "./components/UserInfoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
		<App/>
			{/* <Routes>
				<Route path='/' element={<App />}>
					<Route index element={<UserInfoList />} />
					<Route path='/profile' element={<UserProfile />} />
				</Route>
			</Routes> */}
		</BrowserRouter>
	</React.StrictMode>
);
