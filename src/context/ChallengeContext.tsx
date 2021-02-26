import { createContext, useState, Children, ReactNode } from "react";

export const ChalleneContext = createContext({} as ChallengceContextData);

interface ChallengceContextData{
    level : number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;

}

interface ChallengeProviderProps {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log("New challenge");
  }

  return (
    <ChalleneContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge
      }}
    >
      {children}
    </ChalleneContext.Provider>
  );
}
