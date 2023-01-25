export interface Session {
  user: {
    name: string;
    email: string;
    uid: string;
  } | null;
  isAdmin?: boolean
}

export interface Questions {
  [key: string]: string;
}

export type ContentType = {
  view: {
    name: string;
    properties: Properties;
    content: {
      html: string;
    };
  };
};

export type FireStoreData = {
  message: string;
  content: string;
  isRead: boolean;
  isAllow: boolean;
  isAdmin?: boolean;
};

export type Collections = {
  uid: string;
  userdata: FireStoreData;
};

export type Properties = {
  thankful: boolean;
  special: boolean;
  glad: boolean;
  goodluck: boolean;
  want_to_know: boolean;
  seeyou: boolean;

  salim: boolean;
  stupid: boolean;
  notfriend: boolean;
  friend: boolean;
  sonteen: boolean;
  edok: boolean;
  kuy: boolean;
  ihere: boolean;
  axridge: boolean;
  dognature: boolean;
};

export type ReturnBoolean = () => boolean;
