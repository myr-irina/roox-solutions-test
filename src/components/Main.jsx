import SortPanel from "./SortPanel";
import { Outlet } from "react-router-dom";

function Main({
	users,
	setUsers,
	setSortingMethod,
	isLoading,
}) {
	return (
		<div className='wrapper'>
			<SortPanel
				users={users}
				setUsers={setUsers}
				setSortingMethod={setSortingMethod}			
			/>
			<div className='container'>
				<Outlet users={users} isLoading={isLoading} />
			</div>
		</div>
	);
}

export default Main;
