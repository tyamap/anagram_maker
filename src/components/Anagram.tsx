import React, { useEffect, useState } from "react";
import kuromoji, { IpadicFeatures, Tokenizer } from "kuromoji";

type AnagramProps = {
  word: string;
  length: number;
};

const Anagram: React.FC<AnagramProps> = (props) => {
  const [dict, setDict] = useState<any>({});

  useEffect(() => {
    createDict().then(() => {
      setDict(anaDic);
      console.log(anaDic);
    })
  }, []);

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
  const results = permutation(array, props.length);
  const anaDic: any = {};
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
    if (res.length === 1) {
      anaDic[value] = res[0];
    }
  };

  const createDict = async () => {
    for await (let r of results) {
      await searchDict(r.join(""));
    }
  };

  return (
    <ul>
      {Object.keys(dict).map((key) => (
        <li key={key}>
          {`${key} | ${dict[key]}`}
        </li>
      ))}
    </ul>
  );
};

export default Anagram;
