import './App.css'
import RoutesCreator from "./components/routes/RoutesCreator"
import RoutesList from "./components/routes/RoutesList"
export default function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <header>My router</header>
                <main className="main-content">
                    <section className="routes">
                        <RoutesCreator/>
                        <RoutesList/>
                    </section>
                    <section className="map">Map</section>
                </main>
                <footer>by leksGo</footer>
            </div>
        </div>
  )
}
