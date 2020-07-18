import React from 'react'
import Row from './Row'
import requests from './requests'
export default function App() {
    return (
        <div className="App">
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        </div>
    )
}
 