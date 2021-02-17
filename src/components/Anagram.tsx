import React, { useEffect, useState } from "react";
import kuromoji, { IpadicFeatures, Tokenizer } from "kuromoji";

type AnagramProps = {
  word: string;
  number: number;
};
type kuromojiDict = {
  [key: string]: kuromoji.IpadicFeatures
}
const Anagram: React.FC<AnagramProps> = (props) => {
  const [dict, setDict] = useState<kuromojiDict>({});

  useEffect(() => {
    console.log("作るよ");
    createDict().then(() => {
      setDict(anaDic);
      console.log("作った");
      console.log(anaDic);
    });
  }, [props]);

  const permutation = (
    post: any[],
    n: number = post.length,
    result: any[] = [],
    pre: any[] = []
  ) => {
    if (n > 0) {
      post.forEach((_, i) => {
        const rest = [...post];
        const elem: any[] = rest.splice(i, 1);
        permutation(rest, n - 1, result, [...pre, ...elem]);
      });
    } else {
      result.push(pre);
    }
    return result;
  };

  const array = props.word.split("");
  const results = permutation(array, array.length < props.number ? array.length :props.number);
  const anaDic: kuromojiDict = {};
  const builder = kuromoji.builder({
    dicPath: "/dict",
  });
  const tokenizer = new Promise<Tokenizer<IpadicFeatures>>((done) => {
    builder.build((_err, tokenizer) => {
      done(tokenizer);
    });
  });

  const searchDict = async (value: string) => {
    const res = (await tokenizer).tokenize(value).map((t) => t);
    if (res.length === 1 && res[0].word_type === "KNOWN") {
      anaDic[value] = res[0];
    }
  };

  const createDict = async () => {
    for await (let r of results) {
      await searchDict(r.join(""));
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>抽出結果</th>
          <th>基本形</th>
          <th>活用型</th>
          <th>活用形</th>
          <th>品詞</th>
          <th>品詞細分類1</th>
          <th>品詞細分類2</th>
          <th>品詞細分類3</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(dict).map((key) => (
          <tr key={key}>
            <td className="result">{key}</td>
            <td>{dict[key].basic_form}</td>
            <td>{dict[key].conjugated_type}</td>
            <td>{dict[key].conjugated_form}</td>
            <td>{dict[key].pos}</td>
            <td>{dict[key].pos_detail_1}</td>
            <td>{dict[key].pos_detail_2}</td>
            <td>{dict[key].pos_detail_3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Anagram;
