'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils/utils'

export interface PageLabelProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
}

export function PageLabel({
  href,
  children,
  className,
  ...props
}: PageLabelProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block px-4 py-2 rounded hover:bg-gray-100', 
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export function HomePageLabel({
    href,
    children,
    className,
    ...props
}: PageLabelProps) {
    return (
        <Link
          href={href}
          className={cn("text-foreground text-xl font-semibold", className)}
        >
            {children}
        </Link>
    )
}