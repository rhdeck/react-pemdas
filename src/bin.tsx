#!/usr/bin/env node
import commander from "commander";
import { render } from ".";
import React, { FC, Fragment, useEffect, useState } from "react";

const Test: FC<{ index: string; setter?: (newValue: string) => void }> = ({
  index,
  children,
  setter,
}) => {
  const [thing, setThing] = useState(index);
  useEffect(() => {
    console.log("running useEffect", thing);
    if (setter) setter(thing);
  }, [thing]);
  console.log("hello!!!!" + thing);
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
