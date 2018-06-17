import { styled, Button } from "reakit";
import { prop } from "styled-tools";

const ButtonTransparent = styled(Button)`
  background-color: transparent;
  color: ${prop("theme.black")};
  border: none;
`;

export default ButtonTransparent;
