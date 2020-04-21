/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const color = "white";

const Test: React.FC<{}> = props => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    />
  );
};

export default Test;
