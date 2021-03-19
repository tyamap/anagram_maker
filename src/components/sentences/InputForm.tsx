import React, { useState } from "react";

type InputFormProps = {
  form: any;
};
const InputForm: React.FC<InputFormProps> = (props) => {
  return (
    <div>
      <div className="cp_iptxt">
        <label className="ef">
          <input
            type="text"
            placeholder="もととなる文字列"
            name="s"
            ref={props.form.register}
            required
            maxLength={10}
          />
        </label>
      </div>
    </div>
  );
};

export default InputForm;
