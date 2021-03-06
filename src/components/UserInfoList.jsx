import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";
import Preloader from "./Preloader";

function UserInfoList({ users, isLoading }) {
	return (
		<>
			<Header />
			
			<div className='user-list__wrapper'>
				{isLoading ? (
					<Preloader />
				) : (
					<>
						<ul className='user-list'>
							{users &&
								users.slice(0, 9).map((user) => {
									return (
										<li className='user-list__item' key={user.id}>
											<UserCard user={user} />
										</li>
									);
								})}
						</ul>
						<p className='user-list__text'>
							Найдено {users.length} пользователей
						</p>
					</>
				)}
			</div>
		</>
	);
}

export default UserInfoList;
