import "./App.css";
import Moralis from "moralis";
import { useState } from "react";
import { NftExplore } from "./pages/NftExplore";

function App() {
  const userCurrentTheme = JSON.parse(localStorage.getItem("isDark"));
  const [isDark, setisDark] = useState(userCurrentTheme || true);

  // initMoralis function
  const initMoralis = async () => {
    // connect to Moralis server
    await Moralis.start({
      serverUrl: process.env.REACT_APP_SERVER_URL,
      appId: process.env.REACT_APP_APP_ID,
    });
  };

  // call/invoke initMoralis function
  initMoralis();

  return (
    <main className={isDark ? "dark" : ""}>
      <div className="dark:bg-gray-800 pt-10 px-8 bg-gray-50">
        <section className="container mx-auto w-full max-w-screen-xl min-h-screen">
          <NftExplore settheme={setisDark} />
        </section>
      </div>
    </main>
  );
}

export default App;
