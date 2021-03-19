import React, { useState } from "react";

type InputFormProps = {
  form: any;
};

const countMin = 2;
const countMax = 7;
const InputForm: React.FC<InputFormProps> = (props) => {
  const [count, setCount] = useState(3);

  const handleMinus = () => {
    if (count > countMin) setCount(count - 1);
  };

  const handlePlus = () => {
    if (count < countMax) setCount(count + 1);
  };

  return (
    <div>
      <div className="cp_iptxt">
        <label className="ef">
          <input
            type="text"
            placeholder="もととなる文字列"
            name="w"
            ref={props.form.register}
            required
            maxLength={15}
          />
        </label>
      </div>
      <div style={{ textAlign: "center" }}>つくる文字数</div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <div className="count-btn" onClick={handleMinus}>
          -
        </div>
        <input
          className="count-input"
          type="number"
          name="mn"
          value={count}
          ref={props.form.register}
          min={countMin}
          max={countMax}
          readOnly
          step={1}
        />
        <div className="count-btn" onClick={handlePlus}>
          +
        </div>
      </div>
    </div>
  );
};

export default InputForm;
