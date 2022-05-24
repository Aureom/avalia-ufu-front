import React from 'react';

import './styles/buttonStyle.scss';

export interface Props {
    text?: string;
    icon?: JSX.Element;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
    borderRadius?: string;
    weight?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}

export default function Button(props: Props) {
    return(
        <div className="button">
            <button className="custom-button" style={{
                backgroundColor: props.backgroundColor,
                color: props.color,
                borderColor: props.borderColor,
                borderRadius: props.borderRadius,
                fontWeight: props.weight,
                width: props.width,
                height: props.height
            }}>
                {props.icon ? <div className="button-icon">{props.icon}</div> : null}
                {props.text ? <span>{props.text}</span> : null}
            </button>
        </div>
    )
}