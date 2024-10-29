import { Outlet } from "react-router-dom"
// import Navbar from "../component/Navbar"



function RootPage(){
    return (
    <>
    {/* <h1>Root Layout</h1> */}
    {/* <Navbar></Navbar> */}
    {/* พื้นที่แสดงผล Home กับ Movie*/}
    <div style={{background : "#E0E0E0"}}>
        <Outlet></Outlet>
    </div>
    </>
    )
}

export default RootPage