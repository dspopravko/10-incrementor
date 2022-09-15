import React, {FormEvent, useEffect, useState} from 'react';
import s from "./IncrementSetter.module.css";
import UniversalButton from "../../common/UniversalButton";
import {getFromLocalStorage} from "../localStorage/getSetFromLocalStorage";

type IncrementSetterProps = {
    callback: (initial: number, limit: number) => void
}

function IncrementSetter(props: IncrementSetterProps) {
    const [limit, setLimit] = useState(0)
    const [initialValue, setInitialValue] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        getFromLocalStorage('counter', 0, setInitialValue)
        getFromLocalStorage('limit', 0, setLimit)
    }, []);

    useEffect(() => {
        if (initialValue >= limit) {
            setError("Limit can not be greater than start value")
        } else if (limit <= 0 || initialValue <=0) {
            setError("Only positive numbers allowed")
        } else setError("")

    }, [limit, initialValue])


    const setLimitHandler = (e: FormEvent<HTMLInputElement>) => {
        setLimit(+e.currentTarget.value)
    }
    const setInitialHandler = (e: FormEvent<HTMLInputElement>) => {
        setInitialValue(+e.currentTarget.value)
    }

    const setIncParameters = () => {
        props.callback(initialValue, limit)
    }

    const disableBtn = !!error

    return (
        <div className={s.incrementor}>
            <div className={s.inputWrapper}>
                Set your values for the incrementor
                <div>
                    limit value
                    <input type={"number"}
                           value={limit}
                           onInput={(e) => setLimitHandler(e)}/>
                    <br/>
                </div>
                <div>
                    start value
                    <input type={"number"}
                           value={initialValue}
                           onInput={(e) => setInitialHandler(e)}/>
                </div>
            </div>
            <div className={s.error}>{error}</div>
            <div className={s.btnWrapper}>
                <UniversalButton
                    disabled={disableBtn}
                    callback={setIncParameters}>
                    {"set values"}
                </UniversalButton>
            </div>
        </div>
    );
}

export default IncrementSetter;