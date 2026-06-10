"use client";

import CustomSwiper from "@/components/ui/customSwiper/CustomSwiper";
import styles from "./workingMethod.module.css";
import WorkingMethodItem from "./WorkingMethodItem";
import Inner from "@components/utils/Inner";
import useIsMobile from "@hooks/useIsMobile";
import Stack from "@/components/utils/Stack";
import { WorkingMethodSection } from "@/types/StartpageData";
import StyledHeadline from "@/components/ui/StyledHeadline/StyledHeadline";

type Props = {
  data: WorkingMethodSection;
};

export default function SectionWorkingMethod({ data }: Props) {
  const isMobile = useIsMobile();

  return (
    <section className={styles.workingMethod} id={data.settings.id}>
      <Inner
        variant='full'
        paddingTop='xxl'
        paddingBottom='xxl'
        className={styles.fourPointLimit}
      >
        <Stack gap={{ base: "lg", md: "md", sm: "sm" }}>
          {data.header.headline && (
            <h3 className={styles.h3}>
              <StyledHeadline text={data.header.headline}></StyledHeadline>
            </h3>
          )}
          <Inner variant='full' paddingTop='md' paddingInline={false}>
            {isMobile ? (
              // only render Swiper on < 768 phone devices

              <CustomSwiper
                items={data.content.items}
                renderItem={(item) => (
                  <WorkingMethodItem key={item.id} item={item} />
                )}
                swiperConfig={{
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 16,
                  breakpoints: {
                    0: {
                      slidesPerView: 1.5,
                      slidesPerGroup: 1,
                      spaceBetween: 48,
                    },
                    786: { slidesPerView: 2, slidesPerGroup: 2 },
                  },
                }}
              />
            ) : (
              // render list on tablet and desktop
              <ul className={styles.workMethodList}>
                {data.content.items.map((item) => (
                  <WorkingMethodItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </Inner>
        </Stack>
      </Inner>
    </section>
  );
}
