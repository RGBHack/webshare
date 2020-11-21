import '../styles/Globals.scss'

import { AppProps } from 'next/app'
import React from 'react'
import { Preflight } from 'styled-preflight'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Preflight />
		<Component {...pageProps} />
	</>
)

export default App
