import Hero from "@/components/Hero"
import Lead from "@/components/Lead"
import Separator from "@/components/Separator"
import ImportantNotes from "@/components/ImportantNotes"
import Timetable from "@/components/Timetable"
import AboutUs from "@/components/AboutUs"
import HitBack from "@/components/HitBack"
import Gallery from "@/components/Gallery"
import text from "./texts"


export default function Home() {
  return (
    <main>
      <Hero data={text.hero} />
      <Lead data={text.lead} />
      <Separator />
      <ImportantNotes data={text.important_notes} />
      <Timetable data={text.timetable} />
      <AboutUs data={text.about} />
      <Separator />
      <HitBack data={text.hitback} />
      <Separator />
      <Gallery data={text.gallery} />

      <p style={{margin: "2rem 1rem"}}>
        © Barbi & Áron
        <br />
        www.boomi.hu
      </p>
    </main>
  )
}
