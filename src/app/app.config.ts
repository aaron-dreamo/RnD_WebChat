import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"woody-blast-test","appId":"1:565831446885:web:18d6211ac4c0021494f18c","storageBucket":"woody-blast-test.appspot.com","locationId":"asia-northeast3","apiKey":"AIzaSyCO5FtSCSOJuN1Ij1u-5358I6LEVyEg7wo","authDomain":"woody-blast-test.firebaseapp.com","messagingSenderId":"565831446885"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(provideStorage(() => getStorage()))
  ],
};
