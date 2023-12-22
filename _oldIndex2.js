import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import { useState } from "react";

const Home = () => {
  const [questions, setQuestions] = useState([
    {
      id: "1",
      question: "Storas storas dieduliukas, uzpakaly pagaliukas?",
      answer: "obuolys",
    },
    { id: "2", question: "Zalia zole bet ne zole....", answer: "Agurkas" },
    { id: "3", question: "Balta kreida dangu raizo", answer: "Lektuvas" },
    { id: "4", question: "2 seses per kalneli nesueina", answer: "Akys" },
  ]);

  return (
    <div>
      <Header />

      <main className={styles.main}>
        {questions.map((q) => (
          <div key={q.id}>
            <QuestionCard question={q.question} answer={q.answer} />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
