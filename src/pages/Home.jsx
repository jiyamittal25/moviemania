import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID='6' title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowID='10' title='Romantic' fetchURL={requests.requestRomantic} />
        <Row rowID='9' title='Children' fetchURL={requests.requestChildren} />
        <Row rowID='12' title='Comedy' fetchURL={requests.requestComedy} />
        <Row rowID='18' title='Music' fetchURL={requests.requestMusic} />
        <Row rowID='21' title='War' fetchURL={requests.requestWar} />
        <Row rowID='17' title='Mystery' fetchURL={requests.requestMystery} />
        <Row rowID='8' title='Animation' fetchURL={requests.requestAnimation} />
        <Row rowID='1' title='Netflix Originals' fetchURL={requests.requestNetflixOriginals} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='TopRated' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        <Row rowID='7' title='TvShows' fetchURL={requests.requestTvShows} />
        <Row rowID='11' title='Action' fetchURL={requests.requestAction} />
        <Row rowID='13' title='ScienceFiction' fetchURL={requests.requestScienceFiction} />
        <Row rowID='14' title='Drama' fetchURL={requests.requestDrama} />
        <Row rowID='15' title='Adventure' fetchURL={requests.requestAdventure} />
        <Row rowID='16' title='Fantasy' fetchURL={requests.requestFantasy} />
        <Row rowID='19' title='Biography' fetchURL={requests.requestBiography} />
        <Row rowID='20' title='Historical' fetchURL={requests.requestHistorical} />
        <Row rowID='22' title='Thriller' fetchURL={requests.requestThriller} />
        <Row rowID='23' title='Superhero' fetchURL={requests.requestSuperhero} />
        <Row rowID='24' title='Family' fetchURL={requests.requestFamily} />
        <Row rowID='25' title='AnimationTvShows' fetchURL={requests.requestAnimationTvShows} />
        <Row rowID='26' title='CrimeTvShows' fetchURL={requests.requestCrimeTvShows} />
        <Row rowID='27' title='RealityTvShows' fetchURL={requests.requestRealityTvShows} />
        <Row rowID='28' title='FantasyTvShows' fetchURL={requests.requestFantasyTvShows} />
        <Row rowID='29' title='ScienceFictionTvShows' fetchURL={requests.requestScienceFictionTvShows} />
        <Row rowID='30' title='HistoricalTvShows' fetchURL={requests.requestHistoricalTvShows} />
        <br/><br/><br/><br/><br/>



        <p className='text-red-600 p-6 flex justify-center items-center text-3xl'>Movie Mania</p>
    </div>
  )
}

export default Home