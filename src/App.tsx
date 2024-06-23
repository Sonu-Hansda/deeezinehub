import { createContext, useRef } from "react"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Features from "./sections/Features"
// import Team from "./sections/Team"
import Work from "./sections/Work"
import Hero from "./sections/Hero"

export type scrollContextType = {
  scrollToContact: ()=>void;
  scrollToTeam: ()=> void;
  scrollToFeature: ()=> void;
};

export const scrollContext = createContext<scrollContextType|undefined>(undefined);

export default function App() {
  const contactSection = useRef<HTMLDivElement>(null);
  const teamSection = useRef<HTMLDivElement>(null);
  const featureSection = useRef<HTMLDivElement>(null);

  const scrollToContact = ()=>{
    if(contactSection.current){
      contactSection.current.scrollIntoView({behavior:'smooth'});
    }
  }

  const scrollToTeam = ()=>{
    if(teamSection.current){
      teamSection.current.scrollIntoView({behavior:'smooth'});
    }
  }

  const scrollToFeature = ()=>{
    if(featureSection.current){
      featureSection.current.scrollIntoView({behavior:'smooth'});
    }
  }

  return (
    <scrollContext.Provider value={{scrollToContact,scrollToTeam,scrollToFeature}}>
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0" >
        <div className="snap-always snap-center" id="page1">
          <Header />
          <Hero />
        </div>
        <div ref={featureSection} className="snap-always snap-center" id="page2">
        <Features/>
        </div>
        <div ref={null} className="snap-always snap-center" id="page3">
          <Work />
        </div>
        {/* <div ref={teamSection} className="snap-always snap-center" id="page4">
          <Team />
        </div> */}
        <div ref={contactSection} className="snap-always snap-center" id="page5">
          <Contact />
        </div>
        <div className="snap-always snap-center" id="page6">
          <Footer />
        </div>
      </main>
    </scrollContext.Provider>
  )
}


