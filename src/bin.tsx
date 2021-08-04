#!/usr/bin/env node
import commander from "commander";
import { render } from ".";
import React, { FC, Fragment, useEffect, useState } from "react";
import Parentheses, { Add } from "./Parentheses";
const Test: FC<{ index: string; setter?: (newValue: string) => void }> = ({
  index,
  children,
  setter,
}) => {
  const [thing, setThing] = useState(index);
  useEffect(() => {
    console.log("running useEffect", thing);
    if (setter) {
      setTimeout(() => {
        console.log("Running setter", thing);
        setter(thing);
      }, 10000);
    }
  }, [thing]);
  console.log("hello!!!!" + thing);
  return <Fragment>{children}</Fragment>;
};

const Nest: FC<{ index: string }> = ({ index, children }) => {
  const [thing, setThing] = useState(index);
  console.log("hello nest!!!!" + thing);

  return (
    <Fragment>
      <Test index={index}>
        <Test index={"nested" + index} setter={setThing} />
      </Test>
      {children}
    </Fragment>
  );
};

(async () => {
  const output = await render(
    <Add addend={1} />
    // <Test index="A">
    //   <Test index="B">
    //     <Nest index="D" />
    //   </Test>
    //   <Test index="C" />
    // </Test>
  );
  console.log("Output at the end of everythign was", output);
})();

commander.parse(process.argv);
export { commander };
