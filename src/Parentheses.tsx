import React, {
  createContext,
  ReactNode,
  FC,
  useEffect,
  useMemo,
  useContext,
  useState,
} from "react";
const parenthesesContext = createContext({
  setParenthesesValue: (argument: number) => {},
  parenthesesValue: 0,
});
const { Provider } = parenthesesContext;

export const Parentheses: FC<{
  onChange: (newValue: number) => void;
  startingValue?: number;
}> = ({ children, startingValue, onChange = (newValue: number) => {} }) => {
  const { setParenthesesValue: setParentValue, parenthesesValue: parentValue } =
    useParentheses();
  const [parenthesesValue, setParenthesesValue] = useState<number>(
    typeof startingValue !== "undefined" ? startingValue : parentValue
  );
  useEffect(() => {
    setParentValue(parenthesesValue);
    onChange(parenthesesValue);
  }, [parenthesesValue, setParentValue]);
  const value = useMemo(() => {
    console.log("Making me a new memo");
    const output = { parenthesesValue, setParenthesesValue };
    console.log("And it will be ", output);
    return output;
  }, [parenthesesValue, setParenthesesValue]);
  return <Provider value={value}>{children}</Provider>;
};

export function useParentheses() {
  const { setParenthesesValue, parenthesesValue } =
    useContext(parenthesesContext);
  return { setParenthesesValue, parenthesesValue };
}

// export function wrapInParentheses(
//   node: ReactNode,
//   onChange: Function = () => {}
// ) {
//   return <Parentheses onChange={onChange}>{node}</Parentheses>;
// }

export const Multiply: FC<{ factor: number }> = ({ factor, children }) => {
  const { parenthesesValue, setParenthesesValue } = useParentheses();
  const value = parenthesesValue * factor;
  setParenthesesValue(value);
  return null;
};

export const Exponent: FC<{ power: number }> = ({ power, children }) => {
  const { parenthesesValue, setParenthesesValue } = useParentheses();
  const value = parenthesesValue ** power;
  setParenthesesValue(value);
  return null;
};
export const Add: FC<{ addend: number }> = ({ addend }) => {
  const { parenthesesValue, setParenthesesValue } = useParentheses();
  const value = parenthesesValue + addend;
  setParenthesesValue(value);
  return null;
};
export const Subtract: FC<{ difference: number }> = ({ difference }) => {
  const { parenthesesValue, setParenthesesValue } = useParentheses();
  const value = parenthesesValue - difference;
  setParenthesesValue(value);
  return null;
};

export const Divide: FC<{ divisor: number }> = ({ divisor }) => {
  const { parenthesesValue, setParenthesesValue } = useParentheses();
  const value = parenthesesValue / divisor;
  setParenthesesValue(value);
  return null;
};
export default Parentheses;
