import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import dynamic from "next/dynamic";
import Footer from "./components/ui/Footer/Footer";
import { ReactNode } from "react";
import Link from "next/link"; // Use next/link for navigation
import { Component } from "lucide-react";
import Head from "next/head";

const CustomHead = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://localhost:3000/" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || "ProtoUI"} />
      <meta
        property="og:description"
        content={
          frontMatter.description ||
          "The next gen component library for React and Next JS"
        }
      />
    </>
  );
};

// const Navbar = () => {
//   const { search } = useConfig();
//   const SearchComponent: any = search?.component;
//   return (
//     <header className="fixed z-50 top-0 flex h-max w-full items-center justify-between px-32 py-4 backdrop-blur-xl bg-[rgb(77,77,77)]/[0.1%] after:content-[''] after:absolute after:w-full after:h-[0.5px] after:bg-gradient-to-r from-[#787878]/0 via-[#DEDEDE] to-[#787878]/0 after:bottom-0 after:right-0 after:opacity-50">
//       <Link href="/" className="flex items-center space-x-2">
//         <div>
//           <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
//             {"<"}Proto{">"}
//           </span>
//           <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
//             UI
//           </span>
//         </div>
//       </Link>
//       <div className="flex-grow flex justify-end items-center">
//         <SearchComponent />
//       </div>
//     </header>
//   );
// };

const themeConfig: DocsThemeConfig = {
  logo: (
    <p>
      <span className="bg-gradient-to-br from-[#FFF] to-[#999] bg-clip-text font-fira text-2xl font-bold text-transparent">
        {"<"}Proto{">"}
      </span>
      <span className="bg-gradient-to-r from-[#FB7185] to-[#F43F5E] bg-clip-text font-sans text-xl font-black text-transparent">
        UI
      </span>
    </p>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return (
          <div style={{ background: "transparent", textAlign: "left" }}>
            {title}
          </div>
        );
      }
      return (
        <div className="flex items-center justify-between gap-3">
          <Component strokeWidth={2} size={15} /> {title}
        </div>
      );
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
    autoCollapse: false,
  },
  head: CustomHead,
  darkMode: false,
  footer: {
    component: Footer,
  },
  toc: {
    float: false,
    backToTop: true,
    component: null,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  main: ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex flex-col items-start justify-start min-h-screen bg-transparent text-white ">
        <div className="flex-grow max-w-full overflow-auto relative w-full">
          {children}
        </div>
      </div>
    );
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s | ProtoUI",
    };
  },
  primaryHue: 332,
  primarySaturation: 90,
};

export default themeConfig;
