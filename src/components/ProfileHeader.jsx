import React from "react";

function ProfileHeader() {
	return (
		<header className='header'>
			<h2 className='header__title'>Профиль пользователя</h2>
			<button type='button' className='header__button'>Редактировать</button>
		</header>
	);
}

export default ProfileHeader;
