import React from "react";
import Options from "../entities/options";

type OptionsFormProps = {
  setOptions: React.Dispatch<React.SetStateAction<Options>>
};

const OptionsForm: React.FC<OptionsFormProps> = (props) => {
  return (
    <div>
      <div>
        対象：
        <label>
          <input type="checkbox" name="targets" value="n" checked />
          名詞
        </label>
        <label>
          <input type="checkbox" name="targets" value="v" checked />
          動詞
        </label>
        <label>
          <input type="checkbox" name="targets" value="aj" checked />
          形容詞
        </label>
        <label>
          <input type="checkbox" name="targets" value="av" checked />
          副詞
        </label>
      </div>
      <div>
        動詞：
        <label>
          <input type="radio" name="vOnlyBase" value={1} />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="vOnlyBase" value={0} />
          活用形も含む
        </label>
      </div>
      <div>
        形容詞：
        <label>
          <input type="radio" name="ajOnlyBase" value={1} />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="ajOnlyBase" value={0} />
          活用形も含む
        </label>
      </div>
      <div>
        副詞：
        <label>
          <input type="radio" name="avOnlyBase" value={1} />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="avOnlyBase" value={0} />
          活用形も含む
        </label>
      </div>
    </div>
  );
};

export default OptionsForm;
