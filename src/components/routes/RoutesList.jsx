import RouteItem from "./RouteItem";
import EmptyRoutes from "./EmptyRoutes"

export default function RoutesList(props){
    function renderRoutes(){
        if (props.routes.length){
            return props.routes.map(route =>
                <RouteItem key={route.id}
                           value={route.value}
                           index={route.id + 1}
                           onRemoveClick={props.onRemoveClick.bind(null, route.id)}
                />)
        } else return <EmptyRoutes/>

    }
    return<ul>{renderRoutes()}</ul>
}