import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";
import SortPanel from "./SortPanel";

function UserInfoList() {
	return (
		<>
			<SortPanel />
			<div className='container'>
				<Header />
				<div className='user-list__wrapper'>
					<ul className='user-list'>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
						<li className='user-list__item'>
							<UserCard />
						</li>
					</ul>
					<p className='user-list__text'>Найдено 10 пользователей</p>
				</div>
			</div>
		</>
	);
}

export default UserInfoList;
