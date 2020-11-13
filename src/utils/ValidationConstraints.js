export const requiredValidation = {
  presence: {
    allowEmpty: false,
    message: "^This field is required",
  },
};

export const emailValidation = {
  email: {
    message: "^This is not a valid email",
  },
};

export const passwordValidation = {
  presence: {
    allowEmpty: false,
    message: "^Password is required",
  },
};
