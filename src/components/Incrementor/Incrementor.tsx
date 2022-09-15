import React, {useEffect, useState} from "react";
import s from "./Incrementor.module.css"
import UniversalButton from "../../common/UniversalButton";
import {getFromLocalStorage, removeItem, setInLocalStorage} from "../localStorage/getSetFromLocalStorage";


type IncrementorPropsType = {
    init: number
    limit: number
    reset: boolean
    setReset: (reset: boolean) => void
}

export const Incrementor = ({limit, init, reset, setReset}: IncrementorPropsType) => {
    const [counter, setCounter] = useState<number>(0)
    const [counterLimit, setCounterLimit] = useState<number>(0)

    useEffect(() => {
        getFromLocalStorage('counter', init, setCounter)
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
        setCounter(init)
        setCounterLimit(limit)
        removeItem('counter')
        removeItem('limit')
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