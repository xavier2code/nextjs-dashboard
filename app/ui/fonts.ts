import exp from "constants";
import { Inter, Lusitana } from "next/font/google";

// 尝试加载 Google Fonts
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});