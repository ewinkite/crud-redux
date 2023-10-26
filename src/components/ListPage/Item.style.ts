import { css } from "@emotion/react";

export const itemContainer = css`
  margin: 0 auto;
  width: 20.9375rem;
  height: auto;
  border-radius: 0.5rem;
  border: 1px solid var(--color-gray);
  margin: 0.9rem;
  background-color: var(--color-white);
  list-style: none;
  padding: 1.25rem;
  gap: 0.9rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;

  &:hover {
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.04));
  }
`;

export const itemImage = css`
  width: 18.3125rem;
  height: 12.5625rem;
  background-color: var(--color-gray);
  background-size: cover;
`;

export const itemDesc = css`
  display: flex;
  flex-direction: column;
`;

export const itemTitle = css`
  font-weight: bold;
`;

export const itemTag = css`
  border-radius: 1.875rem;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  padding: 0.2rem;
  width: 6rem;
  text-align: center;
`;
