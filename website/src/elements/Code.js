import { styled, Code } from "reakit";

export default styled(Code)`
  font-family: "Fira Code", monospace;
  font-size: 14px;
  white-space: pre;
  overflow: auto;

  code {
    font-family: inherit;
  }
`;
