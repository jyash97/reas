import { styled, Button } from "reakit";
import { prop } from "styled-tools";

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: ${prop("theme.black")};
  border-color: #ccc;
`;

export default ButtonSecondary;
