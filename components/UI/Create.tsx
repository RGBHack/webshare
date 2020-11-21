import { useRef } from 'react'

import { addPost } from '../../lib/firebase'
import style from '../../styles/UI/Create.module.scss'

const Create = () => {
	const textEl = useRef<null | HTMLInputElement>(null)
	const fileEl = useRef<null | HTMLInputElement>(null)

	return (
		<div className={style.cardWrapper}>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					if (textEl?.current && fileEl?.current) {
						addPost(textEl.current.value, fileEl.current.files![0])
					}
				}}
			>
				<input type="text" placeholder="title" ref={textEl} required />
				<input type="file" ref={fileEl} required />
			</form>
		</div>
	)
}
export default Create
