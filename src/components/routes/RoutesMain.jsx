import {useState} from "react";
import RoutesList from "./RoutesList";
import RoutesCreator from "./RoutesCreator";
export default function RoutesMain(){
    const [routes, setRoutes] = useState([{
        id: 0,
        value: 'Коллонтай, 43'
    },{
        id: 1,
        value: 'Тамбасова, 10'
    }])
    function handleAddRoute(text){
        const route = {
            id: routes.length,
            value: text
        }
        const updatedRoutes = routes.slice()
        updatedRoutes.push(route)
        setRoutes(updatedRoutes)
    }
    function handleRemoveRoute(index){
        const updatedRoutes = [...routes.slice(0, index),...routes.slice(index + 1, routes.length)]
        updatedRoutes.forEach((el, i) => el.id = i)
        setRoutes(updatedRoutes)
    }
    return (<>
            <RoutesCreator onAddClick={(text)=>handleAddRoute(text)}/>
            <RoutesList routes={routes} onRemoveClick={index=>handleRemoveRoute(index)}/>
        </>)
}