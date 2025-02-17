import { weight } from "@/styles/fonts/values/weight";
import Typo from "../Typo";

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  const TitleSize = {
    480: 24,
    default: 28,
  };

  return (
    <Typo as={"h2"} weight={weight.semibold} size={TitleSize}>
      {children}
    </Typo>
  );
}
