import { DocsThemeConfig } from "nextra-theme-docs";

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
  project: {
    link: "https://github.com/shuding/nextra",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {},
  banner: {
    dismissible: false,
    text: "Welcome ProtoUI 🚀🚀",
  },
  
};

export default themeConfig;
