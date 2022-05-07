import React from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function UserProfile({ users }) {
	console.log(users);
	const { id } = useParams();
	console.log(id)
	const user = users.find(item => item.id === +id);

	return (
		<>
			<ProfileHeader />
			<section className='user-profile'>
				<form className='user-profile__form' autoComplete='off'>
					<ul className='user-profile__list'>
						<li className='user-profile__item'>
							<label for='name'>Name</label>
							<input
								type='text'
								id='name'
								name='user-profile__name'
								defaultValue={user.name}
							/>
						</li>

						<li className='user-profile__item'>
							<label for='user-name'>User name</label>
							<input
								type='text'
								id='user-name'
								name='user-profile__username'
								defaultValue={user.username}
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
				<button type='submit'>Отправить</button>
			</section>
		</>
	);
}

export default UserProfile;
