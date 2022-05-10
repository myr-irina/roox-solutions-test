import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function UserProfile({ users }) {
	const [isReadOnly, setIsReadOnly] = useState(true);
	// const [isReadOnlyInput, setIsReadOnlyInput] = useState(true);
	const [value, setValue] = useState();

	const { id } = useParams();
	const user = users.find((item) => item.id === +id);

	function handleInputChange(e) {
		setValue(e.target.value);
		console.log(e.target.value);
	}

	return (
		<>
			<ProfileHeader setIsReadOnly={setIsReadOnly} />
			<section className='user-profile'>
				<form className='user-profile__form' autoComplete='off'>
					<ul className='user-profile__list'>
						<li className='user-profile__item'>
							<label for='name'>Name</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='name'
								name='user-profile__name'
								value={user.name}
								readOnly={isReadOnly}
								onChange={handleInputChange}
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
								type='email'
								id='email'
								name='user-profile__email'
								defaultValue={user.email}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='street'>Street</label>
							<input
								type='text'
								id='street'
								name='user-profile__street'
								defaultValue={user.address.street}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='city'>City</label>
							<input
								type='text'
								id='city'
								name='user-profile__city'
								defaultValue={user.address.city}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='zip-code'>Zip code</label>
							<input
								type='number'
								id='zip-code'
								name='user-profile__zip-code'
								defaultValue={user.address.zipcode}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='phone'>Phone</label>
							<input
								type='tel'
								id='phone'
								name='user-profile__phone'
								placeholder='89991112233'
								size='11'
								minLength='11'
								maxLength='11'
								defaultValue={user.phone}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='url'>Website</label>
							<input
								type='url'
								id='url'
								name='user-profile__url'
								placeholder='www.example.com'
								defaultValue={user.website}
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
				>
					Отправить
				</button>
			</section>
		</>
	);
}

export default UserProfile;
