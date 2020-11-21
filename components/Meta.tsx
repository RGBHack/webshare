import Head from 'next/head'

const Meta = () => {
	return (
		<Head>
			{/* Essentials */}
			<meta charSet="utf-8" />
			<title>Safin Singh</title>

			{/* SEO */}
			<meta
				name="description"
				content="Full-stack Developer, Cybersecurity Competitor, High School Student"
			/>
			<meta name="author" content="Safin Singh" />
			<meta
				name="keywords"
				content="Safin, Singh, Safin Singh, safinsingh, paradox"
			/>

			{/* Open Graph */}
			<meta
				property="og:description"
				content="Hi, I'm Safin Singh. Full-stack Developer, Cybersecurity Competitor, High School Student."
			/>
			<meta property="og:url" content="https://safin.dev" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Safin Singh" />
			<meta property="og:site_name" content="Safin Singh" />
			<meta property="og:image" content="/logo.png" />
			<meta property="og:image:alt" content="/logo.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta
				name="twitter:card"
				content="Hi, I'm Safin Singh. Full-stack Developer, Cybersecurity Competitor, High School Student."
			/>
			<meta name="twitter:url" content="https://safin.dev" />
			<meta name="twitter:title" content="Safin Singh" />
			<meta
				name="twitter:description"
				content="Hi, I'm Safin Singh. Full-stack Developer, Cybersecurity Competitor, High School Student."
			/>
			<meta name="twitter:image" content="/logo.png" />

			{/* WeChat */}
			<meta itemProp="name" content="Safin Singh" />
			<meta itemProp="image" content="/logo.png" />
			<meta
				name="description"
				itemProp="description"
				content="Hi, I'm Safin Singh. Full-stack Developer, Cybersecurity Competitor, High School Student."
			/>

			{/* Apple */}
			<link rel="apple-touch-icon" href="/logo.png" />
			<link rel="apple-touch-startup-image" href="/logo.png" />
			<meta name="apple-mobile-web-app-title" content="Safin Singh" />
			<meta name="apple-mobile-web-app-capable" content="yes" />

			{/* IE */}
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />

			{/* QQ */}
			<meta name="x5-orientation" content="portrait" />
			<meta name="x5-fullscreen" content="true" />

			{/* UC Mobile */}
			<meta name="screen-orientation" content="portrait" />
			<meta name="full-screen" content="yes" />
			<meta name="wap-font-scale" content="no" />

			{/* Icons */}
			<meta name="image" content="/logo.png" />
			<link rel="icon" href="/logo.png" />

			{/* Misc */}
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<meta name="theme-color" content="#0668FF" />
			<link rel="canonical" href="https://safin.dev" />

			{/* External Dependencies */}
			<link
				href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
			<link rel="preload" as="image" href="/devto.svg" />
			<link rel="preload" as="image" href="/email.svg" />
			<link rel="preload" as="image" href="/github.svg" />
			<link rel="preload" as="image" href="/linkedin.svg" />
		</Head>
	)
}

export default Meta
