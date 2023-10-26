import * as style from "./DatailPage.style";
import DefaultBtn from "../../components/common/DefaultBtn";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function DetailPage() {
  const [item, setItem] = useState<any>({});
  const navigate = useNavigate();
  // URL에서 id값 가져오는 hook
  const { id } = useParams();

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

  function handleEdit() {
    navigate("/edit/" + id);
  }

  async function handleDel() {
    if (id) {
      await deleteDoc(doc(db, "posts", id));
      navigate("/list");
    }
  }

  return (
    <div id="Container" css={style.container}>
      <div id="Header" css={style.header}>
        <div css={style.title}>{item.title}</div>
        <div id="btnWrap">
          <DefaultBtn text={"수정"} onClick={handleEdit}></DefaultBtn>
          <DefaultBtn text={"삭제"} onClick={handleDel}></DefaultBtn>
        </div>
      </div>
      <div id="SubHeader" css={style.subHeader}>
        <div css={style.itemTag}>{item.tag}</div>
        <div>{item.workTerm}</div>
      </div>
      <MDEditor.Markdown style={{ padding: 10 }} source={item.value} />
    </div>
  );
}

export default DetailPage;
