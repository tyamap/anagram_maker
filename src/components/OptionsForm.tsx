import { kMaxLength } from "buffer";
import React from "react";

type OptionsFormProps = {
  form: any;
};

const checkboxes = [
  { label: "名詞", key: "n" },
  { label: "動詞", key: "v" },
  { label: "形容詞", key: "aj" },
  { label: "副詞", key: "av" },
  { label: "その他", key: "o" },
];
const radios = [
  { label: "動詞", key: "vob" },
  { label: "形容詞", key: "ajob" },
  { label: "副詞", key: "avob" },
];
const OptionsForm: React.FC<OptionsFormProps> = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>対象：</td>
          <td>
            <div>
              {checkboxes.map((d) => (
                <React.Fragment key={d.key}>
                  <input
                    id={d.key}
                    type="checkbox"
                    name="t"
                    ref={props.form.register}
                    value={d.key}
                    defaultChecked
                  />
                  <label htmlFor={d.key} className="checkbox">
                    {d.label}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </td>
        </tr>
        {radios.map((d) => (
          <tr key={d.key}>
            <td>
              <span>{d.label}：</span>
            </td>
            <td>
              <input
                id={`${d.key}-1`}
                type="radio"
                name={d.key}
                ref={props.form.register}
                value={1}
                defaultChecked
              />
              <label htmlFor={`${d.key}-1`} className="radio">
                基本形のみ
              </label>
              <input
                id={`${d.key}-0`}
                type="radio"
                name={d.key}
                ref={props.form.register}
                value={0}
              />
              <label htmlFor={`${d.key}-0`} className="radio">
                活用形も含む
              </label>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OptionsForm;
