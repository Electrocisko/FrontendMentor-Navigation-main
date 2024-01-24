import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"


function Root() {
  return (
    <>
  <Navbar/>
    <main>
        <Outlet/>
    </main>
  <Footer/>
    </>
  )
}

export default Root