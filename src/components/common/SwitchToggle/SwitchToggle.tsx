import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import style from './switchToggle.module.scss'
import {ICurrency} from "../../../interface/currencyInterface";

export const SwitchToggle: FC<{ curr: string, handleToggle: (currency:ICurrency ) => void, titleBtn: string[] }> = ({
                                                                                                              curr,
                                                                                                              handleToggle,
                                                                                                              titleBtn
                                                                                                          }) => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
            if (toggle) {
                handleToggle(titleBtn[0] as ICurrency)
            } else {
                handleToggle('$' as ICurrency)
            }
        },
        [toggle,handleToggle,titleBtn])

    const toggleStyle = toggle ? style.switch_labels_colored : style.switch_labels_notColored
    const notToggleStyle = toggle ? style.switch_labels_notColored : style.switch_labels_colored

    const toggleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setToggle(!toggle)
    }

    return (
        <div className={style.wrapper}>
            <label className={style.switch}>
                <input
                    checked={toggle}
                    onChange={toggleHandler}
                    className={style.switch_checkbox}
                    type="checkbox"
                />
                <div className={style.switch_labels}>
                    <span className={toggleStyle}>{titleBtn[0]}</span>
                    <span className={notToggleStyle}>{titleBtn[1]}</span>
                </div>
            </label>
        </div>

    );
};
