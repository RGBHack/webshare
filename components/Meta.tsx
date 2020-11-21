import Head from 'next/head'

const Meta = () => {
	return (
		<Head>
			{/* Essentials */}
			<meta charSet="utf-8" />
			<title>Webshare</title>

			{/* SEO */}
			<meta name="description" content="Pass on your images" />
			<meta name="author" content="Team Optix" />
			<meta name="keywords" content="webshare" />

			{/* Open Graph */}
			<meta property="og:description" content="Pass on your images" />
			<meta property="og:url" content="https://safin.dev" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Webshare" />
			<meta property="og:site_name" content="Webshare" />
			<meta property="og:image" content="/icon.png" />
			<meta property="og:image:alt" content="/icon.png" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta name="twitter:card" content="Pass on your images" />
			<meta name="twitter:url" content="https://safin.dev" />
			<meta name="twitter:title" content="Safin Singh" />
			<meta name="twitter:description" content="Pass on your images" />
			<meta name="twitter:image" content="/icon.png" />

			{/* WeChat */}
			<meta itemProp="name" content="Webshare" />
			<meta itemProp="image" content="/icon.png" />
			<meta
				name="description"
				itemProp="description"
				content="Pass on your images"
			/>

			{/* Apple */}
			<link rel="apple-touch-icon" href="/icon.png" />
			<link rel="apple-touch-startup-image" href="/icon.png" />
			<meta name="apple-mobile-web-app-title" content="Webshare" />
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
			<meta name="image" content="/icon.png" />
			<link rel="icon" href="/icon.png" />

			{/* Misc */}
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<meta name="theme-color" content="#0668FF" />
			<link rel="canonical" href="https://safin.dev" />

			{/* External Dependencies */}
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
				rel="stylesheet"
			/>
		</Head>
	)
}

export default Meta
