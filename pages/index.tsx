import { useRouter } from 'next/router'

import Meta from '../components/SEO/Meta'
import Grid from '../components/UI/Grid'
import Nav from '../components/UI/Nav'
import { getPosts, logOut } from '../lib/firebase'
import { GridProps } from '../lib/types'
import style from '../styles/UI/Index.module.scss'

export const getServerSideProps = async () => {
	const cards = await getPosts()
	return { props: { cards } }
}

const Index = (props: GridProps) => {
	const router = useRouter()
	const { cards } = props

	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Grid cards={cards} />
			<button
				onClick={async () => {
					await logOut()
					router.push('/login')
				}}
				type="button"
			>
				<img className={style.logOut} src="/logout.png" alt="Log Out" />
			</button>
		</>
	)
}

export default Index
