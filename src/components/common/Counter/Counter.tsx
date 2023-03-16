import React, {FC} from 'react';
import style from './Counter.module.scss';

export const Counter: FC<{countHandler:(value:number)=>void,count:number}> = ({countHandler,count}) => {

    const counterHandler = (btn: 'decr' | 'incr') => {
        if (btn === 'decr') {
            countHandler(count - 1)
        }
        if (btn === 'incr') {
            countHandler(count + 1)
        }
        return
    }
    return (
        <div className={style.wrapper_counter}>
            <button className={style.counter_btn} disabled={count <= 1} onClick={() => counterHandler('decr')}>-</button>
            <h2 className={style.counter_window}>{count}</h2>
            <button className={style.counter_btn} onClick={() => counterHandler('incr')}>+</button>
        </div>
    );
};
