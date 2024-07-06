import { MotionImage } from "./motion/image"

interface Props {
  size?: number
}

export function Logo({ size = 160 }: Props) {
  return (
    <MotionImage
      layoutId="app-logo"
      src="/logo.png"
      alt="GH SEARCH LOGO"
      width={size}
      height={size}
      className="object-contain"
    />
  )
}