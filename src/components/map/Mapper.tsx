import React from "react"
import {Map, Placemark, YMaps, YMapsApi} from "react-yandex-maps"
import styles from "./Mapper.module.css"
import {getInitPosition} from "./features/getInitPosition"
import ILocation from "../ILocation"

interface Mark{
    id: number
    address: ILocation["name"]
    coordinates: number[]
}
type Props = {
    locations: ILocation[]
}

export const Mapper: React.FC<Props> = ({locations}) =>{
    const yandexApiRef: YMapsApi= React.useRef()
    const [homePosition, setHomePosition] = React.useState([59.950448, 30.316751])
    const [marks, setMarks] = React.useState<Array<Mark>>([])
    const [opacity, setOpacity] = React.useState({opacity: 1})

    React.useEffect(()=>{
        getInitPosition().then(position => setHomePosition([position.latitude, position.longitude]))
    },[])
    React.useEffect(()=>{
        setOpacity({opacity: 0.5})
        changeMarks(yandexApiRef.current)
    }, [locations.length])

    const changeMarks = (yandexApi: YMapsApi)=>{
        const addMarksPromises: Promise<Mark>[] = locations.filter(location => {
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
            setMarks([...updatedMarks, ...additionalMarks])
            setOpacity({opacity: 1})
        })
    }

    return<YMaps query={{apikey: 'c4afe49a-01a4-4a8e-b77d-48f634e1e5c1', lang: 'ru_RU'}}>
        <div style={opacity} className={styles.container}>
            <Map modules={['geocode']} onLoad={api => yandexApiRef.current = api}
                 width={500} height={500}
                 defaultState={{ center: homePosition, zoom: 10}}

            >
                {marks.map(mark => <Placemark key={mark.id} geometry={mark.coordinates}/>)}
            </Map>
        </div>
    </YMaps>
}