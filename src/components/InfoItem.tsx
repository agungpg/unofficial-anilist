import { InfoText } from "@/app/styeled";
import React from "react";

const InfoItem = ({label, value}: {label: string, value: string}) => (<InfoText className="item-info-wrapper">
<b>{label}</b>: {value}
</InfoText>)

export default React.memo(InfoItem)