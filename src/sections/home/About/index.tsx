'use client';

import Typo from '@/components/Typo';
import { weight } from '@/styles/fonts/values/weight';
import { colorVars } from '@/styles/theme.css';
import { motion } from 'framer-motion';
import {
  AboutArticleDescription,
  AboutArticleTitle,
  AboutVisionTextBreakpoints,
} from './shared';
import * as s from './style.css';

export default function HomeAboutSection() {
  return (
    <section className={s.base} id={'about'} style={{ paddingTop: 80 }}>
      <div className={s.topSection}>
        <motion.article
          viewport={{ once: true }}
          className={s.visionSection}
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}>
          <div className={s.visionTitle}>
            <Typo
              size={AboutVisionTextBreakpoints.subject}
              weight={weight.medium}
              color={colorVars.normal}
              as='h2'>
              VISION
            </Typo>
            <Typo
              size={AboutVisionTextBreakpoints.title}
              weight={weight.semibold}
              color={colorVars.normal}
              as='h3'>
              열정, 책임감, 친근함
            </Typo>
          </div>
          <Typo
            size={AboutVisionTextBreakpoints.description}
            weight={weight.regular}
            color={colorVars._80}>
            공부 하고자 하는 열정, 보안인으로써의 책임감, <br />
            학교 선후배로써의 친근함은 동아리의 지향점입니다.
          </Typo>
        </motion.article>
        <motion.article
          viewport={{ once: true }}
          className={s.historySection}
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}>
          <AboutArticleTitle>HOW WE STARTED IT</AboutArticleTitle>
          <AboutArticleDescription textAlign='left'>
            Layer7은 선린인터넷고등학교가 서울시 최초 IT 특성화 고등학교로
            지정된 2001년 부터 학교와 함께해 왔습니다. 보안에 관심 있는
            학생들끼리 모여 동아리를 만들고, 해킹이라는 흔치 않은 분야에서
            서로가 서로를 도우며 보안을 공부해왔습니다. 체계적인 커리큘럼과
            동아리원들의 열정, 책임감은 24년이라는 역사를 뒷받침해왔습니다.
          </AboutArticleDescription>
        </motion.article>
      </div>
      <hr className={s.divider} />
      <motion.div
        className={s.nowSection}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{ once: true }}>
        <AboutArticleTitle>NOW</AboutArticleTitle>
        <AboutArticleDescription>
          세계 해커들의 올림픽이라는 <b>데프콘</b>, <b>WITHCON</b> 등 유명
          대회에서 수상하고,
          <b>국제 해킹 컨퍼런스 코드게이트</b> 등에서 준비한 프로젝트를 발표하며
          시스템, 웹, 임베디드에 아우른 분야에서 실적을 내고 있습니다.
        </AboutArticleDescription>
      </motion.div>
    </section>
  );
}
