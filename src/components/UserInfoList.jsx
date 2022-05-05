import React from "react";
import UserCard from "./UserCard";

function UserInfoList() {
	return (
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
			<p className="user-list__text">Найдено 10 пользователей</p>
		</div>
		
	);
}

export default UserInfoList;
