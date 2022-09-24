import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - ${p => p.theme.space[6]}px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${p => p.theme.space[4]}px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`