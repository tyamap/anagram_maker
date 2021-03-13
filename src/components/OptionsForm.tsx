import React from "react";
import { UseFormMethods } from "react-hook-form";
import Options from "../entities/options";

type OptionsFormProps = {
  form: any;
};

const OptionsForm: React.FC<OptionsFormProps> = (props) => {
  return (
    <div>
      <div>
        対象：
        <label>
          <input
            type="checkbox"
            name="t"
            ref={props.form.register}
            value="n"
            defaultChecked
          />
          名詞
        </label>
        <label>
          <input
            type="checkbox"
            name="t"
            ref={props.form.register}
            value="v"
            defaultChecked
          />
          動詞
        </label>
        <label>
          <input
            type="checkbox"
            name="t"
            ref={props.form.register}
            value="aj"
            defaultChecked
          />
          形容詞
        </label>
        <label>
          <input
            type="checkbox"
            name="t"
            ref={props.form.register}
            value="av"
            defaultChecked
          />
          副詞
        </label>
        <label>
          <input
            type="checkbox"
            name="t"
            ref={props.form.register}
            value="o"
            defaultChecked
          />
          その他
        </label>
      </div>
      <div>
        動詞：
        <label>
          <input
            type="radio"
            name="vob"
            ref={props.form.register}
            value={1}
            defaultChecked
          />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="vob" ref={props.form.register} value={0} />
          活用形も含む
        </label>
      </div>
      <div>
        形容詞：
        <label>
          <input
            type="radio"
            name="ajob"
            ref={props.form.register}
            value={1}
            defaultChecked
          />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="ajob" ref={props.form.register} value={0} />
          活用形も含む
        </label>
      </div>
      <div>
        副詞：
        <label>
          <input
            type="radio"
            name="avob"
            ref={props.form.register}
            value={1}
            defaultChecked
          />
          基本形のみ
        </label>
        <label>
          <input type="radio" name="avob" ref={props.form.register} value={0} />
          活用形も含む
        </label>
      </div>
    </div>
  );
};

export default OptionsForm;
