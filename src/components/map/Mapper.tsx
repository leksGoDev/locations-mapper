import React from "react";
import {YMaps, Map, YMapsApi} from "react-yandex-maps";
import styles from "./Mapper.module.css"
import {LocationsContext} from "../LocationsProvider";
import {getInitPosition} from "./getInitPosition";
import ILocation from "../ILocation";

interface Placemark{
    id: number
    address: ILocation["name"]
    coordinates: number[]
}

const Mapper: React.FC = () =>{
    const [position, setPosition] = React.useState([59.950448, 30.316751])
    const {locations} = React.useContext(LocationsContext)
    const [placemarks, setPlacemarks] = React.useState<Set<Placemark>>(new Set())

    React.useEffect(()=>{
        getInitPosition().then(position => setPosition([position.latitude, position.longitude]))
    },[])

    const updateCoords = (ymaps: YMapsApi) =>{

    }

    return<YMaps>
        <div className={styles.container}>
            <Map onLoad={ymaps => updateCoords(ymaps)}
                 width={500} height={500}
                 defaultState={{ center: position, zoom: 10}}>

            </Map>
        </div>
    </YMaps>
}

export {Mapper}