import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `
        min-h-[120px] w-full rounded-md border
        border-gray-300 bg-transparent px-3 py-2 text-base
        placeholder:text-gray-400
        shadow-sm outline-none transition-all duration-200 resize-none
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30
        aria-invalid:border-red-500 aria-invalid:ring-2 aria-invalid:ring-red-500/30
        disabled:cursor-not-allowed disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
