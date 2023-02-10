import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { logout } from "../../reducers/userReduxer";
import "./header.scss";

export const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="container">
        <img className="header_logo" src={Logo} alt="logo" />
        <div className="header__header">MERN CLOUD</div>
        {!isAuth && (
          <div className="header__login">
            <Link to="/login">Вхід</Link>
          </div>
        )}
        {!isAuth && (
          <div className="header__registration">
            <Link to="/registration">Реєстрація</Link>
          </div>
        )}
        {isAuth && (
          <div className="header__login" onClick={() => dispatch(logout())}>
            Вихід
          </div>
        )}
      </div>
    </header>
  );
};
