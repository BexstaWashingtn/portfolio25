import HeroLockOverlay from "@/components/sections/hero/HeroOverlay";
import Hero from "@/components/sections/hero/Hero";

export default function Locked() {
  return (
    <Hero data={"est"}>
      <HeroLockOverlay
        icon='locked'
        text='Die Seite ist für unautorisierte Zugriffe gesperrt.'
      />
    </Hero>
  );
}
