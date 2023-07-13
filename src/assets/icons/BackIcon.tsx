import React from "react";

const BackIcon = ({width, height, color}: {width?: string, height?: string, color?: string}) => (
  <svg 
    width={width || "32px"} 
    height={height || "32px"}
    viewBox="0 0 1024 1024" 
    xmlns="http://www.w3.org/2000/svg">
      <path 
        fill={color || "#000000"} 
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      />
      <path 
        fill={color || "#000000"} 
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      />
  </svg>
)

  export default React.memo(BackIcon)