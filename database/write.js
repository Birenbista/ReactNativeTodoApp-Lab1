import {
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from 'firebase/firestore'
import { db } from './config'

export async function save(data) {
    try {
        const dbCollection = collection(db, 'tasks')
        const docRef = await addDoc(dbCollection, data)
        return docRef.id
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export async function update(id, data) {
    try {
        const docRef = doc(db, 'tasks', id)
        await updateDoc(docRef, data)
        return true
    } catch (e) {
        return false
    }
}

export async function remove(id) {
    try {
        const docRef = doc(db, 'tasks', id)
        await deleteDoc(docRef)
        return true
    } catch (e) {
        return false
    }
}
