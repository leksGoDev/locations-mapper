import React from "react"
import {LocationItem} from "./entry/LocationItem"
import {EmptyLocations} from "./entry/EmptyLocations"
import ILocation from "../ILocation"

type Props = {
    locations: ILocation[]
    onRemoveClick: (index: ILocation["index"]) => void
}

export const LocationsList: React.FC<Props> = ({locations, onRemoveClick}) => {
    const renderLocations = ()=>{
        if (locations.length){
            return locations.map(locations =>
                <LocationItem key={locations.id}
                              value={locations.name}
                              index={locations.index}
                              onRemoveClick={onRemoveClick.bind(null, locations.index)}
                />)
        } else return <EmptyLocations/>
    }
    return<ul>{renderLocations()}</ul>
}