export const badRequest = ({
  status = 400,
  message = "malformed request ( check required fields and datatype )",
  response,
}) => {
  response.status(status).json({ message });
};

export const serverError = ({
  status = 500,
  message = "server error",
  response,
}) => {
  response.status(status).json({ message });
};
