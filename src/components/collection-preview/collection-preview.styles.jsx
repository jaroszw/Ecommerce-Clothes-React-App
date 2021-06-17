import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 950px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }

  @media screen and (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
