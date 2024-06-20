import type { Metadata } from "next";
import "./globals.css";
import { rebondGrotesque } from "./fonts";

export const metadata: Metadata = {
	title: "Luke Massingham",
	description: "We are a design led Architecture practice based in Brisbane undertaking a broad range of quality residential projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rebondGrotesque.className} text-[#383838] bg-[#f9f9f9]`}>{children}</body>
		</html>
	);
}
