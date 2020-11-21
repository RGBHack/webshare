import { useRouter } from 'next/router'

import Meta from '../components/SEO/Meta'
import Nav from '../components/UI/Nav'
import { logIn, logOut, useAuthState } from '../lib/firebase'
import style from '../styles/UI/Create/Login.module.scss'

const LoginComponent = () => {
	const [user, loading] = useAuthState()
	const router = useRouter()

	if (loading) {
		return (
			<>
				<Meta />
				<p>Loading...</p>
			</>
		)
	}

	if (user) {
		return (
			<>
				<Nav active="login" />
				<div className={style.logout}>
					<button
						onClick={logOut}
						type="button"
						className={style.logoutButton}
					>
						Log Out of Here!
					</button>
				</div>
			</>
		)
	}

	return (
		<>
			<Meta />
			<Nav active="login" />
			<div className={style.login}>
				<button
					onClick={async () => {
						await logIn()
						router.push('/')
					}}
					type="button"
					className={style.loginButton}
				>
					log in obviously wtf (what the frick...not the other one, for legal
					reasons) are you think (w/ google)
				</button>
			</div>
		</>
	)
}

export default LoginComponent
