import { useRouter } from 'next/router'
import { useRef } from 'react'

import { addPost, useAuthState } from '../../../lib/firebase'
import style from '../../../styles/UI/Create/Form.module.scss'

const Create = () => {
	const textEl = useRef<null | HTMLInputElement>(null)
	const fileEl = useRef<null | HTMLInputElement>(null)
	const [user] = useAuthState()
	const rooter = useRouter()

	return (
		<div className={style.cardWrapper}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					if (textEl?.current && fileEl?.current) {
						if (user)
							addPost(
								user,
								textEl.current.value,
								fileEl.current.files![0]
							)
					}
					rooter.push('/')
				}}
			>
				<div className={style.form}>
					<input type="text" placeholder="title" ref={textEl} required />
					<input type="file" ref={fileEl} required />
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}
export default Create
