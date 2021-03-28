import React, { useState, useEffect, useRef } from "react";
import {
  FormControl,
  Row,
  Col,
  Button,
  Form,
  Card,
  Image,
} from "react-bootstrap";
import NavbarMolecule from "./NavbarMolecule";
import { IoOptionsOutline } from "react-icons/io5";
import MyDate from "../common/MyDate";
export default ({ title, date, image }) => {
  return (
    <>
      <Card className="mt-3 p-3" style={{ width: "220px", height: "250px" }}>
        <Row>
          <Col
            md="12"
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              className="mx-auto"
              style={{ maxHeight: "90px" }}
              fluid
              src={image}
              rounded
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "./image_not_found.svg";
              }}
            />
          </Col>
          <Col>
            <div className="my_font_size_md">{title}</div>
            <div className="my_font_size_sm">{MyDate(date)}</div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
