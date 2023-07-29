export const email_validation = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const url_validation = url => {
  // if (/^https?:\/\/[a-zA-Z0-9-]+\.[a-z]+$/.test(url)) {
  //   return true;
  // } else {
  //   return false;
  // }

  // const valid = /^https:\/\/(www\.)?[^\s/$.?#].[^\s]*$/;
  // return valid.test(url);

  // const regex = new RegExp(
  //   '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
  // );
  // return regex.test(url);

  var secureUrlPattern = /^https:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  if (secureUrlPattern.test(url)) {
    return true;
  } else {
    return false;
  }
};

export const empty_validation = inputs => {
  let flag = true;
  for (let index = 0; index < inputs.length; index++) {
    if (inputs[index] === '' || inputs[index] === '') {
      flag = false;
    }
  }
  return flag;
};

//

//
export const number_validation = number => {
  return !isNaN(number);
};
export const number_validation_1 = number => {
  return !(isNaN(number) || number > 120 || number < 1);
};
