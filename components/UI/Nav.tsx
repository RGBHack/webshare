import Image from 'next/image'
import Link from 'next/link'

import theme from '../../lib/theme'
import { NavProps } from '../../lib/types'
import style from '../../styles/UI/Nav.module.scss'

const Nav = (props: NavProps) => {
	const { active } = props
	return (
		<div className={style.nav}>
			<div>
				<Image src="/icon.png" alt="Site Icon" width={30} height={30} />
			</div>
			<div>
				<Link href="https://google.com" passHref>
					<a
						className={style.navlink}
						style={{
							color: active === 'posts' ? theme.accent : theme.bg,
						}}
					>
						POSTS
					</a>
				</Link>
				<Link href="https://google.com">
					<a
						className={style.navlink}
						style={{
							color: active === 'new' ? theme.accent : theme.bg,
						}}
					>
						NEW
					</a>
				</Link>
				<Link href="https://google.com">
					<a
						className={style.navlink}
						style={{
							color: active === 'signup' ? theme.accent : theme.bg,
						}}
					>
						SIGN UP
					</a>
				</Link>
			</div>
			<div className={style.spacer}>
				<Image
					src="/icon.png"
					alt="Site Icon"
					width={30}
					height={30}
					className="hidden"
				/>
			</div>
		</div>
	)
}

export default Nav
