export const addMessage = (message, newMessage) => {
  if (message.value.length > 0) message.value += ", ";
  message.value += newMessage;
};
