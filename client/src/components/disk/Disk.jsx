import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, getFiles } from "../../actions/file";
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer";
import "./disk.scss";
import { FileList } from "./fileList/FileList";
import Popup from "./Popup";

export const Disk = () => {
  const dispatch = useDispatch();
  const currentDir = useSelector((state) => state.files.currentDir);
  const dirStack = useSelector((state) => state.files.dirStack);

  const showPopupHandler = () => {
    //  dispatch(createDir(currentDir, "name"));
    dispatch(setPopupDisplay("flex"));
  };

  useEffect(() => {
    dispatch(getFiles(currentDir));
  }, [currentDir]);

  const backClickHandler = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back" onClick={backClickHandler}>
          Назад
        </button>
        <button className="disk__create" onClick={showPopupHandler}>
          Создать папку
        </button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
};
