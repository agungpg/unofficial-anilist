import { InfoText } from "@/app/styeled";
import React from "react";

const InfoItem = ({label, value}: {label: string, value: string}) => (<InfoText className="item-info-wrapper">
<div className="point"/>
<b>{label}</b><span className="description">: {value}</span>
</InfoText>)

export default React.memo(InfoItem)