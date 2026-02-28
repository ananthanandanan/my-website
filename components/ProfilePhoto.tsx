import Image from "next/image";

type ProfilePhotoProps = Readonly<{
  src: string;
  alt: string;
}>;

export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div className="group relative mt-[2px] h-[210px] w-[160px] shrink-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="160px"
        className="rounded-[4px] border border-[#1e2229] object-cover object-top filter-[grayscale(30%)_contrast(1.05)] transition-[filter] duration-300 ease-in-out group-hover:filter-[grayscale(0%)_contrast(1)]"
      />

      <div
        className="pointer-events-none absolute -inset-px z-1 rounded-[5px]"
        style={{
          boxShadow: "0 0 0 1px #1e2229, 0 8px 32px rgba(74,158,255,0.08)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-2 rounded-[4px]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -top-3px -left-3px z-3 h-12px w-12px border-solid opacity-65"
        style={{ borderColor: "#4a9eff", borderWidth: "1.5px 0 0 1.5px" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-3px -bottom-3px z-3 h-12px w-12px border-solid opacity-65"
        style={{ borderColor: "#4a9eff", borderWidth: "0 1.5px 1.5px 0" }}
        aria-hidden
      />
    </div>
  );
}
