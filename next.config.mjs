import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {};


export const nextraConfig = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.tsx",
});

export default nextraConfig(nextConfig);
