import * as style from "./Header.style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handleSecondLink() {
    navigate("/list");
  }
  return (
    <div css={style.Container}>
      <p>이승연의 Portfolio</p>
      <div css={style.ButtonWrap}>
        <button css={style.Button}>이력서</button>
        <button css={style.Button} onClick={handleSecondLink}>
          결과물
        </button>
        <button css={style.Button}>기타</button>
      </div>
    </div>
  );
};

export default Header;
