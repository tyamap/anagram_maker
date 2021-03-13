import React from "react";

type InputFormProps = {
  form: any;
};
const InputForm: React.FC<InputFormProps> = (props) => {
  return (
    <div>
      <div>
        <label>
          もととなる文字列：
          <div>
            <input
              type="text"
              name="w"
              ref={props.form.register}
              required
              style={{ width: 250 }}
            />
          </div>
        </label>
      </div>
      <div>
        <label>
          つくる単語の文字数：
          <input
            type="number"
            name="mn"
            defaultValue={3}
            ref={props.form.register}
            min={2}
            max={15}
            style={{ width: 30 }}
          />
        </label>
      </div>
    </div>
  );
};

export default InputForm;
