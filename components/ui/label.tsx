import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-[12.5px] font-medium leading-none text-text-primary",
        className
      )}
      {...props}
    />
  );
}
