import React, {FC} from 'react';
import style from './SmallTitle.module.scss'

export const SmallTitle:FC<{className?:string,children:React.ReactNode}> = ({className,children}) => {
    const finalClass =  className ? `${style.small_title} ${className}` : style.small_title

    return (
        <h6 className={finalClass}>
            {children}
        </h6>
    );
};
