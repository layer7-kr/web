import { promises as fs } from "fs";
import path from "path";
import ActivityItem from "./ActivityItem";
import { JSONActivityData } from "@/types/json";
import { getJSON } from "@/lib/json";

export default async function ActivityItemList() {
  const activities = await getJSON<JSONActivityData[]>('_activity.json');

  const activityList = activities.map(
    (activity: JSONActivityData, index: number) => (
      <ActivityItem
        key={index}
        imageName={activity.imageName}
        name={activity.name}
      />
    )
  );

  return activityList;
}
