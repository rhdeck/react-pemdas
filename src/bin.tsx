#!/usr/bin/env node
import commander from "commander";
import { render } from ".";
import React, { FC } from "react";

const Test: FC = () => {
  console.log("hello!!!!");
  return null;
};

render(<Test />);

commander.parse(process.argv);
export { commander };
