import Typo from "@/components/Typo";
import { weight } from "@/styles/fonts/values/weight";
import Image from "next/image";
import Link from "next/link";
import Icon, { IconName } from "@/components/Icon";
import * as s from "./style.css";
import { JSONActivityData } from "@/types/json";

interface ActivityItemProps extends JSONActivityData {
  isWide?: boolean;
}

export default function ActivityItem({
  imageName,
  name,
  description,
  buttons,
  isWide = false,
}: ActivityItemProps) {
  return (
    <section className={isWide ? s.baseWide : s.base}>
      {isWide ? (
        <img
          src={`/assets/activity/${imageName}`}
          alt={name}
          className={s.backgroundImageWide}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      ) : (
        <Image
          src={`/assets/activity/${imageName}`}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={s.backgroundImage}
          loading="lazy"
          quality={70}
        />
      )}
      <div className={isWide ? s.overlayWide : s.overlay}>
        <div className={s.content}>
          <div className={isWide ? s.textContainerWide : s.textContainer}>
            <Typo as="h3" size={16} weight={weight.semibold} color="#fff">
              {name}
            </Typo>
            {description && (
              <Typo as="p" size={14} weight={weight.regular} color="rgba(255, 255, 255, 0.8)">
                {description}
              </Typo>
            )}
          </div>
          {buttons && buttons.length > 0 && (
            <div className={s.buttonContainer}>
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={s.button}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={button.type === 'blog' ? '블로그 보기' : '바로가기'}
                >
                  <Icon
                    name={button.type === 'blog' ? IconName.ARTICLE : IconName.OPEN_IN_NEW}
                    size={20}
                    color="#fff"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}