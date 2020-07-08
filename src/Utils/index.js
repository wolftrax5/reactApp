// email valitator
export const isEmail = (email) => {
    if (!email.match(/^[a-z0-9_]+\+?[a-z0-9]*@[a-z0-9_]+\.[a-z]{2,6}$/i)) {
      // console.error(`${email} Is not a valid e-mail`);
      return false;
    }
    return true;
  };