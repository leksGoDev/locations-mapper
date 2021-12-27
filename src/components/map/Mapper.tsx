import React from "react";
import {YMaps, Map} from "react-yandex-maps";
import styles from "./Mapper.module.css"
import {LocationsContext} from "../LocationsProvider";

const Mapper: React.FC = () =>{
    const {locations} = React.useContext(LocationsContext)

    return<YMaps>
        <div className={styles.container}>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>

            </Map>
        </div>
    </YMaps>
}

export {Mapper}