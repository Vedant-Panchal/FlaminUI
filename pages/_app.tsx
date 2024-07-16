import "@/app/globals.css";
import { ColoredEllipse } from "@/components/Sections/Section1/ColoredEllipse";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="relative pt-16">
        <div className="fixed inset-0 z-20 bg-noise mix-blend-darken bg-repeat object-cover pointer-events-none"></div>


        <ColoredEllipse className="fixed blur-[90px] z-10 right-0 -bottom-20 rotate-45 scale-125 opacity-40" />
        <div className="relative z-[20] w-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
