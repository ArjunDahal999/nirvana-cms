import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  rotate?: "x" | "y";
}

export default function FlipCard({
  title,
  description,
  rotate = "y",
  className,
  ...props
}: FlipCardProps) {
  const rotationClass = {
    x: [
      "group-hover:[transform:rotateX(180deg)]",
      "[transform:rotateX(180deg)]",
    ],
    y: [
      "group-hover:[transform:rotateY(180deg)]",
      "[transform:rotateY(180deg)]",
    ],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        "group h-52 w-full md:w-56 [perspective:1000px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <Card className="absolute h-full rounded-3xl w-full flex items-center justify-center  [backface-visibility:hidden]">
          <div className=" text-xl font-bold text-center max-w-[6em] text-wrap text-primary">
            {title}
          </div>
        </Card>

        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full rounded-2xl bg-primary/80 p-4 text-slate-200 [backface-visibility:hidden] overflow-hidden",
            self[1]
          )}
        >
          {/* Background SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 224 288"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="bg-gradient" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="224" height="288" fill="url(#bg-gradient)" />
            <circle cx="180" cy="60" r="40" fill="#fff" fillOpacity="0.07" />
            <circle cx="60" cy="220" r="30" fill="#fff" fillOpacity="0.04" />
            <circle cx="120" cy="140" r="70" fill="#fff" fillOpacity="0.03" />
          </svg>
          <div className="flex min-h-full flex-col items-center justify-center gap-2 relative z-10">
            <p className="py-4 text-base font-medium leading-normal text-gray-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
