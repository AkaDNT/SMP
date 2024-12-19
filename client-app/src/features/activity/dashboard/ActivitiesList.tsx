import {
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemMeta,
  Label,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props {
  activities: Activity[];
  ViewSelectActivity: (id: string) => void;
}

export default function ActivitiesList({
  activities,
  ViewSelectActivity,
}: Props) {
  return (
    <Segment>
      <ItemGroup divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <ItemMeta>{activity.date}</ItemMeta>
              <ItemDescription>
                {activity.description}
                <br></br>
                {activity.city}
              </ItemDescription>
              <ItemExtra>
                <Label>{activity.category}</Label>
                <Button
                  onClick={() => ViewSelectActivity(activity.id)}
                  floated="right"
                  color="facebook"
                >
                  View
                </Button>
              </ItemExtra>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Segment>
  );
}
