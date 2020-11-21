import Meta from '../components/SEO/Meta'
import Create from '../components/UI/Create'
import Nav from '../components/UI/Nav'
import { getPosts } from '../lib/firebase'
import { GridProps } from '../lib/types'

const CreateComponent = () => {
	return (
		<>
			<Meta />
			<Nav active="posts" />
			<Create />
		</>
	)
}

export default CreateComponent