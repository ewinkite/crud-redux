import * as style from "./DefaultBtn.style";
import { ButtonHTMLAttributes } from "react";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function button({ text, disabled, onClick }: props) {
  return (
    <button css={style.button} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
