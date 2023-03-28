import { useState } from "react"
import Hero from "@/components/Hero"
import Lead from "@/components/Lead"
import Separator from "@/components/Separator"
import ImportantNotes from "@/components/ImportantNotes"
import Timetable from "@/components/Timetable"
import AboutUs from "@/components/AboutUs"
import HitBack from "@/components/HitBack"
import Gallery from "@/components/Gallery"
import text from "@/helpers/texts"

export default function Home({data}) {


  return (
    <main className="text-center">
      <Hero data={data.acf} />
      <Lead data={data.acf} />
      <Separator />
      <ImportantNotes data={data.acf} />
      <Timetable data={data.acf} />
      <AboutUs data={data.acf} />
      <Separator />
      <HitBack data={data.acf} />
      <Separator />
      <Gallery data={data.acf} />

      <p style={{margin: "2rem 1rem"}}>
        © {data.acf.greeny_hero_2} <br /> www.boomi.hu
      </p>
    </main>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://${process.env.DOMAIN}/wp-json/wp/v2/pages/${process.env.ID}?_fields=acf`)
  const data = await res.json()

  return {
    props: { data },
  }
}