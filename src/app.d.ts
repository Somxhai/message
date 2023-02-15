// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: import("firebase-admin/auth").DecodedIdToken | null;
    }
    interface PageData {
      session: import("$lib/types").Session;
      userStore?: import('$lib/types').FireStoreData;
      user?: import("firebase-admin/auth").UserRecord;
    }
    // interface Platform {}
  }
}

export {};
