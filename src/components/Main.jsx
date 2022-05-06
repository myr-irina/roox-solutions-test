import SortPanel from "./SortPanel";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

function Main({user, users}) {

	return (
		<div className='wrapper'>
			<SortPanel />
			<div className='container'>
				<Outlet users={users} />
			</div>
		</div>
	);
}

export default Main;
