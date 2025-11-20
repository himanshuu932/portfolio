import * as React from "react"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const base = "rounded-lg border bg-card text-card-foreground shadow-sm"
    return (
      <div
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const base = "flex flex-col space-y-1.5 p-6"
    return (
      <div
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    const base = "text-lg font-semibold leading-none tracking-tight"
    return (
      <h3
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const base = "text-sm text-muted-foreground"
    return (
      <p
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
CardDescription.displayName = "CardDescription"

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const base = "p-6 pt-0"
    return (
      <div
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const base = "flex items-center p-6 pt-0"
    return (
      <div
        ref={ref}
        className={className ? base + " " + className : base}
        {...props}
      />
    )
  }
)
CardFooter.displayName = "CardFooter"