import { useEffect, useState } from "react";
import "./components.css";
import React from "react";
import ButtonLink from "./ButtonLink";

const Component = () => {
  return (
    <nav>
      <ButtonLink to="/">Home</ButtonLink>

      <ButtonLink to="/TodoApp">Todo App</ButtonLink>

      <ButtonLink to="/RandomCatFact">Random Cat Facts</ButtonLink>

      <ButtonLink to='/AgePredictor'>Age Predictor</ButtonLink>

      <ButtonLink to='/ExcuseGenerator'>Excuse Generator</ButtonLink>
    </nav>
  );
};

export default Component;
