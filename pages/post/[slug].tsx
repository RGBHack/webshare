import { useRouter } from 'next/router'

import Meta from '../../components/SEO/Meta'
import Card from '../../components/UI/Card'
import Nav from '../../components/UI/Nav'
import { getPost } from '../../lib/firebase'
import { CardProps } from '../../lib/types'

export const getServerSideProps = async ({ query }) => {
	const { slug } = query
	const card = await getPost(slug as string)
	console.log(card)
	return { props: { card } }
}

interface CardPropsProp {
	card: CardProps
}

const Index = (props: CardPropsProp) => {
	console.log(props)
	const { card } = props
	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Card {...card} />
		</>
	)
}

export default Index
