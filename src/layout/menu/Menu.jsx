import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./Menu.css";
import { withRouter } from "react-router-dom";

const TopMenu = ({ history, location }) => {
  const [activeItem, setActiveItem] = useState("");
  const onItemClick = (url) => () => {
    history.push(url);
  };
  return (
    <Menu stackable style={{ margin: 0 }}>
      <Menu.Item onClick={onItemClick("/")}>
        <Icon name="angle double right" /> <b>LXPress</b>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="sign-up"
          active={location.pathname === "/signup"}
          onClick={onItemClick("/signup")}
        >
          Sign Up
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={location.pathname === "/signin"}
          onClick={onItemClick("/signin")}
        >
          Sign In
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(TopMenu);
