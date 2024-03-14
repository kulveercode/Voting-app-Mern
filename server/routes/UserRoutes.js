import { Router } from "express";
import { jwtAuthMiddleware } from "../middleware/AuthMiddelware.js" ;
import { signupUser, loginUser, profile, updateUser } from "../controllers/Usercontrollers.js";
const router = Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.get('/profile',jwtAuthMiddleware,profile)
router.put('/profile/password',jwtAuthMiddleware,updateUser)

export default router
