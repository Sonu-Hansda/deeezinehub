import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Home from "./sections/Home"
import Team from "./sections/Team"
import Work from "./sections/Work"

export default function App() {
  return (
    <>
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0" >
        <div className="snap-always snap-center" id="page1">
          <Header />
          <Home />
        </div>
        <div className="snap-always snap-center" id="page2">
          <Work />
        </div>
        <div className="snap-always snap-center" id="page3">
          <Team />
          <Footer />
        </div>
      </main>
    </>
  )
}


