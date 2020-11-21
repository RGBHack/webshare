import { useRouter } from 'next/router'

import Meta from '../components/SEO/Meta'
import Nav from '../components/UI/Nav'
import { logIn, useAuthState } from '../lib/firebase'
import style from '../styles/UI/Create/Login.module.scss'

const LoginComponent = () => {
	const loading = useAuthState()[1]
	const router = useRouter()

	if (loading) {
		return (
			<>
				<Meta />
				<p>Loading...</p>
			</>
		)
	}

	return (
		<>
			<Meta />
			<Nav active="login" />
			<div className={style.loginWrapper}>
				<div className={style.login}>
					<button
						onClick={async () => {
							await logIn()
							router.push('/')
						}}
						type="button"
						className={style.loginButton}
					>
						Log in with Google
					</button>
				</div>
			</div>
		</>
	)
}

export default LoginComponent
