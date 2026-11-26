"use client"

import type React from "react"
import { Children } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

function ScrollReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.04,
      },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -70px 0px" }}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}

/* ---------- Section ---------- */
export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn("border-b border-border py-20 sm:py-28", className)}>
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </ScrollReveal>
    </section>
  )
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-brand-blue" />
      <span className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{children}</span>
    </div>
  )
}

/* ---------- SectionHeading ---------- */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.035em] text-foreground text-balance sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

/* ---------- Button-like Link ---------- */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        variant === "primary"
          ? "bg-white text-black hover:bg-brand-blue hover:text-white"
          : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        className,
      )}
    >
      {children}
    </Link>
  )
}

/* ---------- MediaZone ---------- */
export function MediaZone({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  caption,
  shape = "left",
}: {
  src: string
  alt: string
  className?: string
  aspect?: string
  caption?: string
  shape?: "left" | "right" | "soft"
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden border border-border bg-card shadow-2xl shadow-black/20",
        shape === "left" && "media-organic-left",
        shape === "right" && "media-organic-right",
        shape === "soft" && "rounded-lg",
        aspect,
        className,
      )}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" sizes="(max-width: 1024px) 100vw, 50vw" />
      {caption ? (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
          <p className="text-sm font-medium text-foreground">{caption}</p>
        </div>
      ) : null}
    </div>
  )
}

/* ---------- PageHero ---------- */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,var(--brand-blue),transparent_70%)] opacity-10" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <ScrollReveal className="relative max-w-4xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-foreground text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section className="border-b border-border bg-white text-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <ScrollReveal className="border border-black/10 p-8 sm:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-[-0.035em] text-black text-balance sm:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/65">{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ActionLink href={primary.href} className="bg-black text-white hover:bg-brand-blue">{primary.label}</ActionLink>
              {secondary ? (
                <ActionLink href={secondary.href} variant="outline" className="border-black/20 text-black hover:border-black/40 hover:bg-black/5">
                  {secondary.label}
                </ActionLink>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
