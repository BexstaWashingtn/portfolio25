import { useEffect } from "react";

export default function useDocumentScrollLock(isLocked: boolean) {
  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.classList.toggle("overflow-hidden", isLocked);
    return () => htmlEl.classList.remove("overflow-hidden");
  }, [isLocked]);
}
