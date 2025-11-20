import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

//http:/localhost:4000/api/user/register
userRouter.post('/register', registerUser)
//http:/localhost:4000/api/user/login
userRouter.post('/login', loginUser)
//http:/localhost:4000/api/user/credits
userRouter.post('/credit',userAuth, userCredits)

export default userRouter

