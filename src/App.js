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
	const [isLoading, setIsLoading] = useState(true);
	const [sortingMethod, setSortingMethod] = useState("city");

	useEffect(() => {
		axios
			.get(BASE_URL)
			.then((res) => {
				setIsLoading(false);
				setError(false);
				setUsers(res.data);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsLoading(false);
					setUsers([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsLoading(false);
				setUsers([]);
			});
	}, []);

	useEffect(() => {
		const sortArray = (type) => {
			const types = {
				city: (user) => user.address.city,
				company: (user) => user.company.name,
			};

			const propertyGetter = types[type];

			const sortedData = [...users].sort((a, b) => {
				return propertyGetter(a).localeCompare(propertyGetter(b));
			});

			setUsers(sortedData);
		};

		sortArray(sortingMethod);
	}, [sortingMethod]);

	
	return (
		<div>
			<Routes>
				<Route
					path='/'
					element={
						<Main
							users={users}
							setUsers={setUsers}
							isLoading={isLoading}
							setSortingMethod={setSortingMethod}
						/>
					}
				>
					<Route
						index
						element={<UserInfoList users={users} isLoading={isLoading} />}
					/>
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
