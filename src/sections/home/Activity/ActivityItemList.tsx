import { getJSON } from '@/lib/json';
import { JSONActivityData } from '@/types/json';
import ActivityItem from './ActivityItem';

export default async function ActivityItemList() {
  const activities = await getJSON<JSONActivityData[]>('_activity.json');

  const activityList = activities.map(
    (activity: JSONActivityData, index: number) => (
      <ActivityItem
        key={index}
        imageName={activity.imageName}
        name={activity.name}
      />
    ),
  );

  return activityList;
}
