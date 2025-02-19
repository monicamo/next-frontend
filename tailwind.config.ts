import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
//@ts-expect-error - flowbite-typography is not typed
import flowbiteTypography from "flowbite-typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbite.plugin(), flowbiteTypography],
} satisfies Config;
