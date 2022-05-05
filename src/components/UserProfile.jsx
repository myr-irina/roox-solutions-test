import React from "react";
import ProfileHeader from "./ProfileHeader";
import SortPanel from "./SortPanel";

function UserProfile() {
	return (
		<>
			<SortPanel />
			<div className='container'>
				<ProfileHeader />
				<section className='user-profile'>
					<form>
						<ul className='user-profile__list'>
							<li className="user-profile__item">
								<label for='name'>Name</label>
								<input
									type='text'
									id='name'
									name='user-profile__name'
									placeholder='Иван Иванов'
								/>
							</li>

							<li className="user-profile__item">
								<label for='user-name'>User name</label>
								<input
									type='text'
									id='user-name'
									name='user-profile__username'
								/>
							</li>

							<li className="user-profile__item">
								<label for='email'>E-mail</label>
								<input
									type='email'
									id='email'
									name='user-profile__email'
									placeholder='example@mail.com'
								/>
							</li>

							<li className="user-profile__item">
								<label for='street'>Street</label>
								<input
									type='text'
									id='street'
									name='user-profile__street'
									placeholder='ул. Пример'
								/>
							</li>

							<li className="user-profile__item">
								<label for='city'>City</label>
								<input
									type='text'
									id='city'
									name='user-profile__city'
									placeholder='Москва'
								/>
							</li>

							<li className="user-profile__item">
								<label for='zip-code'>Zip code</label>
								<input
									type='number'
									id='zip-code'
									name='user-profile__zip-code'
									placeholder='1234234'
								/>
							</li>

							<li className="user-profile__item">
								<label for='phone'>Phone</label>
								<input
									type='tel'
									id='phone'
									name='user-profile__phone'
									placeholder='89991112233'
								/>
							</li>

							<li className="user-profile__item">
								<label for='url'>Website</label>
								<input
									type='url'
									id='url'
									name='user-profile__url'
									placeholder='www.example.com'
								/>
							</li>

							<li className="user-profile__item">
								<label for='msg'>Comment:</label>
								<textarea id='msg' name='user_message' />
							</li>
						</ul>
					</form>
				</section>
			</div>
		</>
	);
}

export default UserProfile;
