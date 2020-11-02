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
          <Form.Group widths="equal">
            <Form.Field>
              <label>First Name</label>
              <Form.Input name="firstName" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <Form.Input name="lastName" />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Username</label>
            <Form.Input name="username" />
          </Form.Field>
          <Form.Field>
            <label>Email Address</label>
            <Form.Input type="email" name="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Form.Input type="password" name="password" />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password</label>
            <Form.Input type="password" name="confirmPassword" />
          </Form.Field>
          <Form.Button fluid color="red">
            Sign Up
          </Form.Button>
        </Form>
      </div>
    </SignInWrapper>
  );
};

export default Signin;
