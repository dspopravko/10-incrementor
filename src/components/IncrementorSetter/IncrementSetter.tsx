import React, {FormEvent, useEffect, useState} from 'react';
import s from "./IncrementSetter.module.css";
import UniversalButton from "../../common/UniversalButton";
import {getFromLocalStorage, setInLocalStorage} from "../localStorage/getSetFromLocalStorage";

type IncrementSetterProps = {
    callback: () => void
}

function IncrementSetter({callback}: IncrementSetterProps) {
    const [limit, setLimit] = useState(0)
    const [initialValue, setInitialValue] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        getFromLocalStorage('limit', 0, setLimit)
        getFromLocalStorage('startValue', 0, setInitialValue)
    }, []);

    useEffect(() => {
        if (initialValue >= limit) {
            setError("Limit can not be greater than start value")
        } else if (limit < 0 || initialValue < 0) {
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
        setInLocalStorage('startValue', initialValue)
        setInLocalStorage('limit', limit)
        callback()
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