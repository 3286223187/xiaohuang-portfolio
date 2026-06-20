import Image from "next/image";

export default function PhotoPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#fbfbf9]">
      <Image
        src="https://minimax-algeng-chat-tts.oss-cn-wulanchabu.aliyuncs.com/ccv2%2F2026-04-24%2FMiniMax-M2.7%2F2044781975029420231%2F8e70455e24025e434776adbbd5f81aa2523077d62c677e8c35ba45cb73206e40..png"
        alt="photo"
        width={500}
        height={500}
        className="object-cover"
        priority
      />
    </div>
  );
}