import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import "./disk.scss";
import { FileList } from "./fileList/FileList";
import Popup from "./Popup";

export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);

  const showPopupHandler = () => {
    //  dispatch(createDir(currentDir, "name"));
    dispatch(setPopupDisplay("flex"));
  };

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back">Назад</button>
        <button className="disk__create" onClick={showPopupHandler}>
          Создать папку
        </button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
};
