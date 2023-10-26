import * as style from "./EditPage.style";
import DefaultBtn from "../../components/common/DefaultBtn";
import { ChangeEvent, useEffect, useState } from "react";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  //input hook
  const [title, setTitle] = useState("");
  const [workTerm, setWorkTerm] = useState("");
  const [tag, setTag] = useState("");
  const [mainImg, setMainImg] = useState<FileList | null>();
  const { id } = useParams();
  const [item, setItem] = useState<any>({});
  //페이지이동 hook
  const navigate = useNavigate();

  // id에 해당되는 post data불러오기
  const itemData = useEffect(() => {
    const getContent = async () => {
      if (id) {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        const itemData = docSnap.data();
        setItem(itemData);
      }
    };
    getContent();
  }, []);
  const itemValue = item.value;

  //에디터 hook
  const [value, setValue] = useState<string | undefined>();
  useEffect(() => {
    setValue(item.value);
    setTitle(item.title);
    setTag(item.tag);
    setWorkTerm(item.workTerm);
  }, [itemValue]);

  // 수정 사항 저장하는 로직
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

  //form submit시 firebase DB내 업데이트되는 로직
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //firebase storage내 mainImg 등록되는 로직
    if (mainImg !== null && mainImg !== undefined) {
      const storage = getStorage();
      const storageRef = ref(storage, mainImg[0].name);
      const mainImgTitle = mainImg[0].name;
      const uploadTask = uploadBytesResumable(storageRef, mainImg[0]);
      await getDownloadURL(uploadTask.snapshot.ref).then((mainImgUrl) => {
        //firebase DB내 form 내용 등록되는 로직
        if (id) {
          setDoc(doc(db, "posts", id), {
            title: title,
            workTerm: workTerm,
            tag: tag,
            mainImg: mainImgUrl,
            mainImgTitle: mainImgTitle,
            value: value,
            update: Date()
          });
        }
      });
    }
    if (id) {
      updateDoc(doc(db, "posts", id), {
        title: title,
        workTerm: workTerm,
        tag: tag,
        value: value,
        update: Date()
      });
    }

    navigate("/list");
  };

  return (
    <div id="Container" css={style.Container}>
      <form onSubmit={onSubmit}>
        <div id="inputTop" css={style.input}>
          <label htmlFor="title">
            제목
            <input
              id="title"
              size={50}
              value={title}
              onChange={onChangeTitle}
            />
          </label>

          <label htmlFor="workTerm">
            작업기간{" "}
            <input
              id="workTerm"
              size={30}
              value={workTerm}
              onChange={onChangeWorkTerm}
            ></input>
          </label>
        </div>
        <div id="inputBottom" css={style.input}>
          <label htmlFor="tag">
            태그 <input id="tag" size={35} onChange={onChangeTag} value={tag} />
          </label>
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
          <MDEditor key={id} value={value} height={560} onChange={setValue} />
        </div>
      </form>
    </div>
  );
};

export default EditPage;
