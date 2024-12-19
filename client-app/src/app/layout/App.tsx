import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Activity } from "../models/Activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activity/dashboard/ActivityDashboard";
import { Container } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <Container className="activities">
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;
