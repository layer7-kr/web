import { JSONActivityData } from '@/types/json';
import { promises as fs } from 'fs';
import path from 'path';

export type ActivityDataList = JSONActivityData[];

export async function getActivities(): Promise<ActivityDataList> {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public/data');
    const fileContents = await fs.readFile(jsonDirectory + '/_activity.json', 'utf8');
    return JSON.parse(fileContents) as ActivityDataList;
  } catch (error) {
    console.error('Error reading activities:', error);
    return [];
  }
}