import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** 展示给读屏；顶栏内可置空由外链文案承担 */
  alt?: string;
};

/** 与 /favicon.svg 一致的品牌图标，用于导航与页脚 */
export function BrandMark({ className, alt = "以太数字" }: BrandMarkProps) {
  return (
    <img
      src="/favicon.svg"
      alt={alt}
      width={32}
      height={32}
      decoding="async"
      className={cn("shrink-0 rounded-lg object-cover", className)}
    />
  );
}
