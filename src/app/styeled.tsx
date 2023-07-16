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
  overflow?: string
  backgroundColor?: string
  border?: string

  smGap?: string
  smDirection?: string
  smAlignItems?: string
  smJustifyContent?: string
  smWrap?: string
  smWidth?: string
  smHeight?: string
  smOverflow?: string

  mdGap?: string
  mdDirection?: string
  mdAlignItems?: string
  mdJustifyContent?: string
  mdWrap?: string
  mdWidth?: string
  mdHeight?: string
  mdOverflow?: string

  lgGap?: string
  lgDirection?: string
  lgAlignItems?: string
  lgJustifyContent?: string
  lgWrap?: string
  lgWidth?: string
  lgHeight?: string
  lgOverflow?: string
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
  overflow: ${(props) => props.overflow || 'none'};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.border && `border: ${props.border};`}

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    ${(props) => props.smDirection && `flex-direction: ${props.smDirection};`}
    ${(props) => props.smAlignItems && `align-items: ${props.smAlignItems};`}
    ${(props) => props.smJustifyContent && `justify-content: ${props.smJustifyContent};`}
    ${(props) => props.smGap && `gap: ${props.smGap};`}
    ${(props) => props.smWidth && `width: ${props.smWidth};`}
    ${(props) => props.smHeight && `height: ${props.smHeight};`}
    ${(props) => props.smOverflow && `overflow: ${props.smOverflow};`}
  }

  /* Extra medium devices (phones, 600px and down) */
  @media (min-width: 601px) and (max-width: 768px) {
    ${(props) => props.mdDirection && `flex-direction: ${props.mdDirection};`}
    ${(props) => props.mdAlignItems && `align-items: ${props.mdAlignItems};`}
    ${(props) => props.mdJustifyContent && `justify-content: ${props.mdJustifyContent};`}
    ${(props) => props.mdGap && `gap: ${props.mdGap};`}
    ${(props) => props.mdWidth && `width: ${props.mdWidth};`}
    ${(props) => props.mdHeight && `height: ${props.mdHeight};`}
    ${(props) => props.mdOverflow && `overflow: ${props.mdOverflow};`}
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media (min-width: 769px) and (max-width: 992px) {
    ${(props) => props.lgDirection && `flex-direction: ${props.lgDirection};`}
    ${(props) => props.lgAlignItems && `align-items: ${props.lgAlignItems};`}
    ${(props) => props.lgJustifyContent && `justify-content: ${props.lgJustifyContent};`}
    ${(props) => props.lgGap && `gap: ${props.lgGap};`}
    ${(props) => props.lgWidth && `width: ${props.lgWidth};`}
    ${(props) => props.lgHeight && `height: ${props.lgHeight};`}
    ${(props) => props.lgOverflow && `overflow: ${props.lgOverflow};`}
  }
`

export const Text = styled.span<{
  fontFamily?: string
  fontSize?: string
  color?: string
  fontStyle?: string
  fontWeight?: string
  textAlign?: string
}>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '14px')};
  color: ${(props) => (props.color ? `${props.color}` : '#b5b5b5')};
  ${(props) => (props.fontFamily ? `font-family: ${props.fontFamily}` : '')}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight}` : '')}
 ${(props) => (props.fontStyle ? `font-style: ${props.fontStyle}` : '')}
 ${(props) => (props.textAlign ? `text-align: ${props.textAlign}` : '')}
`

export const Button = styled.b<{bgColor?: string; border?: string; padding?: string; color?: string; borderRadius?: string}>`
  background-color: none;
  border: 1px solid #fff;
  padding: 8px 12px;
  color: #fff;
  border-radius: 4px;
`