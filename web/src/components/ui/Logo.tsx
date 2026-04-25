import Link from "next/link";
import Image from "next/image";

type Props = {
  linkDisabled?: boolean;
  width?: number;
  height?: number;
};

export default function Logo({
  linkDisabled = false,
  width = 50,
  height = 50,
}: Props) {
  if (linkDisabled) {
    return (
      <Image
        src='/img/logo/logo_beige_shadow.png'
        alt='Logo - Eine Mann sitzt nachdenklich in einem Fensterrahmen und schaut in den Himmel'
        title='Logo Thomas Badrow'
        width={width}
        height={height}
      />
    );
  }

  return (
    <Link href='/#hero' aria-current='page'>
      <Image
        src='/img/logo/logo_beige_shadow.png'
        alt='Logo - Eine Mann sitzt in einem Fensterrahmen und schaut in den Himmel'
        title='Logo Thomas Badrow'
        width={width}
        height={height}
      />
    </Link>
  );
}
