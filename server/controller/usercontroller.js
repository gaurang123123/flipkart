import User from '../model/userschema.js'
import {hashPassword,comparePassword} from '../helpers/authHelper.js'

export const userSignup = async (req,res) =>{
    try{
       const {firstname,lastname,email,phone,password} = req.body;
       console.log(req.body);
       if(!firstname) return res.send({message : 'Name is required'});
       if(!email) return res.send({message : 'Email is required'});
       if(!password) return res.send({message : 'Password is required'});
       if(!phone) return res.send({message : 'Phone is required'});
       const exist = await User.findOne({email})
       if(exist)
       {
        return res.status(200).send({message: 'User Already Exist'});
       }
       const hashedPassword = await hashPassword(password)

        
        const newuser = new User({firstname,lastname,email,phone,password : hashedPassword});
        await newuser.save();
        console.log(req.body);
       return res.status(201).send({message : "Signup Successfully Login to continue.." , newuser});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({message : error.message});
    }
}
export const userLogin = async (req,res) =>{
    try{
        const {email,password} = req.body;
        console.log(req.body)
        if(!email || !password)
        {
            return res.status(200).send({
                success : false,
                message : 'Invalid email or password',
            })
        }
        const user = await User.findOne({email});
        if(!user)
        {
            return res.send({
                success : false,
                message : 'Email is not registered',
            })
        }
        const match = await comparePassword(password,user.password);
        if(!match)
        {
            return res.status(200).send({
                success : false,
                message : 'Invalid password',
            })
        }
        // const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(206).send({
            success : true,
            message : 'login successful',
            user: {
                _id : user._id,
                name : user.name,
                firstname : user.firstname,
                email : user.email,
                phone : user.phone,
                address: user.address,
                role : user.role
            },
            // token,
        })
     
    }catch(error)
    {
        console.log(error);
        res.status(500).json({message : error.message});
    }
}
export const testController = (req,res) =>{
    console.log("test")
    res.send('protected')
}
