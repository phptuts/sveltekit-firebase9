import { collection, getDocs } from '@firebase/firestore';
import { getFirebase } from './firebase';
import type { Book } from './model';

export async function getBooks(): Promise<Book[]> {
	const { db } = getFirebase();
	const colRef = collection(db, 'books');
	const snapshot = await getDocs(colRef);

	return snapshot.docs.map((b) => {
		const data = b.data();

		return {
			id: b.id,
			title: data['title'],
			author: data['author']
		};
	});
}
