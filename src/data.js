import requests from './requests'
export const dataRequired=[
    {id:1,title:"NETFLIX ORIGINALS",url:requests.fetchNetflixOriginals},
    {id:2,title:"Trending Now",url:requests.fetchTrending},
    {id:3,title:"Top Rated",url:requests.fetchTopRated},
    {id:4,title:'Action Movies',url:requests.fetchActionMovies},
    {id:5,title:"Comedy Movies",url:requests.fetchComedyMovies},
    {id:6,title:"Horror Movies",url:requests.fetchHorrorMovies},
    {id:7,title:"Romance Movies",url:requests.fetchRomanceMovies},
    {id:8,title:"Documentaries",url:requests.fetchDocumentaries},

]