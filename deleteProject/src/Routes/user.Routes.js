import  express  from "express";
import { register } from "../Controller/user.controller.js";
const router = express.Router()

router.route('/register').post(register)


export default router