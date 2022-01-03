import React from "react"
import {Map, Placemark, YMaps, YMapsApi} from "react-yandex-maps"
import styles from "./Mapper.module.css"
import {getInitCoords} from "./features/getInitCoords"
import {ILocation} from "../LocationsProvider"
import {calculatePosition} from "./features/calculatePosition";

interface Position{
    center: number[]
    zoom: number
}
interface IMark{
    id: number
    address: ILocation["name"]
    coordinates: number[]
}
type Props = {
    locations: ILocation[]
}

export const Mapper: React.FC<Props> = ({locations}) =>{
    const yandexApiRef: YMapsApi= React.useRef()
    const [defaultCenter, setDefaultCenter] = React.useState([59.950448, 30.316751])
    const [position, setPosition] = React.useState<Position|undefined>(undefined)
    const [marks, setMarks] = React.useState<Array<IMark>>([])
    const [opacity, setOpacity] = React.useState({opacity: 1})

    React.useEffect(()=>{
        getInitCoords().then(coords => setDefaultCenter([coords.latitude, coords.longitude]))
    },[])
    React.useEffect(()=>{
        if (locations.length){
            setOpacity({opacity: 0.5})
            changeMarks(yandexApiRef.current)
        }
    }, [locations.length])

    const changeMarks = (yandexApi: YMapsApi)=>{
        const addMarksPromises: Promise<IMark>[] = locations.filter(location => {
            for(let mark of marks)
                if (location.name === mark.address) return false
            return true
        }).map(async (location) => {
            const geocoder = await yandexApi.geocode(location.name)
            return {
                id: location.id,
                address: location.name,
                coordinates: geocoder.geoObjects.get(0)?.geometry.getCoordinates()
            }
        })
        Promise.all(addMarksPromises).then(additionalMarks => {
            const updatedMarks = marks.filter(mark => {
                for(let location of locations)
                    if (mark.address === location.name) return true
                return false
            })
            const newMarks = [...updatedMarks, ...additionalMarks]
            setMarks(newMarks)
            setPosition(calculatePosition(newMarks.map(mark => mark.coordinates)) as Position)
            setOpacity({opacity: 1})
        })
    }

    return<YMaps query={{apikey: 'c4afe49a-01a4-4a8e-b77d-48f634e1e5c1', lang: 'ru_RU'}}>
        <div style={opacity} className={styles.container}>
            <Map modules={['geocode']} onLoad={api => yandexApiRef.current = api}
                 width={500} height={500}
                 defaultState={{ center: defaultCenter, zoom: 10}}
                 state={position}
            >
                {marks.map(mark => <Placemark key={mark.id} geometry={mark.coordinates}/>)}
            </Map>
        </div>
    </YMaps>
}