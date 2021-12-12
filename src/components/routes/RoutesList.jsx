import RouteItem from "./RouteItem";

export default function RoutesList(props){
    return<ul>{props.routes.map(route =>
        <RouteItem key={route.id}
                   value={route.value}
                   index={route.id + 1}
                   onRemoveClick={props.onRemoveClick.bind(null, route.id)}
        />)}
    </ul>
}