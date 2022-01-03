import React from "react"
import ILocation from "../../ILocation"
import styles from "./LocationItem.module.css"

type Props = {
    index: ILocation["index"]
    value: ILocation["name"]
    onRemoveClick: () => void
}

export const LocationItem: React.FC<Props> = ({index, value, onRemoveClick}) =>{
    return <li style={{fontSize: '1.15em'}}>
        <div className={styles.content}>
            <span>
                <img src={'logo-location.svg'}
                     alt='logo'
                     className={styles.img}/>
                {index}: {value}
            </span>
            <button type="reset"
                    className={styles.button}
                    onClick={onRemoveClick}>
                &times;
            </button>
        </div>
    </li>
}