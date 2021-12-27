import React from "react";
import {YMaps, Map} from "react-yandex-maps";
import styles from "./Mapper.module.css"

const Mapper: React.FC = () =>{
    return<YMaps>
        <div className={styles.container}>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>

            </Map>
        </div>
    </YMaps>
}

export {Mapper}