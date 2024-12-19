import { Activity } from "../../../app/models/Activity";
import { Grid, GridColumn } from "semantic-ui-react";
import ActivitiesList from "./ActivitiesList";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "./ActivityForm";

interface Props {
  activities: Activity[];
  ViewSelectActivity: (id: string) => void;
  selectedActivity: Activity | undefined;
  CancleSelectActivity: () => void;
}

export default function ActivityDashboard({
  activities,
  ViewSelectActivity,
  selectedActivity,
  CancleSelectActivity,
}: Props) {
  return (
    <>
      <Grid celled columns={"equal"}>
        <GridColumn width={10}>
          <ActivitiesList
            ViewSelectActivity={ViewSelectActivity}
            activities={activities}
          ></ActivitiesList>
        </GridColumn>
        <GridColumn width={6}>
          {selectedActivity && (
            <ActivityDetails
              CancleSelectActivity={CancleSelectActivity}
              activity={selectedActivity}
            ></ActivityDetails>
          )}
          <ActivityForm></ActivityForm>
        </GridColumn>
      </Grid>
    </>
  );
}
