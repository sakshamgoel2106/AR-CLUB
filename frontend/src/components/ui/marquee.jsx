import { cn } from "@/lib/utils";
import React from "react";






export function Marquee({
  className,
  pauseOnHover = false,
  reverse = false,
  children,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        className
      )}>

      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}>

        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}>

        {children}
      </div>
    </div>);

}