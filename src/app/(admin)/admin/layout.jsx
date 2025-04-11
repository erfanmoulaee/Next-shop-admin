import vazirFont from "@/constants/localFont";
import "../../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/app/Providers";

export const metadata = {
  title: "پروفایل ادمین",
  description: "پروفایل ادمین",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true} className={`${vazirFont.variable} font-sans min-h-screen `}>
        <Providers>
          <Toaster />
          <div className="container xl:max-w-screen-xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
