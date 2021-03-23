import React from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";
import KuromojiToken from "../../entities/token";

type ResultTableProps = {
  input: string
  data: KuromojiToken[];
};

const ResultTable: React.FC<ResultTableProps> = (props) => {
  if (props.data?.length === 0) return <p className="error">該当なし</p>;

  return (
    <table className="result">
      <thead>
        <tr>
          <th>抽出結果</th>
          <th>品詞</th>
          <th>基本形</th>
          <th>活用形</th>
          <th>活用型</th>
          <th>品詞細分類</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d, i) => (
          <tr key={i}>
            <td className="result">{d.surface}</td>
            <td>{d.partOfSpeechLevel1}</td>
            <td>{d.baseForm}</td>
            <td>{d.conjugationForm}</td>
            <td>{d.conjugationType}</td>
            <td>{d.partOfSpeechLevel2}</td>
            <th>
              <TwitterShareButton
                url={process.env.REACT_APP_ROUTE!}
                title={`【${props.input}】のなかに【${d.surface}】をみつけました`}
                hashtags={["アナグラム", "あなぐらむつくるくん"]}
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
