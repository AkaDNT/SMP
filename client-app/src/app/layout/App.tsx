import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Activity } from "../models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import { Container } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  function ViewSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }
  function CancleSelectActivity() {
    setSelectedActivity(undefined);
  }
  return (
    <>
      <NavBar></NavBar>
      <Container className="activities">
        <ActivityDashboard
          selectedActivity={selectedActivity}
          ViewSelectActivity={ViewSelectActivity}
          activities={activities}
          CancleSelectActivity={CancleSelectActivity}
        ></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;
