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

export const ListItemCard = styled.div<{ height?: string; width?: string; padding?: string; backgroundColor?: string }>`
  padding: ${(props) => props.padding || '12px'};
  height: ${(props) => props.height || '170px'};
  width: ${(props) => props.width || '100%'};
  display: flex;
  align-items: start;
  gap: 12px;
  background-color: ${(props) => props.backgroundColor || '#222222'};
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
export const FlexWrapper = styled.div<{
  gap?: string
  width?: string
  height?: string
  direction?: string
  alignItems?: string
  justifyContent?: string
  wrap?: string
  margin?: string
  padding?: string
}>`
  display: flex !important;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  gap: ${(props) => props.gap || '0'};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap};`}
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`

export const Text = styled.span<{
  fontFamily?: string
  fontSize?: string
  color?: string
  fontStyle?: string
  fontWeight?: string
}>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '14px')};
  color: ${(props) => (props.color ? `${props.color}` : '#b5b5b5')};
  ${(props) => (props.fontFamily ? `font-family: ${props.fontFamily}` : '')}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight}` : '')}
 ${(props) => (props.fontStyle ? `font-style: ${props.fontStyle}` : '')}
`
