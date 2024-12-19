import { Button, Form, FormField, Segment } from "semantic-ui-react";

export default function ActivityForm() {
  return (
    <Segment clearing>
      <Form>
        <FormField>
          <input placeholder="Title" />
        </FormField>
        <FormField>
          <input placeholder="Date" />
        </FormField>
        <FormField>
          <input placeholder="Description" />
        </FormField>
        <FormField>
          <input placeholder="Category" />
        </FormField>
        <FormField>
          <input placeholder="City" />
        </FormField>
        <FormField>
          <input placeholder="Venue" />
        </FormField>
        <Button color="green" floated="right" type="submit">
          Submit
        </Button>
        <Button color="youtube" floated="right" type="submit">
          Cancle
        </Button>
      </Form>
    </Segment>
  );
}
