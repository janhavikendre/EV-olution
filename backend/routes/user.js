const {Router} = require('express');
const { z } = require('zod');
const { userModel } = require('../db');
const UserRouter = Router();
const bcrypt = require('bcryptjs')
const { Jwt_user_secrte} = require('../config')
const jwt = require('jsonwebtoken')

UserRouter.post('/signup', async (req, res) => {
    try {
        const requiredbody = z.object({
            email:z.string().min(3).max(100).email(),
            password:z.string().min(1).max(30),
            firstname:z.string().min(3).max(30),
            lastname:z.string().min(3).max(100),
            image:z.string().optional()
        })

        const parsedbody = await requiredbody.safeParse(req.body);

        if(!parsedbody.success) {
            res.status(404).json({
                message :"You have entered wrong input",
                error : parsedbody.error
            })
            return
        }

        const {email,password,firstname,lastname,image} = req.body;
        const hashedpassword =await bcrypt.hash(password,5)

        const user = await userModel.create({
            email,
            password:hashedpassword,
            firstname,
            lastname,
            image
        })

        const token = await jwt.sign({
            id:user._id
        },Jwt_user_secrte)

        res.status(200).json({
            alert:"Password verified successfully",
            message:'You have logged in',
            user,
            id:user._id,
            token:token,
        })

 }catch(e){
     console.error(e)
 }
})

module.exports = {
    UserRouter
}

