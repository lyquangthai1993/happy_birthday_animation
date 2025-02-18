import SplashCursor from "@/components/Animations/SplashCursor/SplashCursor";
import ShinyText from "@/components/ShinyText/ShinyText";
import TextPressure from "@/components/TextAnimations/TextPressure/TextPressure";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <ShinyText
          text="Cửu Ca"
          disabled={false}
          speed={3}
          className="text-2xl"
        />
      </div>

      <TextPressure text="DINH TRAN" />

      <SplashCursor />
    </div>
  );
}
