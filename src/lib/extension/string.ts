declare global {
  interface String {
    toEmail(): string;
  }
}

String.prototype.toEmail = function () {
  return String(this) + "@confession.peak";
};

export {};
