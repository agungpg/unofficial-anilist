import React from "react";

const RemoveCollectionIcon = ({width, height, color}: {width?: string, height?: string, color?: string}) => (
<svg fill={color || "#000000"} width={width || "64px"} height={height || "64px"} viewBox="-4.74 0 29.588 29.588">
  <path id="Path_199" data-name="Path 199" d="M26.059,4a3,3,0,0,0-3-3H8.941a3,3,0,0,0-3,3V27.588a3,3,0,0,0,4.628,2.52L16,26.6l5.431,3.509a3,3,0,0,0,4.628-2.52Zm-2,0V27.588a1,1,0,0,1-1.543.84l-5.973-3.859a1,1,0,0,0-1.086,0L9.484,28.428a1,1,0,0,1-1.543-.84V4a1,1,0,0,1,1-1H23.059a1,1,0,0,1,1,1Z" transform="translate(-5.941 -1)" />
  <path id="Path_200" data-name="Path 200" d="M18.7,8.28H13.3a1,1,0,0,0,0,2H18.7a1,1,0,0,0,0-2Z" transform="translate(-5.941 -1)" />
</svg>
)

  export default React.memo(RemoveCollectionIcon)