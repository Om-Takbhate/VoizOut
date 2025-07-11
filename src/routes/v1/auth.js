import express from "express"
import { loginController, logoutController, signUpController } from "../../controllers/v1/auth.js"

const router = express.Router()

router.post("/signup", signUpController)
router.post("/login", loginController)
router.post("/logout", logoutController)


export default router