import { useRouter } from 'next/router'

import { CardProps } from '../../lib/types'
import style from '../../styles/UI/Card.module.scss'

const Card = (props: CardProps) => {
	const { media, name, id, profilePic } = props
	const router = useRouter()

	return (
		<div className={style.cardWrapper}>
			<div className={style.card} onClick={() => router.push(`/post/${id}`)}>
				<div>
					<div className={style.profilePic}>
						<img
							src={profilePic}
							alt={`${name}'s profile`}
							className={style.profilePicImg}
						/>
						<h1>{name}</h1>
					</div>
					<h2>{media.title}</h2>
				</div>
				<img
					src={media.image}
					alt={`${name}'s post: ${media.title}`}
					className={style.cardImage}
				/>
				<div className={style.tagCollection}>
					{media.tags.map((tag) => (
						<div className={style.tag}>
							<div className={style.circle} />
							<p>{tag.replace('_', ' ')}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Card
