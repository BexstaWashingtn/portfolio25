"use client";

import { useEffect, useState } from "react";
import Logo from "../ui/Logo";

type Props = { style: string };

export default function HeaderLogo({ style }: Props) {
  // isVisible state determines if the button should be displayed or not.
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const firstSectionWithId = document.querySelector("section[id='hero']");

    if (!firstSectionWithId) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      },
    );

    observer.observe(firstSectionWithId);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style}>{isVisible && <Logo width={50} height={73} />}</div>
  );
}
