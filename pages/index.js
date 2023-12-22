import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Song from "@/components/Song/Song";
import Songs from "@/components/Songs/Songs";

const Home = () => {
  const [songs, setSongs] = useState(null);

  const fetchSongs = async () => {
    const response = await axios.get(
      "https://6554f24b63cafc694fe73e68.mockapi.io/songs"
    );

    setSongs(response.data);
  };

  useEffect(() => {
    console.log("this is client side");
    fetchSongs();
  }, []);

  return (
    <div>
      <Header />

      <main className={styles.main}>
        {songs ? <Songs songs={songs} /> : <>Loading...</>}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
