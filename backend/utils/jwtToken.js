export const sendToken = (user, statusCode, res, message) => {

  const token = user.getJWTToken();
  const options = {
    
    httpOnly:true, // Set httpOnly to true
    
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
