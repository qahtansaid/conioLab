import React, { useState, useEffect, useRef } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import NavbarBackMolecule from "../molecules/NavbarBackMolecule";
import MyDate from "../common/MyDate";

export default ({ author }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div
            style={{ width: "40px", height: "40px", borderRadius: "100%" }}
            className="my_bg_light"
          ></div>
        </div>
        <div>
          <div className="my_font_size_md">{author}</div>
          <div className="my_font_size_sm">2.5 million followers</div>
        </div>
        <div>
          <Button size="sm" variant="dark">
            Follow
          </Button>
        </div>
      </div>
    </>
  );
};
