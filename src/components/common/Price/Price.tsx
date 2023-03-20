import React, { FC } from 'react'

import style from './Price.module.scss'

export const Price: FC<{ cost: string; currency: string; className?: string }> = ({
  currency,
  cost,
  className,
}) => {
  const finalClass = className ? `${style.wrapper} ${className}` : style.wrapper

  return (
    <h2 className={finalClass}>
      {currency}
      {cost}
    </h2>
  )
}
