
import { initializeApp, getApps, App } from "firebase-admin/app";
import { credential } from "firebase-admin";

let serverApp: App;

if (getApps().length === 0) {
    serverApp = initializeApp({
        credential: credential.applicationDefault(),
    });
} else {
    serverApp = getApps()[0];
}

export { serverApp };
