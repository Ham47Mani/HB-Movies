import React, {Fragment, useRef} from 'react'
import Homes from '../components/homes/Homes'
import Trending from '../components/trending/Trending';
import MoviesBoxs from '../components/moviesBox/MoviesBoxs'
import { latest, recommended, upcome } from '../dummyData';

const HomePage = () => {
  //--- Upcomming Get Content
  const upcommingSection = useRef(null);
  upcommingSection.current = upcome;

  //--- Latest Get Content
  const latestSection = useRef(null);
  latestSection.current = latest;

  //--- Recommended Movies Get Content
  const recSection = useRef(null);
  recSection.current = recommended;
  return (
    <Fragment>
      <Homes/>
      <MoviesBoxs title="UpCommibg Movies" items={upcommingSection.current} className="upcome"/>
      <MoviesBoxs title="Latest Movies" items={latestSection.current} className="latest"/>
      <Trending />
      <MoviesBoxs title="Recommended Movies" items={recSection.current} className="padding-section"/>
    </Fragment>
  )
}

export default HomePage
