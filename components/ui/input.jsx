import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
          "flex h-[48px] w-full rounded-lg border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 font-light bg-primary/60 px-4 py-3 text-white text-sm placeholder:text-white/30 outline-none transition-all duration-150",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
