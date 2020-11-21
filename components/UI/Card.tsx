import { CardProps } from '../../lib/types'
import style from '../../styles/UI/Card.module.scss'

const Card = (props: CardProps) => {
	const { media, name } = props

	return (
		<div className={style.cardWrapper}>
			<div className={style.card}>
				<div>
					<h1>{name}</h1>
					<p>{media.title}</p>
				</div>
				<img
					src={media.image}
					alt={`${name}'s post: ${media.title}`}
					width={500}
					height={500}
					className={style.cardImage}
				/>
				<div className={style.tag}>
					<div className={style.circle} />
					<p>{media.tags}</p>
				</div>
			</div>
		</div>
	)
}

export default Card
