import Link from "next/link";
import Image from "next/image";

type Props = {
  onClick?: () => void;
  linkDisabled?: boolean;
  width?: number;
  height?: number;
};

export default function Logo({
  onClick,
  linkDisabled = false,
  width = 50,
  height = 50,
}: Props) {
  if (linkDisabled) {
    return (
      <Image
        src='/img/logo/logo_beige_shadow.png'
        alt='Logo - Eine Mann sitzt in einem Fensterrahmen und schaut in den Himmel'
        title='Logo Thomas Badrow'
        width={width}
        height={height}
      />
    );
  }

  return (
    <Link
      href='/'
      aria-current='page'
      onClick={(e) => {
        // Prevent default link behavior
        e.preventDefault();

        onClick?.();

        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
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
