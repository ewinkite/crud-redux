import DefaultBtn from "../../components/common/DefaultBtn";
import { useNavigate } from "react-router-dom";
import * as style from "./ListPage.style";
import Item from "../../components/ListPage/Item";
import { props } from "../../App";
import { useEffect } from "react";

const ListPage = ({ items }: props) => {
  const navigate = useNavigate();

  function handleWriteBtn() {
    navigate("/add");
  }

  return (
    <div>
      <div css={style.filterContainer}>FilterContainer</div>
      <div id="listContainer" css={style.ListContainer}>
        <div css={style.ListHeaderWrap}>
          <div css={style.listTitle}>
            전체
            <span> {items.length}</span>
          </div>
          <DefaultBtn text={"글쓰기"} onClick={handleWriteBtn}></DefaultBtn>
        </div>
        <li id="listItems" css={style.listItems}>
          {items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              mainImg={item.mainImg}
              tag={item.tag}
              title={item.title}
              workTerm={item.workTerm}
              value={item.value}
            />
          ))}
        </li>
      </div>
    </div>
  );
};

export default ListPage;
