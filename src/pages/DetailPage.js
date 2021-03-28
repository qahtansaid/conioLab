import React, { useState, useEffect, useRef } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import NavbarBackMolecule from "../molecules/NavbarBackMolecule";
import MyDate from "../common/MyDate";
import AuthorMolecule from "../molecules/AuthorMolecule";

export default ({ match, location }) => {
  let {
    author,
    content,
    description,
    title,
    urlToImage,
    publishedAt,
    url,
  } = location.state.data;
  return (
    <>
      <NavbarBackMolecule />
      <Container>
        <AuthorMolecule author={author} />
        <div className="my_font_size_lg">{title}</div>
        <div className="my_font_size_md">{MyDate(publishedAt)}</div>
        <div className="my_font_size_sm">{description}</div>
        <div className="mx-auto d-flex justify-content-center">
          <Image
            fluid
            src={urlToImage}
            style={{ maxHeight: "200px" }}
            className="mx-auto"
            rounded
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "./image_not_found.svg";
            }}
          />
        </div>
        <div className="my_font_size_sm">
          {content.replace(/\[(.*?)\]/, "")}
          <a href={url} target="__blank" className="text-dark">
            Read more
          </a>
        </div>
      </Container>
    </>
  );
};
