"use client";

import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({ children, type = "button" }: Props) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
