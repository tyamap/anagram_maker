import React from "react";
import useAxios from "axios-hooks";
import KuromojiToken from "../entities/token";
import Options from "../entities/options";

type AnagramProps = {
  word: string;
  number: number;
  options: Options
};

const api = {
  getWord: {
    url: (w: string, mn: number, t:string, vob: number, ajob: number, avob: number) =>
      `${process.env.REACT_APP_API_BASE}/word?w=${w}&mn=${mn}&t=${t}&vob=${vob}&ajob=${ajob}&avob=${avob}`,
  },
};
const Anagram: React.FC<AnagramProps> = (props) => {
  const opt = props.options
  const [{ data, loading, error }] = useAxios<KuromojiToken[]>({
    url: api.getWord.url(props.word, props.number, opt.targets?.join('+'), opt.vOnlyBase, opt.ajOnlyBase, opt.avOnlyBase),
    method: "GET",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

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
        {data?.map((d, i) => (
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

export default Anagram;
