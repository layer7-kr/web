import { getJSON } from "@/lib/json";
import { JSONCurriculumData } from "@/types/json";
import CurriculumListView from "./CurriculumListView";

export default async function CurriculumList() {
  const curriculums = await getJSON<JSONCurriculumData[]>("_curriculum.json");
  return <CurriculumListView curriculums={curriculums} />;
}
