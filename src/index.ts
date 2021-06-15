import React, { Component, ComponentProps, ReactNode } from "react";
import Reconciler, { HostConfig } from "react-reconciler";
export interface Props {}
export abstract class RNComponent {
  static tagName: string;
  abstract setProps(newProps: RNProps, oldProps: RNProps): void;
  abstract appendInitialChild(child: Component): void;
  abstract appendChild(child: Component): void;
  abstract insertBefore(child: Component, beforeChild: Component): void;
  abstract removeChild(child: Component): void;
}
const config: HostConfig<
  number,
  Props,
  number[],
  RNComponent,
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
    throw new Error("createInstance not defined");
  },
  noTimeout: -1,
  createTextInstance: (text, rootContainer, hostContext, internalHandler) => {
    throw new Error("createTextInstance not defined");
  },
};
const reconciler = Reconciler(config);
export const render = (element: ReactNode) => {
  const rootContainer = reconciler.createContainer(
    containerInfo,
    isConcurrent,
    false,
    null
  ); // Creates root fiber node.
  reconciler.updateContainer(element, rootContainer, null, () => undefined);
};
