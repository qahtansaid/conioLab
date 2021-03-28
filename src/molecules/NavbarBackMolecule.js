import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { IoChevronBackSharp, IoEllipsisVerticalSharp } from "react-icons/io5";
import { useHistory } from "react-router";

export default ({ path }) => {
  const history = useHistory();
  return (
    <>
      <Navbar
        expand="lg"
        className="d-flex justify-content-between border-bottom"
      >
        <IoChevronBackSharp
          style={{ width: "25px", height: "25px" }}
          onClick={() => {
            history.goBack();
          }}
        />
        <div className="my_font_size_md">Detail News</div>
        <IoEllipsisVerticalSharp style={{ width: "25px", height: "25px" }} />
      </Navbar>
    </>
  );
};
