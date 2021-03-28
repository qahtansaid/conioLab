import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import {
  IoBookmarkOutline,
  IoHomeOutline,
  IoSearchOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useHistory } from "react-router";

export default ({ path }) => {
  const history = useHistory();
  return (
    <>
      <Navbar
        expand="lg"
        className="d-flex justify-content-between border-bottom"
      >
        <Navbar.Brand href="/" className="d-flex">
          <div className="text-dark">Article</div>
          <div className="ml-1 my_text_light">mind</div>
        </Navbar.Brand>
        <div
          style={{ width: 35, height: 35, borderRadius: "100%" }}
          className="my_bg_light"
        ></div>
      </Navbar>
      <Navbar
        fixed="bottom"
        expand="lg"
        className="bg-light d-flex justify-content-around align-items-center"
      >
        <IoHomeOutline
          style={
            path === "/"
              ? { width: "25px", height: "25px" }
              : { width: "20px", height: "20px", color: "#d6d6d6" }
          }
          className="m-3"
          onClick={() => {
            history.push("/");
          }}
        />
        <IoSearchOutline
          style={
            path === "/category"
              ? { width: "25px", height: "25px" }
              : { width: "20px", height: "20px", color: "#d6d6d6" }
          }
          className="m-3"
          onClick={() => {
            history.push("/category");
          }}
        />
        <IoBookmarkOutline
          style={
            path === "/bookmark"
              ? { width: "25px", height: "25px" }
              : { width: "20px", height: "20px", color: "#d6d6d6" }
          }
          className="m-3"
        />
        <IoSettingsOutline
          style={
            path === "/settings"
              ? { width: "25px", height: "25px" }
              : { width: "20px", height: "20px", color: "#d6d6d6" }
          }
          className="m-3"
        />
      </Navbar>
    </>
  );
};
