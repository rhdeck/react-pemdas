#!/usr/bin/env node
import commander from "commander";
import { render } from ".";
import React, { FC, Fragment } from "react";

const Test: FC<{ index: string }> = ({ index, children }) => {
  console.log("hello!!!!" + index);
  return <Fragment>{children}</Fragment>;
};

render(
  <Test index="A">
    <Test index="B">
      <Test index="D" />
    </Test>
    <Test index="C" />
  </Test>
);

commander.parse(process.argv);
export { commander };
