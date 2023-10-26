import * as style from "./AddPage.style";
import DefaultBtn from "../../components/common/DefaultBtn";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

const AddPage = () => {
  //에디터 관련 hook
  const [value, setValue] = useState<string | undefined>("내용을 입력하세요.");
  //input 관련 hook
  const [title, setTitle] = useState("");
  const [workTerm, setWorkTerm] = useState("");
  const [tag, setTag] = useState("");
  const [mainImg, setMainImg] = useState<FileList | null>();

  const navigate = useNavigate();

  //input값 변경됨에 따른 set 변경
  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function onChangeWorkTerm(e: React.ChangeEvent<HTMLInputElement>) {
    setWorkTerm(e.target.value);
  }

  function onChangeTag(e: React.ChangeEvent<HTMLInputElement>) {
    setTag(e.target.value);
  }

  function onChangeMainImg(e: React.ChangeEvent<HTMLInputElement>) {
    setMainImg(e.target.files);
  }

  //form submit시 firebase DB내 등록되는 로직
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //firebase storage내 mainImg 등록되는 로직
    if (mainImg !== null && mainImg !== undefined) {
      const storage = getStorage();
      const storageRef = ref(storage, mainImg[0].name);
      const mainImgTitle = mainImg[0].name;
      const uploadTask = uploadBytesResumable(storageRef, mainImg[0]);
      await getDownloadURL(uploadTask.snapshot.ref).then((mainImgUrl) => {
        //firebase DB내 등록되는 로직
        addDoc(collection(db, "posts"), {
          title: title,
          workTerm: workTerm,
          tag: tag,
          mainImg: mainImgUrl,
          mainImgTitle: mainImgTitle,
          value: value,
          update: Date()
        });
      });
    }
    navigate("/list");
  };

  return (
    <div id="Container" css={style.Container}>
      <form onSubmit={onSubmit}>
        <div id="inputTop" css={style.input}>
          <label htmlFor="title">제목</label>
          <input id="title" size={50} value={title} onChange={onChangeTitle} />
          <label htmlFor="workTerm">작업기간</label>
          <input
            id="workTerm"
            size={30}
            value={workTerm}
            onChange={onChangeWorkTerm}
          />
        </div>
        <div id="inputBottom" css={style.input}>
          <label htmlFor="tag">태그</label>
          <input id="tag" size={35} value={tag} onChange={onChangeTag} />
          <label htmlFor="mainImg">대표사진</label>
          <input
            id="mainImg"
            size={35}
            type="file"
            onChange={onChangeMainImg}
          />
          <DefaultBtn text={"저장하기"} type="submit"></DefaultBtn>
        </div>
        <div className="markArea" css={style.markArea}>
          <MDEditor height={560} value={value} onChange={setValue} />
        </div>
      </form>
    </div>
  );
};

export default AddPage;
