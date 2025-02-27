import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Bouncy Tales",
		template: "%s | Bouncy Tales",
	},
	description: "Bounce you way to greatness",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
