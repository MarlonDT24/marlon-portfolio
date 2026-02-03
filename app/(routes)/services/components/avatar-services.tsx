import MotionTransition from "../../../../components/transition-component";
import Image from "next/image";

export default function AvatarServices() {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width="300"
        height="300"
        className="w-87.5 h-full "
        alt="Avatar Services"
      />
    </MotionTransition>
  );
}
