import React, { FC, useEffect, useState } from 'react'

import { Button } from '../../components/common/Button/Button'
import { Counter } from '../../components/common/Counter/Counter'
import { Price } from '../../components/common/Price/Price'
import { SmallTitle } from '../../components/common/SmallTitle/SmallTitle'
import { SwitchToggle } from '../../components/common/SwitchToggle/SwitchToggle'
import { ICurrency } from '../../interface/currencyInterface'
import { matchFunc } from '../../utils/matchFunc'

import style from './Card.module.scss'

export const Card: FC<{
  nftPrice: string
  totalPrice: string
  currency: ICurrency
  setPrice: (value: { totalPrice: string; curr: ICurrency }) => void
  setCurrency: (value: ICurrency) => void
}> = ({ currency, nftPrice, setPrice, setCurrency }) => {
  const price = (+nftPrice).toFixed(2)

  const [curr, setCurr] = useState(currency)

  const [count, setCount] = useState(1)

  const [totalPrice, setTotalPrice] = useState(price)

  useEffect(() => {
    const totalPrice = matchFunc(price, count)

    setTotalPrice(totalPrice)
  }, [count, price])

  useEffect(() => {
    if (curr !== currency) {
      setCurrency(curr)
    }
  }, [curr])

  const setPriceHandler = () => {
    setPrice({ totalPrice, curr })
    setCount(1)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.firstBlock}>
        <SmallTitle>{'Currency:'}</SmallTitle>
        <SwitchToggle handleToggle={setCurr} titleBtn={['ETH', 'USD']} />
      </div>
      <div className={style.secondBlock}>
        <SmallTitle>{'One NFT price:'}</SmallTitle>
        <Price currency={curr} cost={price} />
      </div>
      <div className={style.thirdBlock}>
        <SmallTitle>{'Quantity:'}</SmallTitle>
        <Counter countHandler={setCount} count={count} />
      </div>
      <div className={style.fourBlock}>
        <SmallTitle>{'Total price:'}</SmallTitle>
        <Price currency={curr} cost={totalPrice} className={style.fourBlock_price} />
      </div>
      <Button onClick={setPriceHandler}>{'mint now'}</Button>
      <p className={style.description}>
        All NFTs will reveal and will be available for sale after Mint Stage
      </p>
    </div>
  )
}
