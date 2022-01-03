import React from "react"
import {LocationsList} from "./LocationsList"
import {LocationsCreator} from "./LocationsCreator"
import ILocation from "../ILocation"
import {Action, LocationsContext} from "../LocationsProvider"

export const LocationsCore: React.FC = () => {
    const {locations, onChange} = React.useContext(LocationsContext)
    return (<>
                <LocationsCreator onAddClick={(locationName: ILocation["name"])=> {
                                    const action: Action = {
                                        type: 'add',
                                        payload:{
                                            name: locationName
                                        }
                                    }
                                    onChange(action)
                                }}/>
                <LocationsList locations={locations}
                               onRemoveClick={(locationIndex: ILocation["index"])=>{
                                   const action: Action = {
                                       type: 'remove',
                                       payload:{
                                           index: locationIndex
                                       }
                                   }
                                   onChange(action)
                               }}/>
        </>)
}
