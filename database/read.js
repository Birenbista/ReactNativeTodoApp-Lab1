import { collection, getDocs } from 'firebase/firestore'
import { db } from './config'

export async function load() {
    const data = []
    const querySnapshot = await getDocs(collection(db, 'tasks'))
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id,
        })
    })
    return data
}
