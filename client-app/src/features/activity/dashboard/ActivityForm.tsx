import { Button, Form, FormField, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import { ChangeEvent, useState } from "react";

interface Props {
  HandleCloseForm: () => void;
  selectedActivity: Activity | undefined;
  SubmitForm: (activity: Activity) => void;
}

const emptyActivity = {
  id: "",
  title: "",
  date: "",
  description: "",
  category: "",
  city: "",
  venue: "",
};

export default function ActivityForm({
  HandleCloseForm,
  selectedActivity,
  SubmitForm,
}: Props) {
  const [holderActivity, setHolderActivity] = useState(
    selectedActivity || emptyActivity
  );
  function ChangeEventHandler(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setHolderActivity({ ...holderActivity, [name]: value });
  }
  return (
    <Segment clearing>
      <Form
        onSubmit={() => {
          console.log(holderActivity);
          SubmitForm(holderActivity);
          HandleCloseForm();
        }}
      >
        <FormField>
          <input
            placeholder="Title"
            name="title"
            value={holderActivity.title}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Date"
            name="date"
            value={holderActivity.date}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Description"
            name="description"
            value={holderActivity.description}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Category"
            name="category"
            value={holderActivity.category}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <FormField>
          <input
            placeholder="City"
            name="city"
            value={holderActivity.city}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <FormField>
          <input
            placeholder="Venue"
            name="venue"
            value={holderActivity.venue}
            onChange={ChangeEventHandler}
          />
        </FormField>
        <Button color="green" floated="right" type="submit">
          Submit
        </Button>
        <Button onClick={HandleCloseForm} color="youtube" floated="right">
          Cancle
        </Button>
      </Form>
    </Segment>
  );
}
