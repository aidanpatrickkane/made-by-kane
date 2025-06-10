import type React from "react"
import { forwardRef, cloneElement, isValidElement, type ReactElement } from "react"

/**
 * Tailwind-friendly className joiner that safely ignores falsy values.
 */
function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(" ")
}

/* ──────────────────────────────────────────────────────────────────────────
   🟦  Button
   ---------------------------------------------------------------------*/

type Variant = "default" | "outline" | "secondary"
type Size = "sm" | "md" | "lg"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style of the button */
  variant?: Variant
  /** Padding / font‑size combo */
  size?: Size
  /** Allows using any element as the child (e.g. <Link/>) while preserving styles */
  asChild?: boolean
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl disabled:opacity-50 disabled:pointer-events-none"

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

const variantStyles: Record<Variant, string> = {
  default:
    "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white focus:ring-sky-500 shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-sky-500 text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:ring-sky-500 shadow-sm hover:shadow-md",
  secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 focus:ring-slate-400 shadow-sm hover:shadow-md",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "md", className, asChild = false, children, ...props }, ref) => {
    const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className)

    // If asChild is true and the child is a valid element (e.g. <Link>),
    // clone it to merge our classes while preserving the original tag.
    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string }, string | React.JSXElementConstructor<any>>;
      return cloneElement(child, {
        className: cn(child.props.className, classes),
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

/* ──────────────────────────────────────────────────────────────────────────
   🟩  Card + subcomponents
   ---------------------------------------------------------------------*/

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
      className,
    )}
    {...props}
  >
    {children}
  </div>
))
Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pb-0", className)} {...props}>
    {children}
  </div>
))
CardHeader.displayName = "CardHeader"

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props}>
    {children}
  </div>
))
CardContent.displayName = "CardContent"