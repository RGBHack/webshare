import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

import { CardProps } from './types'

const firebaseConfig = {
	apiKey: 'AIzaSyB4nW6VeBK3siPJ2pacMJwBkhrpHW8txc0',
	authDomain: 'webshare-2121.firebaseapp.com',
	databaseURL: 'https://webshare-2121.firebaseio.com/',
	projectId: 'webshare-2121',
	storageBucket: 'webshare-2121.appspot.com',
	messagingSenderId: '955442642495',
	appId: '1:955442642495:web:317678fc419e299c01828a',
}

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)

const providers = {
	google: new firebase.auth.GoogleAuthProvider(),
}

export const useAuthState = (): [firebase.User | null, boolean] => {
	const [user, setUser] = useState<firebase.User | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		return firebase.auth!().onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser)
			setLoading(false)
		})
	}, [])
	return [user, loading]
}

export const logIn = async () => {
	await firebase.auth().signInWithPopup(providers.google)
}

export const logOut = async () => {
	await firebase.auth().signOut()
}

export const getPosts = async (limit: number = 50) => {
	const res = await firebase
		.firestore()
		.collection('posts')
		.orderBy('date', 'desc')
		.limit(limit)
		.get()
	return res.docs.map((doc) => {
		return { ...doc.data(), id: doc.id }
	}) as CardProps[]
}

export const usePosts = (def: CardProps[], limit: number = 50) => {
	const [props, setProps] = useState(def)
	useEffect(() => {
		return firebase
			.firestore()
			.collection('posts')
			.orderBy('date', 'desc')
			.limit(limit)
			.onSnapshot((res) => {
				setProps(
					res.docs.map((doc) => {
						return { ...doc.data(), id: doc.id }
					}) as CardProps[]
				)
			})
	}, [])
	return props
}

export const getPost = async (id: string) => {
	const doc = await firebase.firestore().collection('posts').doc(id).get()
	return { ...doc.data!(), id: doc.id } as CardProps
}

export const addPost = async (user: firebase.User, title: string, image: File) => {
	if (user) {
		const imageUpload = await firebase
			.storage()
			.ref(`${user.uid}/${image.name}`)
			.put(image)
		const url = await imageUpload.ref.getDownloadURL()
		const formData = new FormData()
		formData.append('file', image)
		const ai = await fetch('https://webshare-ai.team3749.org/ai', {
			method: 'POST',
			body: formData,
		})
		const tags = (await ai.text()).split(',')
		const data = {
			name: user.displayName || '',
			profilePic: user.photoURL || '',
			uid: user.uid,
			media: {
				title,
				image: url,
				tags,
			},
			date: new Date().getTime(),
		}
		await firebase.firestore().collection('posts').add(data)
	}
}
