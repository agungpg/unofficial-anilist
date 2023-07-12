import React from "react";

const InfoItem = ({label, value}: {label: string, value: string}) => (<div className="item-info-wrapper">
<div className="point"/>
<span className="sub-title">{label}</span><span className="description">: {value}</span>
</div>)

export default React.memo(InfoItem)