import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function UserProfile({ users }) {
	const [isReadOnly, setIsReadOnly] = useState(true);

	const { id } = useParams();
	const user = users.find((item) => item.id === +id);

	useEffect(() => {
		if (!user) return;
		setUserData({
			...user,
		});
	}, [user]);

	const [userData, setUserData] = useState({
		name: "",
		username: "",
		email: "",
		address: "",
		zipcode: "",
		phone: "",
		website: "",
		comment: "",
	});
	const [error, setError] = useState("");

	if (!user) return null;

	function handleSubmit(e) {
		e.preventDefault();
		console.log(JSON.stringify(userData));
		setIsReadOnly(true);
	}

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
											...oldUserData,
											name: e.target.value,
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='user-name'>User name</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='user-name'
								name='user-profile__username'
								value={userData.username}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											username: e.target.value,
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='email'>E-mail</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='email'
								id='email'
								name='user-profile__email'
								value={userData.email}
								readOnly={isReadOnly}
								onChange={(e) => {
									const value = e.target.value;

									setUserData((oldUserData) => {
										return {
											...oldUserData,
											email: e.target.value,
										};
									});

									if (
										!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
											value
										)
									) {
										setError("input-error");
									} else {
										setError("");
									}
								}}
							/>
							<p className='error'>{error && error}</p>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='street'>Street</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='street'
								name='user-profile__street'
								value={userData.address.street}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											address: {
												...oldUserData.address,
												street: e.target.value,
											},
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='city'>City</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='text'
								id='city'
								name='user-profile__city'
								value={userData.address.city}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											address: {
												...oldUserData.address,
												city: e.target.value,
											},
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='zip-code'>Zip code</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='number'
								id='zip-code'
								name='user-profile__zip-code'
								value={userData.address.zipcode}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											address: {
												...oldUserData.address,
												zipcode: e.target.value,
											},
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='phone'>Phone</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='tel'
								id='phone'
								name='user-profile__phone'
								placeholder='89991112233'
								size='11'
								minLength='11'
								maxLength='11'
								value={userData.phone}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											phone: e.target.value,
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='url'>Website</label>
							<input
								className={`${isReadOnly ? "input-disabled" : ""}`}
								type='url'
								id='url'
								name='user-profile__url'
								placeholder='www.example.com'
								value={userData.website}
								readOnly={isReadOnly}
								onChange={(e) => {
									setUserData((oldUserData) => {
										return {
											...oldUserData,
											website: e.target.value,
										};
									});
								}}
							/>
						</li>

						<li className='user-profile__item'>
							<label htmlFor='msg'>Comment</label>
							<textarea id='msg' name='user_message' />
						</li>
					</ul>

					<button
					type='submit'
					className={`btn ${isReadOnly ? "btn__disabled" : ""}`}
					onClick={handleSubmit}
				>
					Отправить
				</button>
				</form>

			
			</section>
		</>
	);
}

export default UserProfile;
