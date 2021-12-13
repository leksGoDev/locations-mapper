import {useState} from "react";
import LocationsList from "./LocationsList";
import LocationsCreator from "./LocationsCreator";
export default function LocationsMain(){
    const [locations, setLocations] = useState([{
        id: 0,
        value: 'Коллонтай, 43'
    },{
        id: 1,
        value: 'Тамбасова, 10'
    }])
    function handleAddLocation(text){
        const location = {
            id: locations.length,
            value: text
        }
        const updatedLocations = locations.slice()
        updatedLocations.push(location)
        setLocations(updatedLocations)
    }
    function handleRemoveLocation(index){
        const updatedLocations = [...locations.slice(0, index),...locations.slice(index + 1, locations.length)]
        updatedLocations.forEach((el, i) => el.id = i)
        setLocations(updatedLocations)
    }
    return (<>
            <LocationsCreator onAddClick={(text)=>handleAddLocation(text)}/>
            <LocationsList routes={locations} onRemoveClick={index=>handleRemoveLocation(index)}/>
        </>)
}