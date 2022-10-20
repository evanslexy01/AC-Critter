import "./collections.css";

const Fishy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 31 26">
    <ellipse
      fill="#F5F5F5"
      rx="8.9"
      ry="6.9"
      transform="matrix(.92668 -.39333 .49388 .86466 12.7 14.4)"
    />
    <ellipse
      fill="#F5F5F5"
      rx="2.3"
      ry="3.9"
      transform="matrix(-.0525 -.96063 1.03303 .13484 23.8 11.4)"
    />
    <ellipse
      fill="#F5F5F5"
      rx="2.3"
      ry="4.3"
      transform="matrix(.88246 .54134 -.41493 .86265 22.2 9.2)"
    />
  </svg>
);

const Collections = () => (
  <div class="collections">
    <button class="btn">
      {/* <button class="btn-muted">{Fishy}</button> */}
      <button class="btn-muted">
        <img class="btn_butt" src="butterfly.svg"></img>
      </button>
      <button class="btn-muted">
        <img class="btn_squid" src="squid.svg"></img>
      </button>
    </button>
  </div>
);

export default Collections;
