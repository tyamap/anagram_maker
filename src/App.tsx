import React, { useEffect, useState } from "react";
import Anagram from "./components/Anagram";
import InputForm from "./components/InputForm";

export type Query = {
  word: string
  number: number
}
function App() {
  const [query, setQuery] = useState<Query>({word: "", number: 0})

  useEffect(() => {
    console.log(query.word);
  }, [query])
  return (
    <div className="App">
      <h1>アナグラムつくるくん</h1>
      <InputForm setQuery={setQuery}/>
      <Anagram word={query.word} number={query.number} />
    </div>
  );
}

export default App;
