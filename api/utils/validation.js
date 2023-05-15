export const isSyntaxError = (message)=>{
  if (message === "syntax error") {
    return true;
  }else false;
}

export const isValidField = (field)=>{
    if(!field){
      console.log("flase");
      return false;
    }
    console.log("true");
    return true;
}