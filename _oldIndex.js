import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Appppppp");

  const [locations, setLocations] = useState([
    {
      title: "Malta",
      imgUrl:
        "https://a.cdn-hotels.com/gdcs/production103/d1998/59405f03-8858-47f1-b9a8-db9c223576ad.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    },
    {
      title: "Crete",
      imgUrl:
        "https://ctdots.eu/wp-content/uploads/2019/08/best-crete-beaches-1200x900.jpg",
    },
    {
      title: "Lofoten",
      imgUrl:
        "https://global.hurtigruten.com/globalassets/photos/excursions/iconic/hri-svj12a/main_shutterstock_520670554_2500px.jpg?width=1900&height=950&transform=DownFill",
    },
  ]);

  return (
    <div>
      <Header appName={name} />
      <button
        onClick={() => {
          console.log("clicked");
          setName("new app name");
        }}
      >
        Change name
      </button>

      <main className={styles.main}>
        <Card title={locations[0].title} imgUrl={locations[0].imgUrl} />
        <Card title={locations[1].title} imgUrl={locations[1].imgUrl} />
        <Card title={locations[2].title} imgUrl={locations[2].imgUrl} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
