import { useId } from "react";

import "./checkbox.scss";

interface CheckboxProps {
  labelText: string;
  labelHidden?: boolean;
  checkedStatus?: boolean;
}

export default function Checkbox({ labelText, labelHidden, checkedStatus }: CheckboxProps) {
  const id = useId();

  return (
    <div className="flex-wrapper">
      <input
        type="checkbox"
        name={`checkbox-${id}`}
        id={`checkbox-${id}`}
        className="todo-input-checkbox"
        checked={checkedStatus ? checkedStatus : undefined}
      />
      <label
        htmlFor={`checkbox-${id}`}
        className={labelHidden ? " visually-hidden" : ""}
      >
        {labelText}
      </label>
    </div>
  );
}
