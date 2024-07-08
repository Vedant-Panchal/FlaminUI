import { cn } from "@lib/utils/cn";

interface AvatarProps {
  src?: string;
  alt?: string;
  isRounded?: boolean;
  status?: "online" | "offline" | "none";
  className?: string;
  location?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "xs" | "sm" | "md" | "lg" | number;
}

// const defaultProps: AvatarProps = {
//   src: "https://api.dicebear.com/9.x/big-ears-neutral/svg",
//   status: "none",
//   isRounded: true,
//   location: "bottom-right",
// };

const Avatar = ({
  src = "https://api.dicebear.com/9.x/big-ears-neutral/svg",
  alt,
  isRounded = true,
  status = "none",
  className,
  location = "bottom-right",
  size,
}: AvatarProps) => {
  const avatarSize =
    size === "xs"
      ? "h-8 w-8"
      : size === "sm"
      ? "h-10 w-10"
      : size === "md"
      ? "h-12 w-12"
      : size === "lg"
      ? "h-16 w-16"
      : typeof size === "number"
      ? `h-${size} w-${size}`
      : "h-12 w-12";

  const statusIconSize =
    size === "xs"
      ? "h-2 w-2"
      : size === "sm"
      ? "h-3 w-3"
      : size === "md"
      ? "h-4 w-4"
      : size === "lg"
      ? "h-5 w-5"
      : "h-5 w-5";
  // const innerCircleSize = "h-2 w-2";

  // Calculate padding to center the inner circle
  const paddingSize =
    statusIconSize === "h-2 w-2"
      ? "p-[1.6px]"
      : statusIconSize === "h-3 w-3"
      ? "p-[2.4px]"
      : statusIconSize === "h-4 w-4"
      ? "p-1"
      : statusIconSize === "h-5 w-5"
      ? "p-[3.2px]"
      : "p-2";

  const statusPosition =
    location === "top-left"
      ? "-left-0.5 -top-0.5"
      : location === "top-right"
      ? "-right-0.5 -top-0.5"
      : location === "bottom-left"
      ? "-left-0.5 -bottom-0.5"
      : "-right-0.5 -bottom-0.5";

  return (
    <span className={`relative inline-block ${avatarSize}`}>
      <img
        className={cn(
          avatarSize,
          isRounded ? "rounded-full" : "rounded-lg",
          "object-cover"
        )}
        src={src}
        alt={alt}
      />
      {status !== "none" && (
        <div
          className={cn(
            "absolute flex items-center justify-center rounded-full bg-white",
            statusIconSize,
            statusPosition,
            paddingSize
          )}
        >
          <div
            className={cn(
              status === "online" ? "bg-green-600" : "bg-red-600",
              className,
              "h-full w-full rounded-full"
            )}
          ></div>
        </div>
      )}
    </span>
  );
};

export default Avatar;
