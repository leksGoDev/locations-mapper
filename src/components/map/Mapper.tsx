import React from "react";
import {YMaps, Map} from "react-yandex-maps";

const Mapper: React.FC = () =>{
    const style = {
        border: '0.1rem groove black',
        borderRadius: '0.8%',
        marginLeft: '1rem'
    }
    return<YMaps>
        <div style={style}>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>

            </Map>
        </div>
    </YMaps>
}

export {Mapper}