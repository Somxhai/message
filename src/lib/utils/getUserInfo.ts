export const getNameFromEmail = (email: string | null):string => {
  if (email) {
    const regex = /@confession.peak/;
    return email.replace(regex, "");
  }
  return "";
};

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
