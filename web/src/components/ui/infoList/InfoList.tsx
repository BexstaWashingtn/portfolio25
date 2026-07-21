import Inner from "@/components/utils/Inner";
import type { InfoList, LegalPageContentItems } from "./InfoList.type";
import styles from "./infoList.module.css";
import Image from "next/image";
import { ReactElement } from "react";
import { BackgroundGradientWrapper } from "@/components/layout/BackgroundGradientWrapper";
import { BackgroundImageWrapper } from "@/components/layout/BackgroundImageWrapper";

type Props = {
  children?: ReactElement;
  data: InfoList;
};

export default function InfoList({ children, data }: Props) {
  const content = (
    <>
      <Inner paddingBottom='xl' paddingTop='xl' variant='narrow'>
        {data.Items.map((item, index) => {
          const { icon, title } = item;

          return (
            <div key={index} className={styles.item}>
              {icon?.src && (
                <div className={styles.icon}>
                  <Image
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    title={icon.title}
                    alt={icon.alt}
                  />
                </div>
              )}
              <div className={styles.content}>
                {title && <h2 className={styles.headline}>{title}</h2>}
                {renderContentByType(item)}
              </div>
            </div>
          );
        })}
      </Inner>
      {children}
    </>
  );

  return data?.backgroundImage?.src ? (
    <section className={styles.infoList}>
      <BackgroundGradientWrapper
        gradient={{
          type: "radial",
          shape: "circle",
          startX: "35%",
          startY: "100%",
          colorStops: [
            { color: "rgba(45, 26, 24, .9)", position: "0%" },
            { color: "rgba(11, 0, 0, .9)", position: "100%" },
          ],
        }}
      >
        <BackgroundImageWrapper
          image={{
            src: data.backgroundImage.src,
            width: data.backgroundImage.width,
            alt: data.backgroundImage.alt,
          }}
          blur={20}
        >
          {content}
        </BackgroundImageWrapper>
      </BackgroundGradientWrapper>
    </section>
  ) : (
    <section className={styles.infoList}>{content}</section>
  );
}

function renderContentByType(item: LegalPageContentItems) {
  switch (item.contentType) {
    case "text":
      return <div className={styles.text}>{item.text}</div>;

    case "ownerContact":
      return (
        <dl className={styles.dataList}>
          <ContentRow
            label='Telefon'
            value={item.phone}
            href={
              item.phone
                ? `tel:${item.phone.replace(/[^\d+]/g, "")}`
                : undefined
            }
          />
          <ContentRow
            label='E-Mail'
            value={item.email}
            href={item.email ? `mailto:${item.email}` : undefined}
          />
        </dl>
      );

    case "ownerAddress":
      return (
        <dl className={styles.dataList}>
          <ContentRow label='Name' value={item.name} />
          <ContentRow label='Straße' value={item.street} />
          <ContentRow
            label='Ort'
            value={[item.postalCode, item.city].filter(Boolean).join(" ")}
          />
          <ContentRow label='Land' value={item.country} />
        </dl>
      );

    default:
      return null;
  }
}

type ContentRowProps = {
  label: string;
  value?: string;
  href?: string;
};

function ContentRow({ label, value, href }: ContentRowProps) {
  if (!value) {
    return null;
  }

  return (
    <div className={styles.dataRow}>
      <dt className={styles.label}>{label}:</dt>
      <dd className={styles.text}>
        {href ? <a href={href}>{value}</a> : value}
      </dd>
    </div>
  );
}
