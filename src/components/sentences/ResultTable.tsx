import React from "react";
import SentenceResponse from "../../entities/sentenseResponse";

type ResultTableProps = {
  data: SentenceResponse[][];
};

const ResultTable: React.FC<ResultTableProps> = (props) => {
  if (props.data?.length === 0) return <p className="error">該当なし</p>;

  return (
    <table className="sen-table">
      <thead>
        <tr>
          <th className="col-1">抽出結果</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d, i) => (
          <tr key={`s-${i}`}>
            <td className="col-1">
              {d.map((a, ii) => (
                <span key={`w-${ii}`} className="sen-words">{a.surface}</span>
              ))}
            </td>
            <td>
              {/* TODO: twitter共有ボタン */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
