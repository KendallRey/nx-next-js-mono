import React, { useMemo } from "react";
import MuiTypography from "../typography/Typograph";

type IHighlightText = {
  text: string;
  subString?: string | null;
};

type IText = {
  type: "normal" | "bold";
  value: string;
};

const HighlightText: React.FC<IHighlightText> = (props) => {
  const { text, subString } = props;

  const textStrings = useMemo((): IText[] => {
    if (!subString || !text) return [{ type: "normal", value: text }];
    const strings: IText[] = [];
    const _text = text.toLowerCase();
    const _subString = subString.toLowerCase();
    const hasTheValue = _text.indexOf(_subString);
    if (hasTheValue === -1) return [{ type: "normal", value: text }];

    const subStrings = _text.split(_subString);
    const isHighlightFirst = hasTheValue === 0;
    if (isHighlightFirst) {
      subStrings.shift();
    }
    let lastRealSubIndex = 0;
    let lastRealIndex = 0;
    const subStringOffset = Math.max(subString.length, 1);
    subStrings.forEach((sub) => {
      const realSubIndex = _text.indexOf(sub, lastRealSubIndex);
      lastRealSubIndex = realSubIndex;
      const realSub = text.substring(realSubIndex, realSubIndex + sub.length);

      const realIndex = _text.indexOf(_subString, lastRealIndex);
      lastRealIndex = realIndex + subStringOffset;
      const real = text.substring(realIndex, realIndex + subString.length);
      if (isHighlightFirst) {
        strings.push({
          type: "bold",
          value: real,
        });
        if (sub !== "") {
          strings.push({
            type: "normal",
            value: realSub,
          });
        }
      } else {
        strings.push({
          type: "normal",
          value: realSub,
        });
        strings.push({
          type: "bold",
          value: real,
        });
      }
    });
    const formattedText = strings.map((str) => str.value).join("");

    if (formattedText.length > text.length) strings.pop();

    return strings;
  }, [text, subString]);

  return (
    <>
      {textStrings.map((item, i) => {
        if (item.type === "bold") {
          return (
            <MuiTypography key={`${item.value}-${i}`} color="secondary" component={"strong"} fontWeight={700}>
              {item.value}
            </MuiTypography>
          );
        }
        return (
          <MuiTypography key={`${item.value}-${i}`} component={"span"}>
            {item.value}
          </MuiTypography>
        );
      })}
    </>
  );
};

export default HighlightText;
