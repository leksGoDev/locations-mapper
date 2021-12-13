import LocationItem from "./LocationItem";
import EmptyLocations from "./EmptyLocations"

export default function LocationsList(props){
    function renderLocations(){
        if (props.locations.length){
            return props.locations.map(locations =>
                <LocationItem key={locations.id}
                              value={locations.value}
                              index={locations.id + 1}
                              onRemoveClick={props.onRemoveClick.bind(null, locations.id)}
                />)
        } else return <EmptyLocations/>

    }
    return<ul>{renderLocations()}</ul>
}