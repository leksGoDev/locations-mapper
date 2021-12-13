import styles from './App.css'
import LocationsMain from "./components/routes/LocationsMain";
import Mapper from "./components/map/Mapper";
export default function App() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <header>Locations Mapper</header>
                <main className={styles.mainContent}>
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
