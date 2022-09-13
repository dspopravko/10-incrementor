import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from "./IncrementSetter.module.css";
import UniversalButton from "../../common/UniversalButton";

type IncrementSetterProps = {
    setInitialCount: (initialCount: number) => void
    setIncLimit: (limit: number) => void
}

function IncrementSetter(props: IncrementSetterProps) {
    const [limit, setLimit] = useState(10)
    const [initialValue, setInitialValue] = useState(0)

    const setLimitHandler = (e: FormEvent<HTMLInputElement>) => {
        setLimit(+e.currentTarget.value)
    }
    const setInitialHandler = (e: FormEvent<HTMLInputElement>) => {
        setInitialValue(+e.currentTarget.value)
    }

    const setIncParameters = () => {
        props.setIncLimit(limit)
        props.setInitialCount(initialValue)
    }

    const disableBtn = false

    return (
        <div className={s.incrementor}>
            <div className={s.inputWrapper}>
                Set your values for the incrementor
                <div>
                    max value
                    <input type={"number"}
                           value={limit}
                           onInput={(e) => setLimitHandler(e)}/>
                </div>
                <div>
                    start value
                    <input type={"number"}
                           value={initialValue}
                           onInput={(e) => setInitialHandler(e)}/>
                </div>
            </div>
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