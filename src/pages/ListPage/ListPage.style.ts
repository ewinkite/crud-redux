import { css } from "@emotion/react";

export const listItems = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.8rem 0.8rem 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;

export const filterContainer = css`
  width: 47.25rem;
  height: 5.75rem;
  background-color: var(--color-white);
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  margin: 1.5rem auto;
`;

export const ListHeaderWrap = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.94rem 1.8rem 0 1.8rem;
`;

export const listTitle = css`
  font-weight: bold;

  & > span {
    font-weight: normal;
    color: var(--color-main);
  }
`;

export const ListContainer = css`
  width: 47.25rem;
  height: 44.3125rem;
  background-color: var(--color-white);
  margin: 1.5rem auto;
  border-radius: 0.5rem;
  overflow: auto;
`;
