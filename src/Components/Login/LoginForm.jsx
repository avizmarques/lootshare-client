import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormInput,
  FormGroup,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function LoginForm(props) {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardBody>
        <CardTitle>Login</CardTitle>
        <Form onSubmit={props.onSubmit}>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput
              id="#username"
              name="username"
              placeholder="Username"
              value={props.values.userName}
              onChange={(e) => props.onChange(e)}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput
              id="#password"
              type="password"
              name="password"
              placeholder="password"
              value={props.values.password}
              onChange={(e) => props.onChange(e)}
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
        <div>Not a member yet?</div>
        <div className="link">
          <Link to="/signup">Create an account ></Link>
        </div>
      </CardBody>
    </Card>
  );
}
