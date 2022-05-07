import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user }) {
	// console.log(user)
	return (
		<section className='user-card'>
			<ul className='user-card__list'>
				<li>
					<span>ФИО:</span>
					<p>{user.name}</p>
				</li>
				<li>
					<span>город:</span>
					<p>{user.address.city}</p>
				</li>
				<li>
					<span>компания:</span>
					<p>{user.company.name}</p>
				</li>
			</ul>
			<p>
				<button type='button'>
					<Link className='user-card__link' to={`/${user.id}`}>
						Подробнее
					</Link>
				</button>
			</p>
		</section>
	);
}

export default UserCard;
