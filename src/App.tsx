import './App.css'
import {LocationsMain} from "./components/locations/LocationsMain";
import {Mapper} from "./components/map/Mapper";

const App = () =>{
    return (
        <div className="container">
            <div className="wrapper">
                <header>Locations Mapper</header>
                <main className="main-content">
                    <section className="locations">
                        <LocationsMain/>
                    </section>
                    <section className="map">
                        <Mapper/>
                    </section>
                </main>
                <footer>by leksGo</footer>
            </div>
        </div>
  )
}

export {App}