import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as  Yup from "yup"




const Login=()=>{

    const paperStyle ={padding:"20px",width:"500px" , margin:"20px auto "}
    const avatarStyle= {backgroundColor:"skyblue"}
    const btnStyle= {margin:"8px 0"}
    const hStyle = { margin: 0 };

    const initialValues={
        username : "",
        password:"",
        remember:false,


    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Please Enter Valid Email").required("Required"),
        password: Yup.string().required("Required")
    });
    
    const onsubmit=(values,props)=>{
        console.log(values);
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
            
        }, 1000);

        // console.log(props);
    }
    return(



        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar  style={avatarStyle}>
                    <LockOutlinedIcon/>
                </Avatar>
               <h2>Sign in</h2>
                </Grid>

             <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema}>
                {(props)=>(
                    <Form>
                           <Field as={TextField}
                           name='username'
                style={{marginBottom:"8px"}}
                label="Username" placeholder='Enter Username' fullWidth required 
                helperText={<ErrorMessage name='username'/>}
                 ></Field>
                <Field as={TextField}
                name='password'
                style={{marginBottom:"8px"}}
                 type='password' 
                 label="Password" placeholder='Enter password' fullWidth required
                 helperText={<ErrorMessage name='password'/>}
                 ></Field>
                
                < Field as={FormControlLabel}
                name='remember'
                 required control={<Checkbox />} label="Remember Me" 
                 
                 />

                <Button type= 'submit' color="primary" variant='contained' 
                disabled={props.isSubmitting}
                style={btnStyle} fullWidth> {props.isSubmitting?"Loading" :"Login"}</Button>
                    </Form>
                )}
             </Formik>
                <Typography gutterBottom>
                <Link href="#">Forgot password</Link>
                </Typography>
                <Typography gutterBottom> Do you have an account 
                 <Link href="#" style={{marginLeft:"8px"}} >Sign up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login