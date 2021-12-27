import './App.css'
import {LocationsCore} from "./components/locations/LocationsCore";
import {Mapper} from "./components/map/Mapper";
import {LocationsProvider} from "./components/LocationsProvider";

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
                            <Mapper/>
                        </section>
                    </LocationsProvider>
                </main>
                <footer>leksGoDev</footer>
            </div>
        </div>
  )
}

export {App}