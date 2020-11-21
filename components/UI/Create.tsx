import { useRef } from 'react'

import { addPost, useAuthState } from '../../lib/firebase'
import style from '../../styles/UI/Create.module.scss'

const Create = () => {
	const textEl = useRef<null | HTMLInputElement>(null)
	const fileEl = useRef<null | HTMLInputElement>(null)
  const [user, loading] = useAuthState()

	return (
		<div className={style.cardWrapper}>
			<form
				onSubmit={(e) => {
          e.preventDefault()
					if (textEl?.current && fileEl?.current) {
            console.log('adding post')
						if (user) addPost(user, textEl.current.value, fileEl.current.files![0])
					}
				}}
			>
				<input type="text" placeholder="title" ref={textEl} required />
				<input type="file" ref={fileEl} required />
        <button>Submit</button>
			</form>
		</div>
	)
}
export default Create
