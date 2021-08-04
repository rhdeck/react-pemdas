import React, {
  Component,
  ComponentProps,
  createContext,
  ReactNode,
} from "react";
import Reconciler, { HostConfig } from "react-reconciler";
import Parentheses from "./Parentheses";
// import { wrapInParentheses } from "./Parentheses";
export interface Props {}
// export abstract class RNComponent {
//   static tagName: string;
//   abstract setProps(newProps: RNProps, oldProps: RNProps): void;
//   abstract appendInitialChild(child: Component): void;
//   abstract appendChild(child: Component): void;
//   abstract insertBefore(child: Component, beforeChild: Component): void;
//   abstract removeChild(child: Component): void;
// }
const config: HostConfig<
  number,
  Props,
  number[],
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  number
> = {
  supportsHydration: false,
  supportsMutation: false,
  supportsPersistence: true,
  appendInitialChild: (parent, child) => {},
  cancelTimeout: clearTimeout,
  createInstance: (type, props, rootContainer, hostContext, internalHandle) => {
    // throw new Error("createInstance not defined");
  },
  noTimeout: -1,
  createTextInstance: (text, rootContainer, hostContext, internalHandler) => {
    throw new Error("createTextInstance not defined");
  },
  finalizeInitialChildren: (
    instance,
    type,
    props,
    rootContainer,
    hostContext
  ) => {
    return true;
  },
  getChildHostContext: (parentHostContext, type, rootContainer) => {
    return undefined;
  },
  getPublicInstance: (instance) => {
    return undefined;
  },
  getRootHostContext: (rootContainer) => {
    return undefined;
  },
  isPrimaryRenderer: true,
  now: () => performance.now(),
  prepareForCommit: (containerInfo) => {
    return null;
  },
  preparePortalMount: (containerInfo) => {
    return null;
  },
  prepareUpdate: (containerInfo) => {
    return true;
  },
  queueMicrotask: (fn) => queueMicrotask(fn),
  resetAfterCommit: (containerInfo) => {},
  scheduleTimeout: setTimeout,
  shouldSetTextContent: (type, props) => {
    return false;
  },
  createContainerChildSet: () => {},
  finalizeContainerChildren: () => {},
  replaceContainerChildren: () => {},
  appendChildToContainerChildSet: () => {},
  commitMount: () => {},
};
const reconciler = Reconciler(config);
const containerInfo: number[] = [];
const rootTag: Reconciler.RootTag = 0;

export const render = (element: ReactNode) => {
  const rootContainer = reconciler.createContainer(
    containerInfo,
    rootTag,
    false,
    null
  ); // Creates root fiber node.
  let container: Record<string, any> = {};
  const onChange = (newValue: number) => {
    container.output = newValue;
  };
  reconciler.updateContainer(
    React.createElement(
      Parentheses,
      {
        startingValue: 0,
        onChange,
      },
      element
    ),
    rootContainer,
    null,
    () => undefined
  );
  setTimeout(() => {
    console.log("Done");
  }, 5000);
  return container;
};
