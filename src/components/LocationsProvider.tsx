import React from 'react';

type Props = {
    children: React.ReactNode
}
interface Context{
    locations: ILocation[]
    onChange: (action: Action) => void
}
export interface ILocation {
    id: number
    index: number
    name: string
}
export interface Action{
    type: string
    payload: {
        name?: ILocation["name"]
        index?: ILocation["index"]
    }
}
export const LocationsContext = React.createContext<Context>({
    locations: [],
    onChange: ()=>{}
})

export const LocationsProvider: React.FC<Props> = ({children}) => {
    const initialState: ILocation[] = [/*{
        id: 0,
        index: 1,
        name: 'Коллонтай, 43',
    },{
        id: 1,
        index: 2,
        name: 'Тамбасова, 10'
    }*/]
    const [locations, setLocations] = React.useState<Array<ILocation>>(initialState)

    const handleAddLocation = (locationName: ILocation["name"]) =>{
        const length = locations.length
        const location: ILocation = length?{
            id: locations[length - 1].id + 1,
            index: locations[length - 1].index + 1,
            name: locationName
        }: {
            id: 0,
            index: 1,
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
    const locationsReducer = (action: Action) => {
        switch (action.type){
            case 'add':
                handleAddLocation(action.payload.name!)
                break
            case 'remove':
                handleRemoveLocation(action.payload.index!)
                break
        }
    }
    return (
        <LocationsContext.Provider value={{locations, onChange: (action: Action)=>locationsReducer(action)}}>
            {children}
        </LocationsContext.Provider>
    )
}