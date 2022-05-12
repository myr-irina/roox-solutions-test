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
    address: {
      city: "",
      street: "",
    },
    zipcode: "",
    phone: "",
    website: "",
    comment: "",
  });
  const [errorInputEmail, setErrorInputEmail] = useState(false);
  const [errorInputPhone, setErrorInputPhone] = useState(false);
  const [errorInputWebsite, setErrorInputWebsite] = useState(false);
  const [isRequired, setIsRequired] = useState("");
  const [error, setError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (errorInputEmail || errorInputPhone || errorInputWebsite || error) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [errorInputEmail, errorInputPhone, errorInputWebsite, error]);

  if (!user) return null;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(userData));
    setIsReadOnly(true);
  }

  return (
    <>
      <ProfileHeader setIsReadOnly={setIsReadOnly} />
      <section className="user-profile">
        <form className="user-profile__form" autoComplete="off" noValidate>
          <ul className="user-profile__list">
            <li className="user-profile__item">
              <label htmlFor="name">Name</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""}`}
                type="text"
                id="name"
                name="user-profile__name"
                placeholder="Иван Иванов"
                value={userData.name}
                readOnly={isReadOnly}
                onChange={(e) => {
                  setUserData((oldUserData) => {
                    return {
                      ...oldUserData,
                      name: e.target.value,
                    };
                  });

                  const value = e.target.value;
                  if (!value) {
                    setError(true)
                  } else {
                    setError(false)
                  }
                }}
              />
              {error && <span>Заполните, пожалуйста, поле</span>}
            </li>

            <li className="user-profile__item">
              <label htmlFor="user-name">User name</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""}`}
                type="text"
                id="user-name"
                name="user-profile__username"
                placeholder="Ivan"
                value={userData.username}
                readOnly={isReadOnly}
                required
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

            <li className="user-profile__item">
              <label htmlFor="email">E-mail</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""} ${
                  errorInputEmail ? "input-invalid" : ""
                }`}
                type="email"
                id="email"
                name="user-profile__email"
                placeholder="example@mail.ru"
                value={userData.email}
                readOnly={isReadOnly}
                required
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
                    setErrorInputEmail(true);
                  } else {
                    setErrorInputEmail(false);
                  }
                }}
              />
            </li>

            <li className="user-profile__item">
              <label htmlFor="street">Street</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""}`}
                type="text"
                id="street"
                name="user-profile__street"
                value={userData.address.street}
                placeholder="ул. Пример"
                readOnly={isReadOnly}
                required
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

            <li className="user-profile__item">
              <label htmlFor="city">City</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""}`}
                type="text"
                id="city"
                name="user-profile__city"
                placeholder="Москва"
                value={userData.address.city}
                readOnly={isReadOnly}
                required
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

            <li className="user-profile__item">
              <label htmlFor="zip-code">Zip code</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""}`}
                id="zip-code"
                name="user-profile__zip-code"
                placeholder="1234234"
                value={userData.address.zipcode}
                readOnly={isReadOnly}
                required
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

            <li className="user-profile__item">
              <label htmlFor="phone">Phone</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""} ${
                  errorInputPhone ? "input-invalid" : ""
                }`}
                type="tel"
                id="phone"
                name="user-profile__phone"
                placeholder="89991112233"
                minLength="11"
                maxLength="11"
                value={userData.phone}
                readOnly={isReadOnly}
                required
                onChange={(e) => {
                  setUserData((oldUserData) => {
                    return {
                      ...oldUserData,
                      phone: e.target.value,
                    };
                  });

                  const value = e.target.value;
                  if (!/([0-9]{11}$)/i.test(value)) {
                    setErrorInputPhone(true);
                  } else {
                    setErrorInputPhone(false);
                  }
                }}
              />
            </li>

            <li className="user-profile__item">
              <label htmlFor="url">Website</label>
              <input
                className={`${isReadOnly ? "input-disabled" : ""} ${
                  errorInputWebsite ? "input-invalid" : ""
                }`}
                type="url"
                id="url"
                name="user-profile__url"
                placeholder="www.example.com"
                value={userData.website}
                readOnly={isReadOnly}
                required
                onChange={(e) => {
                  setUserData((oldUserData) => {
                    return {
                      ...oldUserData,
                      website: e.target.value,
                    };
                  });

                  const value = e.target.value;
                  if (
                    !/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i.test(
                      value
                    )
                  ) {
                    setErrorInputWebsite(true);
                  } else {
                    setErrorInputWebsite(false);
                  }
                }}
              />
            </li>

            <li className="user-profile__item">
              <label htmlFor="msg">Comment</label>
              <textarea
                className={`${isReadOnly ? "input-disabled" : ""}`}
                type="text"
                id="msg"
                name="user_message"
                value={userData.comment}
                readOnly={isReadOnly}
                onChange={(e) => {
                  setUserData((oldUserData) => {
                    return {
                      ...oldUserData,
                      comment: e.target.value,
                    };
                  });
                }}
              />
            </li>
          </ul>

          <button
            type="submit"
            className={`btn ${isReadOnly ? "btn__disabled" : ""}`}
            onClick={handleSubmit}
            disabled={!formValid}
          >
            Отправить
          </button>
        </form>
      </section>
    </>
  );
}

export default UserProfile;
