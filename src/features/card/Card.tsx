import React, {FC, useEffect, useState} from 'react';
import style from './Card.module.scss'
import {SmallTitle} from "../../components/common/SmallTitle/SmallTitle";
import {SwitchToggle} from "../../components/common/SwitchToggle/SwitchToggle";
import {Button} from "../../components/common/Button/Button";
import {Price} from "../../components/common/Price/Price";
import {Counter} from "../../components/common/Counter/Counter";
import {matchFunc} from "../../utils/matchFunc";
import {ICurrency} from "../../interface/currencyInterface";

export const Card: FC<{ nftPrice: string, totalPrice: string, currency:ICurrency, setPrice: (value: {totalPrice:string,curr:ICurrency }) => void,setCurrency:(value:ICurrency)=>void }> = ({
                                                                                                                            currency,
                                                                                                                            nftPrice,
                                                                                                                            setPrice,
    setCurrency
                                                                                                                        }) => {
    const price= (+nftPrice).toFixed(2)

    const [curr, setCurr] = useState(currency)

    const [count, setCount] = useState(1)

    const [totalPrice, setTotalPrice] = useState(price)



    useEffect(() => {
        const totalPrice = matchFunc(price, count)
        setTotalPrice(totalPrice)
    }, [count,price])

    useEffect(() => {
        setCurrency(curr)
    }, [curr])

    const setPriceHandler = () => {
        setPrice({totalPrice, curr})
        setCount(1)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.firstBlock}>
                <SmallTitle children={'Currency:'}/>
                <SwitchToggle curr={curr} handleToggle={setCurr} titleBtn={['ETH', 'USD']}/>
            </div>
            <div className={style.secondBlock}>
                <SmallTitle children={'One NFT price:'}/>
                <Price currency={curr} cost={price}/>
            </div>
            <div className={style.thirdBlock}>
                <SmallTitle children={'Quantity:'}/>
                <Counter countHandler={setCount} count={count}/>
            </div>
            <div className={style.fourBlock}>
                <SmallTitle children={'Total price:'}/>
                <Price currency={curr} cost={totalPrice} className={style.fourBlock_price}/>
            </div>
            <Button children={'mint now'} onClick={setPriceHandler}/>
            <p className={style.description}>All NFTs will reveal and will be available
                for sale after Mint Stage</p>
        </div>
    );
};
