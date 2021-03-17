import useAxios from "axios-hooks";
import React from "react";
import { useForm } from "react-hook-form";
import ResultTable from "./components/ResultTable";
import InputForm from "./components/InputForm";
import OptionsForm from "./components/OptionsForm";
import Options from "./entities/options";
import KuromojiToken from "./entities/token";
import ReactLoading from "react-loading";
import "./App.css";

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
      <h1 style={{ textAlign: "center" }}>あなぐらむつくるくん</h1>
      <form onSubmit={onSubmit}>
        <InputForm form={form} />
        <OptionsForm form={form} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            className="submit-btn"
            type="submit"
            value="つくる"
            disabled={loading}
          />
        </div>
      </form>
      {!loading && !error && data !== undefined && !error && (
        <ResultTable data={data} />
      )}
      {loading && (
        <div style={{ margin: "0 auto", width: 100 }}>
          <ReactLoading type="bubbles" color="#008080" width={100} />
        </div>
      )}
      {error && <p className="error">ERROR!!</p>}
    </div>
  );
}

export default App;
