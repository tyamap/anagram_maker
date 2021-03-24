import React from "react";

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
            placeholder="入力"
            name="s"
            ref={props.form.register}
            required
            maxLength={10}
          />
        </label>
      </div>
      <div style={{ textAlign: "center", paddingTop: 10 }}>
        次の単語を含む(任意)
      </div>
      <div className="includes">
        <input
          type="text"
          name="inc[0]"
          ref={props.form.register}
          placeholder="任意"
        />
        <input
          type="text"
          name="inc[1]"
          ref={props.form.register}
          placeholder="任意"
        />
        <input
          type="text"
          name="inc[2]"
          ref={props.form.register}
          placeholder="任意"
        />
      </div>
    </div>
  );
};

export default InputForm;
