import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";
import ContactInfoItem from "./ContactInfoItem";
import { JSONContactInfoData } from "@/types/json";
import { getJSON } from "@/lib/json";
import SectionTitle from "@/components/SectionTitle";

export default async function HomeContactSection() {
  const ContactInfo = await getJSON<JSONContactInfoData[]>("_contact.json");

  const TitleSize = {
    750: 24,
    default: 28,
  }

  return (
    <section className={s.base}>
      <SectionTitle>연락하기</SectionTitle>
      <div className={s.contactList}>
        {Object.entries(ContactInfo).map(([key, value]) => (
          <ContactInfoItem key={key} {...value} />
        ))}
      </div>
    </section>
  );
}
