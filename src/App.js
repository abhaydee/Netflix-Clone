import React from 'react'
import Row from './Components/RowGrid/Row'
import {dataRequired} from './services/data'
import Nav from './Components/Navbar/Nav'
import Banner from './Components/Banner/Banner'
import './App.css'
export default function App() {
    return (
        <div className="App">
            <Nav/>
            <Banner/>
            {dataRequired.map((rowData)=>(
                <Row key={rowData.id} largeRowRequired={rowData.largeRowRequired} title={rowData.title} fetchUrl={rowData.url}/>
            ))}
        </div>
    )
}
 