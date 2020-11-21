import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import firebase from 'firebase/app'
import { useEffect, useState } from 'react'

import { CardProps } from './types'

const firebaseConfig = {
	apiKey: 'AIzaSyBREaa5ObpP9bvAhtVJ88mCrnX08UVNzPg',
	authDomain: 'positive-wonder-132723.firebaseapp.com',
	databaseURL: 'https://positive-wonder-132723.firebaseio.com',
	projectId: 'positive-wonder-132723',
	storageBucket: 'positive-wonder-132723.appspot.com',
	messagingSenderId: '274716407590',
	appId: '1:274716407590:web:8809cc8d17997dc5dd73e7',
	measurementId: 'G-PP2MYYMZ58',
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

export const getPosts = async (limit: number = 10) => {
	const res = await firebase.firestore().collection('posts').limit(limit).get()
	return res.docs
		.map((doc) => doc.data())
		.map((doc) => ({ ...doc, date: doc.date })) as CardProps[]
}

export const addPost = async (user: firebase.User, title: string, image: File) => {
  console.log(firebase.auth().currentUser)
	if (user) {
		const imageUpload = await firebase
			.storage()
			.ref(`${user.uid}/${image.name}`)
      .put(image)
    const url = await imageUpload.ref.getDownloadURL()
		const data: CardProps = {
			name: user.displayName || '',
			profilePic: user.photoURL || '',
			uid: user.uid,
			media: {
				title,
				image: url,
				tags: ['test'],
			},
			date: new Date().getMilliseconds(),
		}
		await firebase.firestore().collection('posts').add(data)
	}
}
