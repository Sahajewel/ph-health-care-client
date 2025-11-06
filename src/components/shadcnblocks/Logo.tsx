/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/shadcnblocks/logo.tsx

import Image from "next/image";
import Link from "next/link";

export function Logo({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <Link href={url} className="flex items-center gap-2">
      {children}
    </Link>
  );
}

export function LogoImage({ src, alt, title, className }: any) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={40}
      height={40}
      className={className}
    />
  );
}

export function LogoText({ children, className }: any) {
  return <span className={`font-bold ${className}`}>{children}</span>;
}
