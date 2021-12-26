import React from "react";
import {useState} from "react";
import {LocationsList} from "./LocationsList";
import {LocationsCreator} from "./LocationsCreator";
import ILocation from "./ILocation";

const LocationsMain: React.FC = () => {
    const [locations, setLocations] = useState<Array<ILocation>>([{
        id: 0,
        index: 1,
        name: 'Коллонтай, 43',
    },{
        id: 1,
        index: 2,
        name: 'Тамбасова, 10'
    }])
    const handleAddLocation = (locationName: ILocation["name"]) =>{
        const location: ILocation = {
            id: locations.length,
            index: locations.length + 1,
            name: locationName
        }
        const updatedLocations = locations.slice()
        updatedLocations.push(location)
        setLocations(updatedLocations)
    }
    const handleRemoveLocation = (locationIndex: ILocation["index"]) =>{
        const updatedLocations = [...locations.slice(0, locationIndex - 1),...locations.slice(locationIndex, locations.length)]
        updatedLocations.forEach((el, i) => el.index = i + 1)
        setLocations(updatedLocations)
    }
    return (<>
            <LocationsCreator onAddClick={(locationName: ILocation["name"])=>handleAddLocation(locationName)}/>
            <LocationsList locations={locations}
                           onRemoveClick={(locationIndex: ILocation["index"])=>handleRemoveLocation(locationIndex)}/>
        </>)
}

export {LocationsMain}