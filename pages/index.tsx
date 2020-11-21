import Meta from '../components/SEO/Meta'
import Grid from '../components/UI/Grid'
import Nav from '../components/UI/Nav'
import { getPosts } from '../lib/firebase'
import { GridProps } from '../lib/types'

export const getStaticProps = async () => {
	const cards = await getPosts()
	return { props: { cards } }
}

const Index = (props: GridProps) => {
	const { cards } = props

	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Grid cards={cards} />
		</>
	)
}

export default Index
