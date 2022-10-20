import { h } from "preact";
import style from "./style.css";

const Home = () => (
  <div class={style.home}>
    <button class="btn">
      <button class="btn-muted">
        <img class="btn_fish" src="fishy.svg"></img>
      </button>
      <button class="btn-muted">
        <img class="btn_butt" src="butterfly.svg"></img>
      </button>
      <button class="btn-muted">
        <img class="btn_squid" src="squid.svg"></img>
      </button>
    </button>
  </div>
);

export default Home;
