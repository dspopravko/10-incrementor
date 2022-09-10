import React, {useState} from "react";
import s from "./incrementor.module.css"
import UniversalButton from "../common/UniversalButton";

type IncrementorPropsType = {
    limit: number
}
export const Incrementor = ({limit}: IncrementorPropsType) => {
    const [counter, setCounter] = useState(0)

    const addCounter = () => setCounter(counter + 1)
    const resetCounter = () => setCounter(0)

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