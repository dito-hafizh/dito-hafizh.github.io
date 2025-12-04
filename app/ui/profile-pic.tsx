import Image from 'next/image';

export default function ProfilePic() {
  return (
    <Image
      src="/profile.webp"
      alt="Profile Picture"
      width={120}
      height={120}
      className="h-30 w-30 rounded-full object-contain"
    />
  );
}
