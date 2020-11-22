import { useRouter } from 'next/router'

import { CardProps } from '../../lib/types'
import style from '../../styles/UI/Card.module.scss'

const Card = (props: CardProps) => {
	const { media, name, id, profilePic, isZoomed } = props
	const router = useRouter()

	return (
		<div
			className={
				isZoomed
					? `${style.cardWrapper} ${style.zoomedCardWrapper}`
					: style.cardWrapper
			}
		>
			<div
				className={isZoomed ? `${style.card} ${style.cardZoomed}` : style.card}
			>
				<div
					className={
						isZoomed
							? `${style.cardBar} ${style.zoomedCardBar}`
							: style.cardBar
					}
				>
					<div
						className={
							isZoomed
								? `${style.profilePic} ${style.zoomedProfilePic}`
								: style.profilePic
						}
					>
						<img
							src={profilePic}
							alt={`${name}'s profile`}
							className={style.profilePicImg}
						/>
						<h1>{name}</h1>
						<img
							src="/copy.svg"
							alt="copy to clipboard"
							className={style.copy}
							onClick={() => {
								navigator.clipboard.writeText(
									`https://webshare.team3749.org/post/${id}`
								)
								alert('Copied post link to clipboard!')
							}}
						/>
					</div>
					<h2>{media.title}</h2>
				</div>
				<img
					src={media.image}
					alt={`${name}'s post: ${media.title}`}
					className={
						isZoomed
							? `${style.cardImage} ${style.zoomedCardImage}`
							: style.cardImage
					}
					onClick={() => router.push(`/post/${id}`)}
				/>
				<div
					className={
						isZoomed
							? `${style.tagCollection} ${style.zoomedTagCollection}`
							: style.profilePic
					}
				>
					{media.tags.map((tag) => (
						<div
							className={style.tag}
							onClick={() => router.push(`/?tag=${tag}`)}
						>
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
