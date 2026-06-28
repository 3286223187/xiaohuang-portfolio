import Image from "next/image";

export default function PhotoPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#fbfbf9]">
      <Image
        src="/images/placeholders/照片1.jpg"
        alt="photo"
        width={500}
        height={500}
        className="object-cover"
        priority
      />
    </div>
  );
}
