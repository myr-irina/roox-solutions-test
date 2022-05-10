import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function UserProfile({ users }) {
	const [isReadOnly, setIsReadOnly] = useState(true);
	// const [isReadOnlyInput, setIsReadOnlyInput] = useState(true);
	const [userData, setUserData] = useState({});

	const { id } = useParams();
	const user = users.find((item) => item.id === +id);

	useEffect(() => {
		if (!user) return;
		setUserData({
			...user,
		});
	}, [user]);

	if (!user) return null;

	function handleInputChange(e) {
		setUserData(e.target.value);
		console.log(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		//проверить, что все поля формы валидны, кнопка отправки валидна
		//сформировать JSON и вывести ее в консоль
		console.log(JSON.stringify(userData))
		setIsReadOnly(true);
	}

	//каждый инпут сделать отделным компонентом, у каждого комп. свой value и onChange

	return (
		<>
			<ProfileHeader setIsReadOnly={setIsReadOnly} />
			<section className='user-profile'>
				<form className='user-profile__form' autoComplete='off'>
					<ul className='user-profile__list'>
						<li className='user-profile__item'>
							<label htmlFor='name'>Name</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='name'
								name='user-profile__name'
								value={userData.name}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData, name: e.target.value
										}
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='user-name'>User name</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='user-name'
								name='user-profile__username'
								defaultValue={user.username}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='email'>E-mail</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='email'
								id='email'
								name='user-profile__email'
								defaultValue={user.email}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='street'>Street</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='street'
								name='user-profile__street'
								defaultValue={user.address.street}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='city'>City</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='city'
								name='user-profile__city'
								defaultValue={user.address.city}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='zip-code'>Zip code</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='number'
								id='zip-code'
								name='user-profile__zip-code'
								defaultValue={user.address.zipcode}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='phone'>Phone</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='tel'
								id='phone'
								name='user-profile__phone'
								placeholder='89991112233'
								size='11'
								minLength='11'
								maxLength='11'
								defaultValue={user.phone}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='url'>Website</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='url'
								id='url'
								name='user-profile__url'
								placeholder='www.example.com'
								defaultValue={user.website}
								onChange={handleInputChange}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='msg'>Comment</label>
							<textarea id='msg' name='user_message' />
						</li>
					</ul>
				</form>

				<button
					type='submit'
					className={`btn ${isReadOnly ? "btn__disabled" : ""}`}
					onClick={handleSubmit}
				>
					Отправить
				</button>
			</section>
		</>
	);
}

export default UserProfile;
