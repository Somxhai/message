export interface Session {
  user: {
    name: string;
    email: string;
    uid: string;
  } | null;
}

export interface Questions {
  [key: string]: string;
}

export type ContentType = {
  view: {
    name: string;
    properties: object;
    content: {
      html: string;
    };
  };
};


export type FireStoreData = {
  message: string
  content: string
  isRead: boolean
  isAllow: boolean
  isSend: boolean
}

export type ReturnBoolean = () => boolean
