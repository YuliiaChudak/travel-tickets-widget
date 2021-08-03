import React from 'react'
import { Box } from "../box/Box.styles";
import { SlotWidget as SlotWidgetType } from "../../types/SlotWidget";

type Props = {
    widget: SlotWidgetType,
}

const SlotWidget = ({ widget }: Props) => {

    return <div>{widget.bigTitle}</div>
}

export default SlotWidget
