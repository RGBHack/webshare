import Meta from '../components/SEO/Meta'
import { logIn, useAuthState } from '../lib/firebase'
import { GridProps } from '../lib/types'

const LoginComponent = (props: GridProps) => {
	const [user, loading] = useAuthState()
	return (
		<>
			<Meta />
			{user?.displayName} {loading}
			<button onClick={logIn}>log in obviously wtf are you think</button>
		</>
	)
}

export default LoginComponent
