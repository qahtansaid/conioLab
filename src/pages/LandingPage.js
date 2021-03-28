import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HeadlineNews from "../molecules/HeadlineNews";
import NavbarMolecule from "../molecules/NavbarMolecule";
import { useHistory } from "react-router";

import { topHeadline } from "../redux/actions/NewsAction";
export default ({ match }) => {
  let dispatch = useDispatch();
  const history = useHistory();
  const { headline_news } = useSelector((state) => state.ListOfNews);
  useEffect(() => {
    dispatch(topHeadline());
  }, []);
  return (
    <>
      <NavbarMolecule path={match.path} />
      <Container style={{ paddingBottom: "100px" }}>
        {headline_news.isLoading ? (
          <div className="w-100 p-5 d-flex justify-content-center align-items-center">
            <Spinner animation="border" className="mx-auto"></Spinner>
          </div>
        ) : (
          <Row>
            {headline_news.data.map((item, index) => {
              return (
                <Col xs="12" md="12">
                  <HeadlineNews
                    key={"headline" + index}
                    title={item.title}
                    date={item.publishedAt}
                    content={item.content}
                    image={item.urlToImage}
                  />
                  <Button
                    size="sm"
                    variant="dark"
                    onClick={() => {
                      history.push({
                        pathname: "/detail",
                        state: {
                          data: item,
                        },
                      });
                    }}
                  >
                    Read Post
                  </Button>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};
