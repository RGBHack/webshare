import React from 'react'

import { GridProps } from '../../lib/types'
import style from '../../styles/UI/Grid.module.scss'
import Card from './Card'

const Grid = (props: GridProps) => {
	const { cards } = props

	return (
		<div className={style.projectgrid}>
			{cards.reverse().map((card) => (
				<Card {...card} />
			))}
		</div>
	)
}
export default Grid
