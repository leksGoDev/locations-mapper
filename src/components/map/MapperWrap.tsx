import React from 'react'
import {LocationsContext} from "../LocationsProvider"
import {Mapper} from "./Mapper"

export const MapperWrap: React.FC = () => {
    const {locations} = React.useContext(LocationsContext)

    return <Mapper locations = {locations}/>
}