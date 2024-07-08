type Variant =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "disabled"
  | "ghost"
  | "link"
  | "";

export function switchVariant(variant: Variant) {
  switch (variant) {
    case "info":
      return "bg-sky-500 text-sky-100 ease-in-out duration-200 hover:shadow-lg px-6 py-2 flex items-center gap-3";
    case "success":
      return "bg-teal-500 text-teal-100 px-6 py-2 flex items-center gap-3 ease-in-out duration-200 hover:shadow-lg ";
    case "warning":
      return "bg-amber-500 text-amber-100 px-6 py-2 flex items-center gap-3 ease-in-out duration-200 hover:shadow-lg ";
    case "error":
      return "bg-red-500 text-red-100 px-6 py-2 flex items-center gap-3 ease-in-out duration-200 hover:shadow-lg ";
    case "disabled":
      return "hover:brightness-90 bg-white border border-zinc-900 text-gray-800 opacity-50 px-6 py-2 flex items-center gap-3 cursor-not-allowed hover:shadow-none  ease-in-out duration-200";
    case "ghost":
      return "hover:bg-[#ffe4e60d] bg-transparent ghost-text px-6 py-2 flex items-center gap-3 ease-in-out duration-200 hover:shadow-lg";
    case "link":
      return "underline-offset-2 underline bg-transparent hover:bg-transparent text-rose-100";
    default:
      return "";
  }
}
