import useAxios, { Options } from "axios-hooks";
import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../components/words/InputForm";
import OptionsForm from "../components/words/OptionsForm";
import ResultTable from "../components/words/ResultTable";
import KuromojiToken from "../entities/token";
import ReactLoading from "react-loading";

type FormData = {
  w: string;
  mn: number;
} & Options;

const api = {
  getWords: {
    url: () => `${process.env.REACT_APP_API_BASE}/words`,
  },
};

type WordsProps = {};

const Words: React.FC<WordsProps> = (props) => {
  const form = useForm<FormData>();
  const onSubmit = form.handleSubmit((data: FormData) => {
    if (form.getValues().w.length < form.getValues().mn) {
      form.setError("mn", {
        type: "manual",
        message: `${form.getValues().w.length}以下にしてください`,
      });
    } else {
      updateData({ data: data });
    }
  });

  const [{ data, loading, error }, updateData] = useAxios<KuromojiToken[]>(
    {
      url: api.getWords.url(),
      method: "POST",
    },
    { manual: true }
  );

  return (
    <div>
      <p className="descript">
        <span>入力された文字列を 指定の文字数で並び替えて</span>
        <br />
        <span>意味のありそうな単語をつくります</span>
        <br />
      </p>
      <p className="descript">
        入力: 15文字まで
        <br/>
        つくる文字数: 2 ~ 7
        <br />
      </p>
      <form onSubmit={onSubmit}>
        <InputForm form={form} />
        {form.errors.mn && <p className="valid">{form.errors.mn.message}</p>}
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
      {error && <p className="error big">ERROR!!</p>}
    </div>
  );
};

export default Words;
