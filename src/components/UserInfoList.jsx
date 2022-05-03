import React from "react";
import UserCard from "./UserCard";

function UserInfoList() {
	return (
		<ul className='user-list'>
			<li className="user-list__item">
				<UserCard />
			</li>
			<li className="user-list__item">
				<UserCard />
			</li>
      <li className="user-list__item">
				<UserCard />
			</li>
      <li className="user-list__item">
				<UserCard />
			</li>
      <li className="user-list__item">
				<UserCard />
			</li>
		</ul>
	);
}

export default UserInfoList;
