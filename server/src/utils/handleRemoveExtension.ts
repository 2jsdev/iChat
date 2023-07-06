const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

export default removeExtension;
