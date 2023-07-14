import styled from '@emotion/styled'

export const NavBar = styled.div`
  diplay: flex !important;
  align-items: center !important;
  gap: 16px;
  widht: 100%;
  background: #0d70df;
  padding: 8px;
`

export const AppTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`

export const ListItemCard = styled.div`
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

export const InfoText = styled.span`
  font-size: 14px;
  color: #b5b5b5;
`

export const Image = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : '100px')};
  height: ${(props) => (props.height ? props.height : '120px')};
`

export const VerticalInfoWrapper = styled.div<{ gap?: string; width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props?.gap || '8px'};
  width: ${(props) => props?.width || '100%'};
  height: ${(props) => props?.height || '100%'};
`
