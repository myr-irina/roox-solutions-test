import SortPanel from "./SortPanel";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

function Main({
	users,
	setUsers,
	handleSortByCity,
	handleSortByCompany,
	setSortingMethod,
	sortingMethod,
	isLoading,
}) {
	return (
		<div className='wrapper'>
			<SortPanel
				// handleSortByCity={handleSortByCity}
				// handleSortByCompany={handleSortByCompany}
				users={users}
				setUsers={setUsers}
				setSortingMethod={setSortingMethod}
				sortingMethod={sortingMethod}
			/>
			<div className='container'>
				<Outlet users={users} isLoading={isLoading} />
			</div>
		</div>
	);
}

export default Main;
