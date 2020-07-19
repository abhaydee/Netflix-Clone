import React from 'react'
import Row from './Row'
import {dataRequired} from './data'
export default function App() {
    return (
        <div className="App">
            {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/> */}
            {dataRequired.map((rowData)=>(
                <Row title={rowData.title} fetchUrl={rowData.url}/>
            ))}
        </div>
    )
}
 