"use client";

import { LogoData } from "@/types/MainNavigation";
import Logo from "../../ui/Logo";

type Props = {
  isLogoVisible: boolean;
  style: string;
  logoData: LogoData;
};

export default function HeaderLogo({ isLogoVisible, style, logoData }: Props) {
  const { src, height, width, alt, title } = logoData.image;
  const anchor = logoData.id;

  return (
    <div className={style}>
      {isLogoVisible && (
        <Logo
          src={src}
          width={width}
          height={height}
          alt={alt}
          title={title}
          link={anchor}
        />
      )}
    </div>
  );
}
