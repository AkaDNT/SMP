import "./style.css";
import { useState, useEffect } from "react";
import { Activity } from "../models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import { Container } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import agent from "../../api/agent";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [openForm, setOpenForm] = useState(false);
  useEffect(() => {
    agent.Activities.list().then((response) => setActivities(response));
  }, []);
  function ViewSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }
  function CancleSelectActivity() {
    setSelectedActivity(undefined);
  }
  function HandleOpenForm() {
    setOpenForm(true);
  }
  function HandleCloseForm() {
    setOpenForm(false);
  }
  function SubmitForm(activity: Activity) {
    if (!activity.id) {
      activity.id = uuid();
      setActivities([...activities, activity]);
    } else {
      const newActivities = activities.filter((act) => act.id != activity.id);
      setActivities([...newActivities, activity]);
    }
  }
  return (
    <>
      <NavBar
        CancleSelectActivity={CancleSelectActivity}
        HandleOpenForm={HandleOpenForm}
      ></NavBar>
      <Container className="activities">
        <ActivityDashboard
          selectedActivity={selectedActivity}
          ViewSelectActivity={ViewSelectActivity}
          activities={activities}
          CancleSelectActivity={CancleSelectActivity}
          openForm={openForm}
          HandleCloseForm={HandleCloseForm}
          HandleOpenForm={HandleOpenForm}
          SubmitForm={SubmitForm}
        ></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;
