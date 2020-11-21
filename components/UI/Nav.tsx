import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { logOut, useAuthState } from '../../lib/firebase'
import theme from '../../lib/theme'
import { NavProps } from '../../lib/types'
import style from '../../styles/UI/Nav.module.scss'

const Nav = (props: NavProps) => {
	const { active } = props
	const router = useRouter()
	const [user, loading] = useAuthState()

	return (
		<div className={style.nav}>
			<div>
				<Image src="/icon.png" alt="Site Icon" width={30} height={30} />
			</div>
			<div>
				<Link href="/" passHref>
					<a
						className={style.navlink}
						style={{
							color: active === 'posts' ? theme.accent : theme.bg,
						}}
					>
						POSTS
					</a>
				</Link>
				<Link href="/create">
					<a
						className={style.navlink}
						style={{
							color: active === 'new' ? theme.accent : theme.bg,
						}}
					>
						NEW
					</a>
				</Link>
				{!loading && (
					<Link href="/login">
						<a
							className={style.navlink}
							style={{
								color: active === 'login' ? theme.accent : theme.bg,
							}}
							onClick={async () => {
								await logOut()
							}}
						>
							{!user ? 'LOG IN' : 'LOG OUT'}
						</a>
					</Link>
				)}
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
