import styled from '@emotion/styled'

export const AnimeCardDiv = styled.div`
  padding: 12px;
  min-height: 170px;
  width: 100%;
  display: flex;
  align-items: start;
  gap: 12px;
  background-color: #222222;
  border-bottom: #f9f9f9 1px solid;
  color: white;
  position: relative;

  @media only screen and (max-width: 768px) {
    max-height: 270px;
  }
`

export const AnimeCardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const AnimeCardDescriptionText = styled.p`
  font-size: 12px;
  color: #b5b5b5;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: wrap;
`
