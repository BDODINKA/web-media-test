import React, {FC, useEffect, useState} from 'react';
import style from './Card.module.scss'
import {SmallTitle} from "../../components/common/SmallTitle/SmallTitle";
import {SwitchToggle} from "../../components/common/SwitchToggle/SwitchToggle";
import {Button} from "../../components/common/Button/Button";
import {Price} from "../../components/common/Price/Price";
import {Counter} from "../../components/common/Counter/Counter";
import {matchFunc} from "../../utils/matchFunc";
import {ICurrency} from "../../interface/currencyInterface";

export const Card: FC<{ nftPrice: number, totalPrice: number, currency:ICurrency, setPrice: (value: {totalPrice:number,curr:ICurrency }) => void }> = ({
                                                                                                                            currency,
                                                                                                                            nftPrice,
                                                                                                                            setPrice
                                                                                                                        }) => {

    const [curr, setCurr] = useState(currency)

    const price = Math.floor(nftPrice * 100) / 100

    const [count, setCount] = useState(1)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const totalPrice = matchFunc(nftPrice, count)
        setTotalPrice(totalPrice)
    }, [count,nftPrice])

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
