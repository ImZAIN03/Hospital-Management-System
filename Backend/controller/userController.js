import { catchAsyncErrors } from "./../middlewares/catchAsyncErrors";
import ErrorHander from "../middlewares/errorMiddleware.js";
import { User } from "../models/userSchema.js";

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
  } = req.body;
  if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !dob ||
        !nic ||
        !role 
    ){
        return next(new ErrorHander("Please Fill Full Form...", 400))
    }
    let user = await User.findOne({email});
    if (user) {
        return next(new ErrorHander("User is Already Registered...", 400))
    }
    user = await User.create({
        firstName,
    lastName,
    email,
    phone,
    password,
    gender,
    dob,
    nic,
    role,
    });
    res.status(200).json({
        success: true,
        message: "user registered...",
    });
});
