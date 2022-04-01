import React from "react";
import s from "./AreaCanvas.module.css";
import { FileAddOutlined } from "@ant-design/icons";
export const AreaCanvas = () => {
  return (
    <div className={s.containerCanvas}>
      <div className={s.canvasText}>
        <FileAddOutlined style={{ fontSize: "2em" }} />
        <strong>Перетащите сюда</strong>
        <em>Любой элемент из левой секции</em>
      </div>
    </div>
  );
};
