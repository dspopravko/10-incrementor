import React, {useEffect} from "react";
import s from "./Incrementor.module.css"
import {IncrementorPropsType} from "../Incrementer.container";
import IncrementerSetter from "../IncrementorSetter/IncrementerSetter";
import {Button, Paper} from "@mui/material";


export const Incrementor = ({counter, saveInLS, increment, getFromLS, reset}: IncrementorPropsType) => {

    useEffect(() => {
        getFromLS()
    }, []);

    const addCounter = () => increment()

    const isLimitClass = counter.value >= counter.limit ? s.onlimit : ""
    const disableBtn = counter.value >= counter.limit

    return (
        <>
            <Paper>
                <IncrementerSetter
                    saveInLS={saveInLS}
                />

            </Paper>
            <Paper>
                <div className={s.limits}>
                    from {counter.start} to {counter.limit}
                </div>
                <div className={`${s.countWrapper} ${isLimitClass}`}>
                    {counter.value}
                </div>
                <div className={s.btnWrapper}>

                    <Button
                        variant="contained"
                        disabled={disableBtn}
                        onClick={() => {
                            addCounter()
                        }}
                    >
                        increment
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            reset()
                        }}
                    >
                        reset counter
                    </Button>
                </div>
            </Paper>

        </>
    )
}