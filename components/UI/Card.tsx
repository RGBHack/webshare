import Image from 'next/image'

import theme from '../../lib/theme'
import { CardProps } from '../../lib/types'
import style from '../../styles/UI/Card.module.scss'

const Card = (props: CardProps) => {
	const { media, name } = props

	return (
		<div className={style.card}>
			<h1>{name}</h1>
			<p>{media.title}</p>
			<Image
				src={media.image}
				alt={`${name}'s post: ${media.title}`}
				width={500}
				height={500}
				className={style.cardImage}
			/>
			<div className={style.tag}>
				<svg height="10" width="10">
					<circle cx="50" cy="50" r="40" fill={theme.accent} />
				</svg>
				<p>{media.tags}</p>
			</div>
		</div>
	)
}

export default Card
