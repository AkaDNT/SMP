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
  openForm: boolean;
  HandleCloseForm: () => void;
  HandleOpenForm: () => void;
  SubmitForm: (activity: Activity) => void;
}

export default function ActivityDashboard({
  activities,
  ViewSelectActivity,
  selectedActivity,
  CancleSelectActivity,
  openForm,
  HandleCloseForm,
  HandleOpenForm,
  SubmitForm,
}: Props) {
  return (
    <>
      <Grid columns={"equal"}>
        <GridColumn width={10}>
          <ActivitiesList
            ViewSelectActivity={ViewSelectActivity}
            activities={activities}
            HandleCloseForm={HandleCloseForm}
          ></ActivitiesList>
        </GridColumn>
        <GridColumn width={6}>
          {selectedActivity && (
            <ActivityDetails
              CancleSelectActivity={CancleSelectActivity}
              activity={selectedActivity}
              HandleCloseForm={HandleCloseForm}
              HandleOpenForm={HandleOpenForm}
            ></ActivityDetails>
          )}
          {openForm && (
            <ActivityForm
              selectedActivity={selectedActivity}
              HandleCloseForm={HandleCloseForm}
              SubmitForm={SubmitForm}
            ></ActivityForm>
          )}
        </GridColumn>
      </Grid>
    </>
  );
}
