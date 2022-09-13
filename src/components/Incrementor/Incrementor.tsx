import React, {useEffect, useState} from "react";
import s from "./Incrementor.module.css"
import UniversalButton from "../../common/UniversalButton";

type IncrementorPropsType = {
    initialCount: number
    limit: number
}

export const Incrementor = ({limit, initialCount}: IncrementorPropsType) => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        if (localStorage.getItem('counter') || '') {
            const items = JSON.parse(localStorage.getItem('counter') || '');
            items && setCounter(items);
        } else setCounter(initialCount)
    }, []);
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter]);

    // useEffect(() => {
    //     resetCounter()
    // }, [initialCount]);


    const addCounter = () => setCounter(counter + 1)
    const resetCounter = () => {
        setCounter(initialCount)
        localStorage.removeItem('counter')
    }

    const isLimitClass = counter >= limit ? s.onlimit : ""
    const disableBtn = counter >= limit

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