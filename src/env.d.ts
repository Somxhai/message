interface ImportMetaEnv {
  readonly VITE_APIKEY: string;
  readonly VITE_AUTHDOMAIN: string;
  readonly VITE_PROJECTID: string;
  readonly VITE_STORAGEBUCKET: string;
  readonly VITE_MESSAGINGSENDERID: string;
  readonly VITE_APPID: string;
  readonly VITE_MEASUREMENTID: string;

  readonly VITE_ADMIN_PROJECTID: string;
  readonly VITE_ADMIN_PRIVATEKEY: string;
  readonly VITE_CLIENT_EMAIL: string;

  readonly VITE_CONTENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
