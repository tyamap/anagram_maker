import useAxios from "axios-hooks";
import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "../components/sentences/InputForm";
import KuromojiToken from "../entities/token";
import ReactLoading from "react-loading";
import ResultTable from "../components/sentences/ResultTable";

type FormData = {
  s: string;
};

const api = {
  getSentences: {
    url: () => `${process.env.REACT_APP_API_BASE}/sentences`,
  },
};

type SentencesProps = {};

const Sentences: React.FC<SentencesProps> = (props) => {
  const form = useForm<FormData>();

  const onSubmit = form.handleSubmit((data: FormData) => {
    updateData({ data: data });
  });

  const [{ data, loading, error }, updateData] = useAxios<KuromojiToken[][]>(
    {
      url: api.getSentences.url(),
      method: "POST",
    },
    { manual: true }
  );

  return (
    <div>
      <p className="descript">
        <span>入力された文字列を並び替えて</span>
        <br />
        <span>意味の通りそうな単語の羅列をつくります</span>
        <br />
      </p>
      <p className="descript">
        入力: 10文字まで
        <br />
        結果: 300件まで
      </p>
      <form onSubmit={onSubmit}>
        <InputForm form={form} />
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

export default Sentences;
