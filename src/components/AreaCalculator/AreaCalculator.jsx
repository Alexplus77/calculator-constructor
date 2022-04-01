import React from "react";
import s from "./AreaCalculator.module.css";

export const AreaCalculator = () => {
  const digitButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","];
  const operationBtns = ["/", "*", "-", "+"];
  return (
    <div className={s.containerCalculator}>
      <div className={s.display}>Display</div>
      <div className={s.operationBtns}>
        {operationBtns.map((operation) => (
          <div className={s.digitBtn}>{operation}</div>
        ))}
      </div>
      <div className={s.digitBtns}>
        {digitButton.map((button) => (
          <div
            className={button === 0 ? s.digitBtnZero : s.digitBtn}
            key={button}
          >
            {button}
          </div>
        ))}
      </div>
      <div className={s.equally}>=</div>
    </div>
  );
};
