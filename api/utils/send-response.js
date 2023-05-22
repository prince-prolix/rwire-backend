export const badRequestError = ({
  status = 400,
  defaultMessage = "bad request , check",
  message = "",
}) => {
  let error = new Error(defaultMessage + " : " + message);
  error.status =status;
  return error;
};

export const serverError = ({
  status = 500,
  message = "server error"
}) => {
  let error = new Error(message);
  error.status =status;
  return error;
};
