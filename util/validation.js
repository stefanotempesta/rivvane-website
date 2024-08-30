function isEmpty(value) {
  return !value || value.trim() === "";
}
function userCredentailsAreValid(email, password, name, street, city, postal) {
  return (
    email && email.includes("@") && password && password.trim().length >= 6
  );
}

function userDetailsAreValid(email, password, name, street, postal, city) {
  return (
    userCredentailsAreValid(email, password) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(city) &&
    !isEmpty(postal)
  );
}

function emailsconfirmed(email, confirmEmail) {
    return email === confirmEmail
}

module.exports = {
    userDetailsAreValid: userDetailsAreValid,
    emailsconfirmed: emailsconfirmed
}
