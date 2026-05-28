"use client";

import { LogoDatas } from "@/types/navigation";
import Logo from "../../ui/Logo";

type Props = {
  isLogoVisible: boolean;
  style: string;
  logoDatas: LogoDatas;
};

export default function HeaderLogo({ isLogoVisible, style, logoDatas }: Props) {
  const { src, height, width, alt, title } = logoDatas.image;
  const anchor = logoDatas.id;

  return (
    <div className={style}>
      {isLogoVisible && (
        <Logo
          src={src}
          width={width}
          height={height}
          alt={alt}
          title={title}
          anchor={anchor}
        />
      )}
    </div>
  );
}
