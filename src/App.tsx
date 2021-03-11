import React, { useState } from "react";
import Anagram from "./components/Anagram";
import InputForm from "./components/InputForm";
import OptionsForm from "./components/OptionsForm";
import Options from "./entities/options";


export type Query = {
  word: string
  number: number
}
const defaultOptions: Options = { targets: ['n', 'v', 'aj', 'av'], vOnlyBase: 1, ajOnlyBase: 1, avOnlyBase: 1 }

function App() {
  const [query, setQuery] = useState<Query>({ word: "", number: 0 })
  const [options, setOptions] = useState<Options>(defaultOptions)

  return (
    <div className="App">
      <h1>アナグラムつくるくん</h1>
      <InputForm setQuery={setQuery} />
      <OptionsForm setOptions={setOptions}/>
      <Anagram word={query.word} number={query.number} options={options} />
    </div>
  );
}

export default App;
