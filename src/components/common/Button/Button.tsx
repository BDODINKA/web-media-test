import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

import style from './Button.module.scss'

type ButtonType = {
  children: React.ReactNode
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FC<ButtonType> = ({ className, children, ...rest }) => {
  const finalStyle = className ? `${style.btn} ${className}` : style.btn

  return (
    <button {...rest} className={finalStyle}>
      {children}
    </button>
  )
}
