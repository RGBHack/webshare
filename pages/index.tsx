import { useRouter } from 'next/router'

import Meta from '../components/SEO/Meta'
import Grid from '../components/UI/Grid'
import Nav from '../components/UI/Nav'
import { getPosts, logOut, usePosts } from '../lib/firebase'
import { GridProps } from '../lib/types'
import style from '../styles/UI/Index.module.scss'

export const getServerSideProps = async () => {
	const cards = await getPosts()
	return { props: { cards } }
}

const Index = (props: GridProps) => {
	const { cards } = props

	const router = useRouter()
	const posts = usePosts(cards)

	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Grid cards={posts} />
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
