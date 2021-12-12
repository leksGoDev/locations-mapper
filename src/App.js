import './App.css'
import RoutesMain from "./components/routes/RoutesMain";
export default function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <header>My router</header>
                <main className="main-content">
                    <section className="routes">
                        <RoutesMain/>
                    </section>
                    <section className="map">Map</section>
                </main>
                <footer>by leksGo</footer>
            </div>
        </div>
  )
}
