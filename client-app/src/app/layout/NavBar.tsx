import { Button, Container, Menu } from "semantic-ui-react";
import Logo from "./Logo";

interface Props {
  HandleOpenForm: () => void;
  CancleSelectActivity: () => void;
}

export default function NavBar({
  HandleOpenForm,
  CancleSelectActivity,
}: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item>
          <Logo></Logo>
        </Menu.Item>
        <Menu.Item>Activities</Menu.Item>
        <Menu.Item>
          <Button
            color="green"
            onClick={() => {
              HandleOpenForm();
              CancleSelectActivity();
            }}
          >
            Create Activity
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
