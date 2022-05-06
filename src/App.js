import Header from "./components/Header";
import SortPanel from "./components/SortPanel";
import UserInfoList from "./components/UserInfoList";
import { Outlet } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='wrapper'>
			<SortPanel />
			<div className='container'>
				<Outlet />
			</div>

			{/* <Route path='/' element={<UserInfoList />} />
				<Route path='profile' element={<UserProfile />} /> */}
		</div>
	);
}

export default App;
