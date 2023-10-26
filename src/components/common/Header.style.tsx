/** @jsx jsx */
import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  justify-content: space-around;
  width: 47.25rem;
  height: 3.4375rem;
  background-color: var(--color-white);
  filter: drop-shadow(0px 0px 18px #dadfeb);
  border-radius: 0.5rem;
  align-items: center;
  font-weight: bold;
  margin: 0 auto;
`;

export const ButtonWrap = css`
  display: flex;
  gap: 0.56rem;
  margin-left: 19.38rem;
`;

export const Button = css`
  width: 5.5625rem;
  height: 1.9375rem;
  color: var(--color-main);
  background-color: var(--color-white);
  padding: 0.1rem;
  border: 1px solid var(--color-gray);
  border-radius: 1.88rem;
`;
