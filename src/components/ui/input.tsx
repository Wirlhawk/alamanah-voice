import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                // className={cn(
                //                 "flex min-h-[60px] w-full rounded-xl border-[3px] border-foreground bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 placeholder-bold font-bold",
                //                 className
                //             )}
                className={cn(
                    "flex h-11 w-full rounded-xl border-[3px] border-foreground bg-background px-3 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm font-bold",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
