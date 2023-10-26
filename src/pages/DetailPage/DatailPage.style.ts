import { css } from "@emotion/react";

export const container = css`
  width: 47.25rem;
  height: auto;
  background-color: var(--color-white);
  margin: 1.5rem auto;
  padding: 1.56rem;
  border-radius: 0.5rem;
`;

export const header = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0.8rem 0 0.8rem;
`;

export const subHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0.8rem 0 0.8rem;
`;

export const itemTag = css`
  border-radius: 1.875rem;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  padding: 0.2rem;
  width: 6rem;
  text-align: center;
`;

export const content = css`
  margin: 1.5rem 0.8rem 0.8rem 0.8rem;
`;

export const title = css`
  font-weight: bold;
`;
