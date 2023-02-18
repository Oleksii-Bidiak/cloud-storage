import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFiles, searchFiles } from "../../actions/file";
import Logo from "../../assets/img/logo.svg";
import { showLoader } from "../../reducers/appReducer";
import { logout } from "../../reducers/userReducer";
import { Input } from "../../utils/input/Input";
import "./header.scss";

export const Header = () => {
  const [searchName, setSearchName] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentDir = useSelector((state) => state.files.currentDir);
  const dispatch = useDispatch();

  const searchChangeHandler = (value) => {
    setSearchName(value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
	 dispatch(showLoader())
    if (value !== "") {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchFiles(value));
          },
          500,
          value
        )
      );
    } else {
      dispatch(getFiles(currentDir));
    }
  };

  return (
    <header className="header">
      <div className="container">
        <img className="header_logo" src={Logo} alt="logo" />
        <div className="header__header">MERN CLOUD</div>
        {isAuth && (
          <Input
            value={searchName}
            setValue={searchChangeHandler}
            placeholder={"Назва файлу"}
            type={"text"}
          />
        )}
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
