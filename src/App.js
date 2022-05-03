import Header from "./components/Header";
import SortPanel from "./components/SortPanel";
import UserInfoList from "./components/UserInfoList";

function App() {
	return (
		<>
			<div className='wrapper'>
				<SortPanel />
				<div className='container'>
					<Header />
					<UserInfoList />
				</div>
			</div>
		</>
	);
}

export default App;
