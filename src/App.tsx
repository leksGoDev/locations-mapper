import './App.css'
import {LocationsCore} from "./components/locations/LocationsCore"
import {LocationsProvider} from "./components/LocationsProvider"
import {MapperWrap} from "./components/map/MapperWrap"

const App = () =>{
    return (
        <div className="container">
            <div className="wrapper">
                <header>Locations Mapper</header>
                <main className="main-content">
                    <LocationsProvider>
                        <section className="section">
                            <LocationsCore/>
                        </section>
                        <section className="section">
                            <MapperWrap/>
                        </section>
                    </LocationsProvider>
                </main>
                <footer>leksGoDev</footer>
            </div>
        </div>
  )
}

export {App}