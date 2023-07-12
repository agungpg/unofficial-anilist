import styled from "@emotion/styled";

export const AnimeDetailContainer = styled.div`
  padding: 16px;
  width:100%;


  display: grid;
  grid-template-areas:
    'cover body '
    'rating-wrapper body';

  grid-template-columns: 200px auto;
  gap: 12px;
  background-color: #222222;


  @media only screen and (max-width: 768px) {
    grid-template-areas:
      'cover'
      'body'
      'rating-wrapper';

    grid-template-columns: 100%;

  }
  @media only screen and (max-width: 600px) {
    .item-info-wrapper {
      width: 100% !important;
    }
    .item-info-wrapper {
      justify-content: center;
    }
    .sub-info-wrapper {
      display: flex !important;
      justify-content:center !important;
      align-items:center !important;
    }
    .title {
      text-align: center;
    }
    .description {
      text-align: center;
    }
  }

  .rating-wrapper {
    background-color: #111;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
    color: #fff;
    grid-area: rating-wrapper;
    span { 
      display: block;
      font-weight: 500;
      font-size: 16px
    }
  }

  .title {
    font-size: 1.7em;
    font-weight: 500;
    line-height: normal;
    color:#fff;
  }

  .sub-title {
    font-size: 14px;
    font-weight: 500;
    color:#CCC;
  }
  .description {
    font-size: 12px;
    font-weight: 300;
    color:#CCC;
  }
  .cover-image-wrapper {
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    grid-area: cover;
  }
  .cover-image { 
    width: 165px;
    height: 230px;
  }
  .w-full {
    width: 100%;
  }
  .flex-column-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    grid-area: body;
  }
  .sub-info-wrapper {
    width: 100%;
    display: flex;
    flex-flow: wrap;
  }
  .item-info-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    color: #fff;
    
    .point {
      width: 10px;
      height: 10px;
      border-radius: 4px;
      background-color: #0D70DF;
    }
  }
  .genre-wrapper {
    width: 100%;
    display: flex;
    flex-flow: wrap;
  }
  .genre {
    margin: 4px 8px 4px 0;
    border: .5px solid #0c70de;
    padding: 4px 8px;
    border-radius: 3px;
    color:#CCC;
    font-size: 12px;
  }

  .collect-btn {
    text-align: center;
    background: #0c70de;
    font-size: 13px;
    color: #FFF;
    border-radius: 5px;
    padding: 8px 5px;
    cursor: pointer;
  }
`