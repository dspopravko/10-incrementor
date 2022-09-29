import React, {useEffect, useState} from "react";
import s from "./Incrementor.module.css"
import UniversalButton from "../../common/UniversalButton";
import {getFromLocalStorage, setInLocalStorage} from "../localStorage/localStorage";


type IncrementorPropsType = {
    start?: number
    limit?: number
    reset: boolean
    setReset: (reset: boolean) => void
}

export const Incrementor = ({
                                reset,
                                setReset,
                                start = 1,
                                limit = 10
                            }: IncrementorPropsType) => {

    const [counter, setCounter] = useState<number>(0)
    const [counterLimit, setCounterLimit] = useState<number>(0)

    useEffect(() => {
        getFromLocalStorage('counter', start, setCounter)
        getFromLocalStorage('limit', limit, setCounterLimit)
    }, []);

    useEffect(() => {
        setInLocalStorage('counter', counter)
        setInLocalStorage('limit', counterLimit)
    }, [counter, counterLimit]);

    useEffect(() => {
        if (reset) {
            resetCounter()
            setReset(false)
        }
    }, [reset]);

    const resetCounter = () => {
        // getFromLocalStorage('counter', counter, setCounter)
        getFromLocalStorage('start', start, setCounter)
        getFromLocalStorage('limit', limit, setCounterLimit)
    }

    const addCounter = () => setCounter(counter + 1)

    const isLimitClass = counter >= counterLimit ? s.onlimit : ""
    const disableBtn = counter >= counterLimit

    return (
        <div className={s.incrementor}>
            <div className={`${s.countWrapper} ${isLimitClass}`}>
                {counter}
            </div>
            <div className={s.btnWrapper}>
                <UniversalButton
                    disabled={disableBtn}
                    callback={addCounter}>
                    {"increment"}
                </UniversalButton>
                <UniversalButton
                    callback={resetCounter}>
                    {"reset counter"}
                </UniversalButton>
            </div>
        </div>
    )
}