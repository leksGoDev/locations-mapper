import React from "react";
import {Map, YMaps, YMapsApi} from "react-yandex-maps";
import styles from "./Mapper.module.css"
import {LocationsContext} from "../LocationsProvider";
import {getInitPosition} from "./getInitPosition";
import ILocation from "../ILocation";

interface Mark{
    id: number
    address: ILocation["name"]
    coordinates: number[]
}

const Mapper: React.FC = () =>{
    const [position, setPosition] = React.useState([59.950448, 30.316751])
    const {locations} = React.useContext(LocationsContext)
    const [marks, setMarks] = React.useState<Array<Mark>>([])

    React.useEffect(()=>{
        getInitPosition().then(position => setPosition([position.latitude, position.longitude]))
    },[])

    const addMarks = (ymaps: YMapsApi) =>{
        const additionalMarks: Promise<Mark>[] = locations.filter(location => {
            for(let mark of marks)
                if (location.name === mark.address) return false
            return true
        }).map(async (location) => {
            const geocoder = await ymaps.geocode(location.name)
            return {
                id: location.id,
                address: location.name,
                coordinates: geocoder.geoObjects.get(0).geometry.getCoordinates()
            }
        })
        Promise.all(additionalMarks).then(addMarks => {
            console.log(addMarks)
            setMarks([...marks, ...addMarks])
        })
    }
    const deleteMarks = () =>{
        const updatedMarks = marks.filter(mark => {
            for(let location of locations)
                if (mark.address === location.name) return true
            return false
        })
        setMarks(updatedMarks)
    }
    const handleMapLoad = (ymaps: YMapsApi)=> {
        if (marks.length) deleteMarks()
        addMarks(ymaps)
    }

    return<YMaps query={{apikey: 'c4afe49a-01a4-4a8e-b77d-48f634e1e5c1', lang: 'ru_RU'}}>
        <div className={styles.container}>
            <Map modules={['geocode']} onLoad={ymaps => handleMapLoad(ymaps)}
                 width={500} height={500}
                 defaultState={{ center: position, zoom: 10}}>

            </Map>
        </div>
    </YMaps>
}

export {Mapper}