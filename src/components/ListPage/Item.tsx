import * as style from "./Item.style";
import { useNavigate } from "react-router-dom";

interface props {
  id: string;
  mainImg: string;
  value: string;
  title: string;
  workTerm: string;
  tag: string;
}

function Item({ id, mainImg, value, title, workTerm, tag }: props) {
  const navigate = useNavigate();

  function handleItemDetail() {
    navigate("/detail/" + id);
  }

  return (
    <ul id="listItem" css={style.itemContainer} onClick={handleItemDetail}>
      <img css={style.itemImage} src={mainImg} />
      <div id="itemTitle" css={style.itemTitle}>
        {title}
      </div>
      <div id="itemWorkTerm">{workTerm}</div>
      <div id="itemTags">
        <div css={style.itemTag}>{tag}</div>
      </div>
    </ul>
  );
}

export default Item;
