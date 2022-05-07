import UserInfoList from "./components/UserInfoList";
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
	const [user, setUser] = useState(null);

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
	}, []);

	// function handleSort() {
	// 	const sortedData = [...users].sort((a,b) => {
	// 		return a.item.localeCompare(b.item)
	// 	})

	// 	setUsers(sortedData);
	// }

	function handleSortByCity() {
		const sortedData = [...users].sort((a, b) => {
			return a.address.city.localeCompare(b.address.city);
		});

		setUsers(sortedData);
	}

	function handleSortByCompany() {
		const sortedData = [...users].sort((a, b) => {
			return a.company.name.localeCompare(b.company.name);
		});

		setUsers(sortedData);
	}

	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<Main
							users={users}
							handleSortByCompany={handleSortByCompany}
							handleSortByCity={handleSortByCity}
						/>
					}
				>
					<Route index element={<UserInfoList users={users} />} />
					<Route path=':id' element={<UserProfile users={users} />} />
				</Route>

				<Route
					path='*'
					element={
						<main style={{ padding: "1rem" }}>
							<p>Page's not found</p>
						</main>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
