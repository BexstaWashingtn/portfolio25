"use client";

import Logo from "../../ui/Logo";

type Props = {
  isLogoVisible: boolean;
  style: string;
};

export default function HeaderLogo({ isLogoVisible, style }: Props) {
  return (
    <div className={style}>
      {isLogoVisible && <Logo width={50} height={73} />}
    </div>
  );
}
