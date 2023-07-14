import styled from '@emotion/styled'

export const AnimeCardDiv = styled.div`
  padding: 12px;
  min-height: 170px;
  width: 100%;
  display: flex;
  align-items: start;
  gap: 12px;
  background-color: #222222;
  border-bottom:#f9f9f9 1px solid;
  color: white;
  position: relative;

  @media only screen and (max-width: 768px) {
    max-height: 270px;
  }
`

export const AnimeCardCover = styled.img`
  width: 100px;
  height: 100%;
  max-height: 120px;
`
export const AnimeCardInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const AnimeCardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`
export const AnimeCardMetaInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5%;
  width: 100%;
  color: #B5B5B5;
`
export const AnimeCardMetaInfoText = styled.span`
  font-size: 14px;
  color: #B5B5B5;
`

export const AnimeCardDescriptionText = styled.p`
  font-size: 12px;
  color: #B5B5B5;
  
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
  white-space: wrap; 
`