import { Footer, Navbar } from "@components/index";
import "./globals.css";
import { roboto_slab } from "@utils/fonts";
import ResumeProvider from "@context/resumeProvider";
import Script from "next/script";

export const metadata = {
	title: "I'm Kaung Htet Naing,Front-end Developer",
	description: "Front-End Developer",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-touch-icon.png",
		},
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload" id="google-analytics">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
        `}
			</Script>
			<body suppressHydrationWarning className={roboto_slab.className}>
				<ResumeProvider>
					<Navbar>{children}</Navbar>
					<Footer />
				</ResumeProvider>
			</body>
		</html>
	);
}
