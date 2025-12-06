import Image from 'next/image';

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function ProfilePic({ width = 120, height = 120, className = "h-30 w-30 rounded-full object-contain" }: Props) {
  return (
    <Image
      src="/profile.webp"
      alt="Profile Picture"
      width={width}
      height={height}
      className={className}
    />
  );
}
