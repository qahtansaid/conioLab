import React, { useState, useEffect, useRef } from "react";
import { FormControl, Row, Col, Button, Form } from "react-bootstrap";
import NavbarMolecule from "../molecules/NavbarMolecule";
import { IoOptionsOutline } from "react-icons/io5";
export default ({ search, setSearch }) => {
  const [state, setstate] = useState(search);
  return (
    <>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              placeholder="Search news"
              defaultValue={state}
              onChange={(e) => {
                setstate(e.target.value);
              }}
            />
          </Col>
          <Col
            xs="2"
            md="1"
            className="d-flex justify-content-center align-items-center"
          >
            <Button
              variant="dark"
              onClick={() => {
                setSearch(state);
              }}
            >
              <IoOptionsOutline />
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};
