import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Grid,
  GridColumn,
  Image,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activity: Activity | undefined;
  CancleSelectActivity: () => void;
}

export default function ActivityDetails({
  activity,
  CancleSelectActivity,
}: Props) {
  if (!activity) return;
  return (
    <Segment>
      <Card fluid>
        <Image
          src={`/assets/categoryImages/${activity.category}.jpg`}
          wrapped
          ui={false}
          fluid
        />
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span className="date">{activity.date}</span>
          </CardMeta>
          <CardDescription>{activity.description}</CardDescription>
        </CardContent>
        <CardContent extra>
          <a>
            <Grid columns={2} divided>
              <GridColumn textAlign="center">
                <Button fluid color="facebook">
                  Edit
                </Button>
              </GridColumn>
              <GridColumn textAlign="center">
                <Button onClick={CancleSelectActivity} fluid color="facebook">
                  Cancle
                </Button>
              </GridColumn>
            </Grid>
          </a>
        </CardContent>
      </Card>
    </Segment>
  );
}
