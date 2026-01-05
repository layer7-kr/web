import { getJSON } from '@/lib/json';
import { JSONActivityData } from '@/types/json';
import ActivityItem from './ActivityItem';

export default async function ActivityItemList() {
  const activities = await getJSON<JSONActivityData[]>('_activity.json');

  const activityList = activities.map(
    (activity: JSONActivityData, index: number) => {
      const isLast = index === activities.length - 1;
      const isOddLast = activities.length % 2 === 1 && isLast;
      
      return (
        <ActivityItem
          key={index}
          imageName={activity.imageName}
          name={activity.name}
          description={activity.description}
          buttons={activity.buttons}
          isWide={isOddLast}
        />
      );
    },
  );

  return activityList;
}
