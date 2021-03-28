import React, { useState, useEffect, useRef } from "react";
import { Card, Image, Button } from "react-bootstrap";
import MyDate from "../common/MyDate";
export default ({ title, content, date, image }) => {
  return (
    <>
      <div className="my_font_size_lg">{title}</div>
      <div className="my_font_size_md">{MyDate(date)}</div>
      <div className="mx-auto d-flex justify-content-center">
        <Image
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "./image_not_found.svg";
          }}
          fluid
          src={image}
          style={{ maxHeight: "200px" }}
          className="mx-auto"
          rounded
        />
      </div>
      <div className="my_font_size_sm">{content.replace(/\[(.*?)\]/, "")}</div>
    </>
  );
};
