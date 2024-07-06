'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
  size?: number
}

const MotionImage = motion(Image)

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
