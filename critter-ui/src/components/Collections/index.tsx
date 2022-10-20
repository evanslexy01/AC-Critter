import "./collections.scss";
import fishy from "../../assets/icons/fishy.svg";
import squid from "../../assets/icons/squid.svg";
import butterfly from "../../assets/icons/butterfly.svg";

const numBugs = 110;
const totalBugs = 114;

const Collections = () => (
  // <div>
  //   <a class="btn-muted">
  //     <img src={fishy} alt="Fish" />
  //   </a>
  //   <a class="btn-muted">
  //     <img src={squid} alt="Squid" />
  //   </a>
  //   <a class="btn-muted">
  //     <img src={butterfly} alt="Butterfly" />
  //   </a>
  // </div>
  <div class="page">
    <nav class="header">
      <a>
        <img src={fishy} alt="Fish" />
      </a>
      <h1 class="title">Critters</h1>
      <a>
        <img src={butterfly} alt="Butterfly" />
      </a>
    </nav>
    <div class="content">
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Bugs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Sea Life: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Fish: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Fossils: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Songs: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Art: {numBugs}/{totalBugs}
        </h3>
      </div>
      <div class="bubble">
        <img class="icon" src={squid} alt="Squid" />
        <h3 class="title">
          Gyroids: {numBugs}/{totalBugs}
        </h3>
      </div>
    </div>
  </div>
);

export default Collections;
