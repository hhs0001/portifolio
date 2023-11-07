import { Link } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";
import { Code } from "@nextui-org/react"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Heitor Portfolio</h1>
				<p>Uma coisa esta por vir</p>
			</div>
		</section>
	);
}
