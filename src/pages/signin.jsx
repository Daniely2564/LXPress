import React from "react";
import { Form, Icon, Header } from "semantic-ui-react";
import { SignInWrapper } from "../styles/signin";

const Signin = () => {
  return (
    <SignInWrapper>
      <div className="sign-in-box">
        <Header as="h2" textAlign="center">
          <Icon name="angle double right" fitted /> LXPress
        </Header>
        <Form>
          <Form.Field>
            <label>Email</label>
            <Form.Input type="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input type="password" />
          </Form.Field>
          <Form.Button fluid color="blue">
            Sign In
          </Form.Button>
        </Form>
      </div>
    </SignInWrapper>
  );
};

export default Signin;
