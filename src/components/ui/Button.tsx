"use client";

import styles from "./button.module.css";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button className={styles.button} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
