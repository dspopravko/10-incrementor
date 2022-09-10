import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./UniversalButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type UniversalButtonPropsType = DefaultButtonPropsType & {
    callback: () => void
    disabled?: boolean
}

function UniversalButton({name, callback, children, ...restProps}: UniversalButtonPropsType) {

    return (
        <div>
            <button {...restProps} className={s.btn} onClick={callback}>{children}</button>
        </div>
    );
}

export default UniversalButton;