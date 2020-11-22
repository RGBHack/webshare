export interface CardProps {
	name: string
	uid: string
	id: string
	profilePic: string
	media: {
		image: string
		title: string
		tags: string[]
	}
	date: number
	isZoomed?: boolean
}

export interface GridProps {
	cards: CardProps[]
}

export interface NavProps {
	active: 'posts' | 'new' | 'login'
}
