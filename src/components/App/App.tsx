import { useState } from "react";
import Cafeinfo from "../Cafeinfo/Cafeinfo";
import  VoteOptions  from "../VoteOptions/Voteoptions";
import   VoteStats   from '../VoteStats/Votestats';
import css from "./App.module.css";
import { Votes, VoteType } from "../types/votes";



function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };


   function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }


  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <Cafeinfo />
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={true} 
      />
       <VoteStats 
        votes={votes} 
        totalVotes={totalVotes} 
        positiveRate={positiveRate} 
      />
    </div>
  );
}

export default App;
