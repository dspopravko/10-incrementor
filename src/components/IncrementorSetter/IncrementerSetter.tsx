import React, {useEffect, useState} from 'react';
import s from "./IncrementerSetter.module.css";
import {getFromLocalStorage} from "../localStorage/localStorage";
import {Button, OutlinedInput} from "@mui/material";

type IncrementorSetterPropsType = {
    saveInLS: (start: number, limit: number) => void
}

function IncrementerSetter({saveInLS}: IncrementorSetterPropsType) {
    const [startValue, setStartValue] = useState(0)
    const [limit, setLimit] = useState(0)
    const [error, setError] = useState("")

    useEffect(() => {
        setStartValue(getFromLocalStorage('start', 0))
        setLimit(getFromLocalStorage('limit', 0))
    }, []);

    useEffect(() => {
        if (startValue >= limit) {
            setError("Limit can not be greater than start value")
        } else if (limit < 0 || startValue < 0) {
            setError("Only positive numbers allowed")
        } else if (limit > 999 || startValue > 999) {
            setError("...really?")
        } else setError("")
    }, [limit, startValue])

    const checkValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const a = +e.currentTarget.value.toString()
        return a >= 0 ? a < 1000 ? a : 999 : 0
    }

    const setInitialHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setStartValue(checkValue(e))
    const setLimitHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setLimit(checkValue(e))

    const setParameters = () => saveInLS(startValue, limit)

    return (
        <>
            <div className={s.inputWrapper}>
                Set your values for the incrementor
                <div className={s.inputBlockWrapper}>
                    <p>limit value</p>
                    <OutlinedInput
                        type={"number"}
                        value={limit}
                        onChange={(e) => setLimitHandler(e)}
                    ></OutlinedInput>
                </div>
                <div className={s.inputBlockWrapper}>
                    <p>start value</p>
                    <OutlinedInput
                        type={"number"}
                        value={startValue}
                        onChange={(e) => setInitialHandler(e)}
                    ></OutlinedInput>
                </div>
            </div>
            <div className={s.error}>{!!error}</div>
            <div className={s.btnWrapper}>
                <Button
                    variant="contained"
                    disabled={!!error}
                    onClick={() => {
                        setParameters()
                    }}
                >
                    set values
                </Button>
            </div>
        </>
    );
}

export default IncrementerSetter;