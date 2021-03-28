import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import SearchAtom from "../atoms/SearchAtom";
import NavbarMolecule from "../molecules/NavbarMolecule";
import CardRight from "../molecules/CardRight";
import CardBottom from "../molecules/CardBottom";
import { search } from "../redux/actions/NewsAction";
import { useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
export default ({ match }) => {
  let dispatch = useDispatch();
  const history = useHistory();

  const { latest_news, popular_news } = useSelector(
    (state) => state.ListOfNews
  );
  const [key, setSearch] = useState("");
  useEffect(() => {
    dispatch(
      search({
        key: key,
        sortBy: "publishedAt",
        pageSize: 2,
      })
    );
    dispatch(
      search({
        key: key,
        sortBy: "popularity",
        pageSize: 10,
      })
    );
  }, [key]);
  return (
    <>
      <NavbarMolecule path={match.path} />
      <Container className="mt-3" style={{ paddingBottom: "100px" }}>
        <SearchAtom setSearch={setSearch} search={key} />
        <div>
          <div className="my_font_size_md">Latest News</div>
          {latest_news.isLoading
            ? [1, 2].map((item) => {
                return (
                  <Card
                    key={"lat_" + item}
                    style={{ height: "100px" }}
                    className="mt-3 p-3 d-flex justify-content-center align-items-center"
                  >
                    <Spinner animation="border" className="mx-auto"></Spinner>
                  </Card>
                );
              })
            : latest_news.data.map((item, index) => {
                return (
                  <Col
                    key={"latest" + index}
                    onClick={() => {
                      history.push({
                        pathname: "/detail",
                        state: {
                          data: item,
                        },
                      });
                    }}
                  >
                    <CardRight
                      title={item.title}
                      date={item.publishedAt}
                      image={item.urlToImage}
                    />
                  </Col>
                );
              })}
        </div>
        <div>
          <div className="my_font_size_md">Popular News</div>
          <Row className="flex-row flex-nowrap overflow-auto">
            {popular_news.isLoading
              ? [1, 2, 3, 4].map((item) => {
                  return (
                    <Col key={"pop_" + item}>
                      <Card
                        style={{ width: "220px", height: "250px" }}
                        className="mt-3 p-3  justify-content-center align-items-center"
                      >
                        <Spinner
                          animation="border"
                          className="mx-auto"
                        ></Spinner>
                      </Card>
                    </Col>
                  );
                })
              : popular_news.data.map((item, index) => {
                  return (
                    <Col
                      key={"popular" + index}
                      onClick={() => {
                        history.push({
                          pathname: "/detail",
                          state: {
                            data: item,
                          },
                        });
                      }}
                    >
                      <CardBottom
                        title={item.title}
                        date={item.publishedAt}
                        image={item.urlToImage}
                      />
                    </Col>
                  );
                })}
          </Row>
        </div>
      </Container>
    </>
  );
};
