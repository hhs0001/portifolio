export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Heitor Portfolio",
	description: "Heitor's portfolio",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Contact",
			href: "/contact",
		},
		{
			label: "About",
			href: "/about",
		}
	],
	links: {
		github: "https://github.com/hhs0001",
		twitter: "https://twitter.com/heitorhstein"
	},
};
