
import { initFirebaseAdminApp } from "firebase-admin/app";
import { credential } from "firebase-admin";

export const serverApp = initFirebaseAdminApp({
    credential: credential.applicationDefault(),
});
