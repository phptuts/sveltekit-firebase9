import { initializeApp, getApps } from 'firebase/app';
import config from './env';
import { getFirestore } from 'firebase/firestore';

export function getFirebase() {
	if (getApps().length == 0) {
		initializeApp(config.firebase);
	}

	return { db: getFirestore() };
}
