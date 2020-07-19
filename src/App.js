import React from 'react'
import Row from './Row'
import {dataRequired} from './data'
import Nav from './Nav'
import Banner from './Banner'
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
 