import useAxios from "axios-hooks";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ResultTable from "./components/ResultTable";
import InputForm from "./components/InputForm";
import OptionsForm from "./components/OptionsForm";
import Options from "./entities/options";
import KuromojiToken from "./entities/token";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

type FormData = {
  w: string;
  mn: number;
} & Options;

const api = {
  getWord: {
    url: () => `${process.env.REACT_APP_API_BASE}/word`,
  },
};

function App() {
  const form = useForm<FormData>();
  const onSubmit = form.handleSubmit((data: FormData) => {
    updateData({ data: data });
  });
  const [{ data, loading, error }, updateData] = useAxios<KuromojiToken[]>(
    {
      url: api.getWord.url(),
      method: "POST",
    },
    { manual: true }
  );

  return (
    <div className="App">
      <h1>アナグラムつくるくん</h1>
      <form onSubmit={onSubmit}>
        <InputForm form={form} />
        <OptionsForm form={form} />
        <input type="submit" />
      </form>
      {loading && <CircularProgress />}
      {data != undefined && !error && <ResultTable data={data} />}
      {error && <p>ERROR!!</p>}
    </div>
  );
}

export default App;
