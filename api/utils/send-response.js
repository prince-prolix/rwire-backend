export const badRequest = ({
  status = 400,
  defaultMessage = "bad request , check",
  message = "",
  response,
}) => {
  response.status(status).json({ message: defaultMessage + " : " + message });
};

export const serverError = ({
  status = 500,
  message = "server error",
  response,
}) => {
  response.status(status).json({ message });
};
