import Image from "next/image";

interface ScreenshotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  src,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
