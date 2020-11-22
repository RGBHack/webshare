import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'

import Meta from '../../components/SEO/Meta'
import Card from '../../components/UI/Card'
import Nav from '../../components/UI/Nav'
import { getPost } from '../../lib/firebase'
import { CardProps } from '../../lib/types'

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
	const { slug } = query
	try {
		const card = await getPost(slug as string)
		return { props: { card } }
	} catch (e) {
		return { props: { card: null } }
	}
}

interface CardPropsProp {
	card: CardProps | null
}

const Slug = (props: CardPropsProp) => {
	const { card } = props
	const router = useRouter()

	if (card === null) {
		router.push('/')
		return <></>
	}
	const trueCard = card!

	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Card {...trueCard} isZoomed />
		</>
	)
}

export default Slug
