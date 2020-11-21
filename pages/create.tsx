import router from 'next/router'
import { useEffect } from 'react'

import Meta from '../components/SEO/Meta'
import CreateForm from '../components/UI/Create/Form'
import Nav from '../components/UI/Nav'
import { useAuthState } from '../lib/firebase'

const Create = () => {
	const [user, loading] = useAuthState()
	useEffect(() => {
		if (!loading && !user) {
			router.push('/login')
		}
	}, [loading])

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				user && (
					<>
						<Meta />
						<Nav active="new" />
						<CreateForm />
					</>
				)
			)}
		</>
	)
}

export default Create
