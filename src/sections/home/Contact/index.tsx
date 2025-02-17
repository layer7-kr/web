import SectionTitle from '@/components/SectionTitle';
import { getJSON } from '@/lib/json';
import { JSONContactInfoData } from '@/types/json';
import ContactInfoItem from './ContactInfoItem';
import * as s from './style.css';

export default async function HomeContactSection() {
  const ContactInfo = await getJSON<JSONContactInfoData[]>('_contact.json');

  const TitleSize = {
    750: 24,
    default: 28,
  };

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
