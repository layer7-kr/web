import Typo from "@/components/Typo";
import * as s from "./style.css";
import { weight } from "@/styles/fonts/values/weight";
import ContactInfoItem from "./ContactInfoItem";
import ContactInfo from "@/data/_contact.json";

export default function HomeContactSection() {
  return (
    <section className={s.base}>
      <Typo as="h2" size={28} weight={weight.semibold} color="#212E38">
        문의
      </Typo>
      <div className={s.contactList}>
        {Object.entries(ContactInfo).map(([key, value]) => (
          <ContactInfoItem key={key} {...value} />
        ))}
      </div>
    </section>
  );
}
