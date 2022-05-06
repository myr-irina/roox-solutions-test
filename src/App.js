import Header from "./components/Header";
import SortPanel from "./components/SortPanel";
import UserInfoList from "./components/UserInfoList";
import { Outlet } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import Main from "./components/Main";

function App() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		axios
			.get(BASE_URL)
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsLoading(false);
					setUsers([]);
				}
			});
	});

	return (
		<div>
			<Routes>
				<Route path='/' element={<Main users={users} />}>
					<Route index element={<UserInfoList users={users} />} />
					<Route path='/profile' element={<UserProfile />} />
				</Route>
			</Routes>

			{/* <SortPanel />
			<div className='container'>
				<Outlet users={users} />
			</div> */}
		</div>
	);
}

export default App;
