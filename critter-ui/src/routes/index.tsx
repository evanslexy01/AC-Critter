import { Title } from "solid-start";

export default function Home() {
  return (
    <main>
      <header class="header">
        <nav>
          <button>
            <img src="" alt="Settings" />
          </button>
          <Title>Collections</Title>
          <button>
            <img src="" alt="Critters" />
          </button>
        </nav>
      </header>
      <div class="collections">
        <button class="btn">
          <button class="btn-muted">
            <img class="btn_fish" src="fishy.svg" />
          </button>
          <button class="btn-muted">
            <img class="btn_butt" src="butterfly.svg" />
          </button>
          <button class="btn-muted">
            <img class="btn_squid" src="squid.svg" />
          </button>
        </button>
      </div>
    </main>
  );
}
