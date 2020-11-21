import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

import { addPost, useAuthState } from '../../../lib/firebase'
import style from '../../../styles/UI/Create/Form.module.scss'

const Create = () => {
	const textEl = useRef<null | HTMLInputElement>(null)
	const fileEl = useRef<null | HTMLInputElement>(null)
	const postButton = useRef(null)
	const [user] = useAuthState()
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const handleClick = () => {
		fileEl.current!.click()
	}

	return (
		<div className={style.formWrapper}>
			<form
				onSubmit={async (e) => {
					e.preventDefault()
					setLoading(true)
					alert('Please wait for the post to be processed')
					try {
						if (textEl?.current && fileEl?.current) {
							if (user)
								await addPost(
									user,
									textEl.current.value,
									fileEl.current.files![0]
								)
						}
					} catch (err) {
						alert(`An error occured! ${err}`)
						setLoading(false)
					}
					router.push('/')
				}}
			>
				<div className={style.form}>
					<h1>New Post</h1>
					<input
						type="text"
						placeholder="Title"
						ref={textEl}
						required
						className={style.input}
					/>
					<input
						id="filePicker"
						type="file"
						ref={fileEl}
						required
						className={style.input}
						style={{ display: 'none' }}
					/>
					<button
						type="button"
						className={style.fileButton}
						onClick={handleClick}
						ref={postButton}
					>
						Upload File
					</button>
					<input id="submitPost" type="submit" disabled={loading} />
				</div>
			</form>
		</div>
	)
}

export default Create
