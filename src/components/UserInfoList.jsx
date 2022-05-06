import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";
import SortPanel from "./SortPanel";

function UserInfoList({ users }) {
	// console.log(users);
	return (
		<>
			<Header />
			<div className='user-list__wrapper'>
				<ul className='user-list'>
					{users &&
						users.slice(0, 9).map((user) => {
							return (
								<li className='user-list__item'>
									<UserCard user={user} key={user.id} />
								</li>
							);
						})}
					{/* <li className='user-list__item'>
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
					</li> */}
				</ul>
				<p className='user-list__text'>Найдено {users.length} пользователей</p>
			</div>
		</>
	);
}

export default UserInfoList;
