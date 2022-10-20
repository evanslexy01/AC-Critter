import "./collections.scss";
import fishy from "../../assets/icons/fishy.svg";
import squid from "../../assets/icons/squid.svg";
import butterfly from "../../assets/icons/butterfly.svg";

const numBugs = 110;
const totalBugs = 114;

const Collections = () => (
  <div class="page">
    <nav class="header">
      <a>
        <img src={fishy} alt="Fish" />
      </a>
      <h1 class="title">Collections</h1>
      <a>
        <img src={butterfly} alt="Butterfly" />
      </a>
    </nav>
    <div class="content">
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <div class="title-alt-container">
          <div class="title-alt">
            <span class="text-top">Giant Snakehead</span>
            <span class="subtitle">In Rivers Until 11:00 PM</span>
          </div>
        </div>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Bugs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Sea Life: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Fish: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Fossils: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Songs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Art: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <div class="icon-holder">
          <img class="icon" src={squid} alt="Squid" />
        </div>
        <h3 class="title">
          Gyroids: {numBugs}/{totalBugs}
        </h3>
      </div>
    </div>
  </div>
);

export default Collections;
