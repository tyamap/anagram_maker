import React from "react";
import KuromojiToken from "../../entities/token";

type ResultTableProps = {
  data: KuromojiToken[];
};

const ResultTable: React.FC<ResultTableProps> = (props) => {
  if (props.data?.length === 0) return <p className="error">該当なし</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>抽出結果</th>
          <th>品詞</th>
          <th>基本形</th>
          <th>活用形</th>
          <th>活用型</th>
          <th>品詞細分類1</th>
          <th>品詞細分類2</th>
          <th>品詞細分類3</th>
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
            <td>{d.partOfSpeechLevel3}</td>
            <td>{d.partOfSpeechLevel4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
