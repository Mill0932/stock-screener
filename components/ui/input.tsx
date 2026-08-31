import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-md border border-border-input bg-bg-surface px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted",
        "focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/15",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
