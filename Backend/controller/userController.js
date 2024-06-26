import { catchAsyncErrors } from "./../middlewares/catchAsyncErrors.js";
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

export const login = catchAsyncErrors(async(req,res,next) => {
    const {email, password, confirmPassword, role} = req.body;
    if(!email || !password || !confirmPassword || !role) {
        return next(new ErrorHander("Please Provide All Details..", 400))
    }
    if(password !== confirmPassword) {
        return next(new ErrorHander("Password and Confrim Password Must Match...", 400))
    }
    const user = await User.findOne({email}).select("+password")
    if(!user) {
        return next(new ErrorHander("Invalid Password or Email...", 400))
    }
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched) {
        return next(new ErrorHander("Invalid Password or Email...", 400))
    }
    if(role !== user.role){
        return next(new ErrorHander("User with this role not found...", 400))
    }
    res.status(200).json({
        success: true,
        message: "user Logged In successfully...",
    })
})
