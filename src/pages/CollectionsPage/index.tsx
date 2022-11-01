import Header from '../../components/Header';
import butterfly from '../../assets/icons/butterfly.svg';
import fish from '../../assets/icons/fishy.svg';
import net from '../../assets/icons/net.svg';
import settings from '../../assets/icons/settings.svg';
import squid from '../../assets/icons/squid.svg';
import { PAGES } from '../../App';

import * as React from 'react';

const numBugs = 110;
const totalBugs = 114;

export default ({ page, setPage }: { page: PAGES; setPage: (page: PAGES) => void }) => (
  <div
    className={`page${
      page === PAGES.Collections ? '' : ` page-hide-${page === PAGES.Settings ? 'right' : 'left'}`
    }`}
  >
    <Header
      btnLeft={{ name: 'settings', icon: settings, action: () => setPage(PAGES.Settings) }}
      title="Collections"
      btnRight={{ name: 'critters', icon: net, action: () => setPage(PAGES.Critters) }}
    />
    <div className="content">
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={butterfly} alt="Squid" />
        </div>
        <h3 className="title">
          Bugs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <h3 className="title">
          Sea Life: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={fish} alt="Squid" />
        </div>
        <h3 className="title">
          Fish: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <h3 className="title">
          Fossils: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <h3 className="title">
          Songs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <h3 className="title">
          Art: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div className="bubble">
        <div className="icon-holder">
          <img className="icon" src={squid} alt="Squid" />
        </div>
        <h3 className="title">
          Gyroids: {numBugs}/{totalBugs}
        </h3>
      </div>
    </div>
  </div>
);
