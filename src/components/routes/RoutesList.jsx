import RouteItem from "./RouteItem";

export default function RoutesList(){
    const routes = [{
        id: 0,
        value: 'Коллонтай, 43'
    },{
        id: 1,
        value: 'Тамбасова, 10'
    }]

    return<ul>{routes.map(route =><RouteItem key={route.id} value={route.value}/>)}</ul>
}