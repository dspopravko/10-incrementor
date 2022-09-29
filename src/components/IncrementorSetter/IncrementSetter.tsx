import React, {FormEvent, useEffect, useState} from 'react';
import s from "./IncrementSetter.module.css";
import UniversalButton from "../../common/UniversalButton";
import {getFromLocalStorage, setInLocalStorage} from "../localStorage/localStorage";

type IncrementSetterProps = {
    callback: () => void
}

function IncrementSetter({callback}: IncrementSetterProps) {
    const [startValue, setStartValue] = useState(0)
    const [limit, setLimit] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        getFromLocalStorage('start', 0, setStartValue)
        getFromLocalStorage('limit', 0, setLimit)
    }, []);

    useEffect(() => {
        if (startValue >= limit) {
            setError("Limit can not be greater than start value")
        } else if (limit < 0 || startValue < 0) {
            setError("Only positive numbers allowed")
        } else setError("")

    }, [limit, startValue])

    const checkValue = (e: FormEvent<HTMLInputElement>) => {
        const a = e.currentTarget.value.replace(/\D+/g, '')
        return a ? +a : 0
    }

    const setInitialHandler = (e: FormEvent<HTMLInputElement>) => {
        setStartValue(checkValue(e))
    }
    const setLimitHandler = (e: FormEvent<HTMLInputElement>) => {
        setLimit(checkValue(e))
    }

    const setParameters = () => {
        setInLocalStorage('start', startValue)
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
                           onChange={(e) => setLimitHandler(e)}/>
                    <br/>
                </div>
                <div>
                    start value
                    <input type={"number"}
                           value={startValue}
                           onChange={(e) => setInitialHandler(e)}/>
                </div>
            </div>
            <div className={s.error}>{error}</div>
            <div className={s.btnWrapper}>
                <UniversalButton
                    disabled={disableBtn}
                    callback={setParameters}>
                    {"set values"}
                </UniversalButton>
            </div>
        </div>
    );
}

export default IncrementSetter;