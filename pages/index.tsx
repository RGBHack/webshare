import { useRouter } from 'next/router'

import Meta from '../components/SEO/Meta'
import Grid from '../components/UI/Grid'
import Nav from '../components/UI/Nav'
import { getPosts, usePosts } from '../lib/firebase'
import { GridProps } from '../lib/types'

export const getServerSideProps = async () => {
	const cards = await getPosts()
	return { props: { cards } }
}

const Index = (props: GridProps) => {
	const { cards } = props

	const router = useRouter()
	const rawPosts = usePosts(cards)

	const realCards = !router.query.tag
		? rawPosts
		: rawPosts.filter((card) =>
				card.media.tags.includes(router.query.tag as string)
		  )

	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Grid cards={realCards} />
		</>
	)
}

export default Index
