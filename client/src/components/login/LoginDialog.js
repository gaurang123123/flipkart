
import { Dialog, TextField, Box, Button, Typography, styled } from "@mui/material";
import { useState , useContext} from "react";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
const Component = styled(Box)`
  height: 68vh;
  width: 90vh;
  display: flex;
`
const Image = styled(Box)(({theme}) =>({
  background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 60% no-repeat',
height: '81%',
width: '30%',
padding: '45px 25px',
color: 'white',
fontWeight: 'bold',
display : 'block',
[theme.breakpoints.down('md')]:{
  display : 'none',
}

}))
 

const Wrapper = styled(Box)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 35px',
  flex: '1',
  '& > div, & > button, & > p': {
    marginTop: '20px'
  },
  [theme.breakpoints.down('md')]:{
    width : '40px'
  }
}))
 

const LoginButton = styled(Button)(({theme}) =>({

  textTransform: 'none',
  background: '#fb641b',
  color: '#fff',
  height: '40px',
  borderRadius: '2px',
  [theme.breakpoints.down('md')]:{
    width : '40px'
  }
}))


const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Box)`
  font-size: 12px;
  color: #878787;
`;
const Create = styled(Button)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
`;
const signupInitialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password:""
}
const loginInitialValues = {
  email : "",
  password : ""
}
const LoginDialog = ({ open, setOpen }) => {
  // const navigate = useNavigate();
  // const [auth,setAuth] = useAuth()
  const [account, toggleAccount] = useState(true);
  const [signup,setSignup] = useState(signupInitialValues);
  const [login,setLogin] = useState(loginInitialValues);
  const {setAccount} = useContext(DataContext);
  const onToggle = () => {
    console.log("inside");
    toggleAccount(false);
  };
  const onToggle2 = () => {
    toggleAccount(true);
  };
  const handleclose = () => {
    setOpen(false);
    // toggleAccount(true);
  };
  const onInputChange = (e) =>{
    setSignup({...signup,[e.target.name]: e.target.value})
      // console.log(signup);
  }
  const onValueChange = (e) =>{
     setLogin({...login,[e.target.name]:e.target.value});
  }
  const loginUser = async () =>{
   let response =  await authenticateLogin(login);
   console.log(response);
   if(response)

   {

    if(response.status === 200)
    {
      alert(response.data.message)
    }
    else if(response.status === 206)
    {
      handleclose();
      setAccount(response.data.user.firstname)
    localStorage.setItem('auth' , JSON.stringify(response.data))

    }

   }
  //  if(response.data.success === true)
  //  {
  //   handleclose();
  //   // setAuth({
  //   //   ...auth,
  //   //   user : response.data.user,
  //   //   token : response.data.token
  //   // })
  //   localStorage.setItem('auth' , JSON.stringify(response.data))

  //  }
  }
  const signupuser = async () =>{
    console.log(signup);
   let res =   await authenticateSignup(signup);
   console.log(res)
   if(res)
   {
    if(res.status === 201)
    {
      alert(res.data.message);
      toggleAccount(true);
    }
    else if(res.status === 200)
    {
      alert(res.data.message);
    }
    else if(res.response.status === 404)
    {
      alert("Something went Wrong")
    }
   }
  // if(res){
  //   if(res.status === 201)
  //   {
  //     alert(res.data.message);
  //     toggleAccount(true);
  //   }
  //   else if(res.status === 200)
  //   {
  //     alert(res.data.message);
     
  //   }
  // }
  // else if(res.st){
  //   alert(res.data.message)
  // }
  // if(res)
  // {
  //   handleclose();
  //   setAccount(signup.firstname)
  // }
  }
  return (
    <Dialog
      open={open}
      onClose={handleclose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image>
        {
            account ?   <>
            <Typography variant="h5">Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              Get access to your orders,wishlist and Recommendation
            </Typography>
            </>: 
            <>
             <Typography variant="h5">Looks like you're new here!</Typography>
              <Typography style={{ marginTop: 20 }}>
               Sign up with your mobile number to get started.
              </Typography>
            </>
             
        }
        </Image>
        {account ? (
          <Wrapper>
            <TextField
              variant="standard" onChange={(e) => {onValueChange(e)}}
              name="email"
              type="email"
              label="Enter Email/Mobile number" 
            ></TextField>
            <TextField variant="standard" type="password" name="password" onChange={(e) => {onValueChange(e)}} label="Enter Password"></TextField>
            <Text>
              By continuing, you agree to our Terms of use and Privacy Policy.
            </Text>
            <LoginButton onClick={() =>{loginUser()}}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>Or</Typography>
            <OtpButton>REQUEST OTP</OtpButton>
            <Create
              onClick={() => {
                onToggle();
              }}
            >
              New to Flipkart? Create an Account
            </Create>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField variant="standard" onChange={(e) => {onInputChange(e)}} name="firstname" label="Enter Firstname"></TextField>
            <TextField variant="standard" onChange={(e) => {onInputChange(e)}}  name="lastname" label="Enter LastName"></TextField>

            <TextField variant="standard" onChange={(e) => {onInputChange(e)}} type="email" name="email"label="Enter Email"></TextField>

            <TextField variant="standard" onChange={(e) => {onInputChange(e)}}  name="phone"  label="Enter Phone"></TextField>

            <TextField variant="standard" onChange={(e) => {onInputChange(e)}} type="password" name="password"  label="Enter Password"></TextField>
            <LoginButton onClick={()=>signupuser()}>SignUp</LoginButton>
            <Typography style={{ textAlign: "center" , marginTop : -2}}>Or</Typography>
            <Create style={{marginTop : -10}}onClick={() => {onToggle2()}}>Already have account? Login </Create>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
