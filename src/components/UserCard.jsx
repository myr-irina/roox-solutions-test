import React from "react";

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
						value='Иван Иванов'
					/>
				</li>
				<li>
					<label for='city'>город:</label>
					<input
						type='text'
						id='city'
						name='user-card__city'
						value='Москва'
					></input>
				</li>
				<li>
					<label for='company'>компания:</label>
					<input
						type='text'
						id='company'
						name='user-card__company'
						value='Пример'
					></input>
				</li>
			</ul>
			<p>
				<button type='button'>Подробнее</button>
			</p>
		</form>
	);
}

export default UserCard;
