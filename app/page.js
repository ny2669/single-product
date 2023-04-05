import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Video from "./components/Video"
import Features from "./components/Features"
import FeaturePart2 from "./components/FeaturePart2"
import Products from "./components/Products"
import SignUp from "./components/SignUp"
import Review from "./components/Review"
import Contact from "./components/Contact"
import AsSeen from "./components/AsSeen"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className='w-full z-10'>
<Header/>
<About/>
<Video/>
<Features/>
<FeaturePart2/>
<Products/>
<SignUp/>
<Review/>
<Contact/>
<AsSeen/>
<Footer/>
    </main>
  )
}
