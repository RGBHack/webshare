export interface CardProps {
	name: string
	uid: string
	profilePic: string
	media: {
		image: string
		title: string
		tags: string[]
	}
	date: Date
}

export interface NavProps {
	active: 'posts' | 'new' | 'signup'
}
