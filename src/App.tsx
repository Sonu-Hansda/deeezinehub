import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Home from "./sections/Home"
import HowWeWork from "./sections/HowWeWork"
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
        <HowWeWork/>
        </div>
        <div className="snap-always snap-center" id="page3">
          <Work />
        </div>
        <div className="snap-always snap-center" id="page4">
          <Team />
        </div>
        <div className="snap-always snap-center" id="page5">
          <Footer />
        </div>
      </main>
    </>
  )
}


