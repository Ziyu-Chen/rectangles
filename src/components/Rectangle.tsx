import React from 'react';
import { RectangleInfo } from "../utils/types"
import '../styles/Rectangle.css'

type Props = {
    mode: string;
    rectangleInfo: RectangleInfo;
    onColorChange: () => void;
}

export const Rectangle: React.FC<Props> = (props) => {
    const { mode, rectangleInfo, onColorChange } = props
    const { index, color } = rectangleInfo
    const rectangleStyle: React.CSSProperties = {
        backgroundColor: "#" + color,
    }

    return (
        <div className={`rectangle ${mode}-rectangle-${index+1}`} style={rectangleStyle} onClick={onColorChange}>
            <div className='rectangle-index'>{index+1}</div>
        </div>
    )
}