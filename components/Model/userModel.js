import UserSchema from "./userSchema.js";

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
