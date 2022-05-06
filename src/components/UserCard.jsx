import React from "react";
import { Link } from "react-router-dom";

function UserCard() {
	return (
		<form className='user-card'>
			<ul className='user-card__list'>
				<li>
					<label for='name'>ФИО:</label>
					<input
						type='text'
						id='name'
						name='user-card__name'
						defaultValue='Иван Иванов'
					/>
				</li>
				<li>
					<label for='city'>город:</label>
					<input
						type='text'
						id='city'
						name='user-card__city'
						defaultValue='Москва'
					></input>
				</li>
				<li>
					<label for='company'>компания:</label>
					<input
						type='text'
						id='company'
						name='user-card__company'
						defaultValue='Пример'
					></input>
				</li>
			</ul>
			<p>
				<button type='button'>
					<Link className='user-card__link' to='profile'>
						Подробнее
					</Link>
				</button>
			</p>
		</form>
	);
}

export default UserCard;
