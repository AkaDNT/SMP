import { Activity } from "../../../app/models/Activity";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivitiesList from "./ActivitiesList";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "./ActivityForm";

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <>
      <Grid celled columns={"equal"}>
        <GridColumn width={10}>
          <ActivitiesList activities={activities}></ActivitiesList>
        </GridColumn>
        <GridColumn width={6}>
          {activities[0] && (
            <ActivityDetails activity={activities[0]}></ActivityDetails>
          )}
          <ActivityForm></ActivityForm>
        </GridColumn>
      </Grid>
    </>
  );
}
