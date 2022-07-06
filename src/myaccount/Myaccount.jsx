import "./Myaccount.css";
import {useState, useEffect} from "react"
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom"
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react'

export default function Myaccount() {

    useEffect(()=>{
        fetch("https://62aaf0f8a62365888bd041ae.mockapi.io/normal")
        .then((data)=>data.json())
        .then((data)=>{
            let filtered = data.filter((ele) => ele.author_name==="santosh");
            setData(filtered);
            // console.log(filtered);
        })
    },[])

    const[data, setData] =useState(null)

    let initial_userinfo = {
        name: "Santosh",
        email: "vickyontheweb1998@gmail.com",
        mobile: 67213525428,
        gender: "male",
        password: "12345qwert"
    }

    const[info, setInfo] = useState(initial_userinfo);

    const[status, setStatus] = useState(false);

  return (
    <div>
        <h2>User Details <EditIcon onClick={()=>setStatus(!status)} /></h2>
        {status ? <Edit obj={info} setInfo={setInfo} setStatus={setStatus} status={status} /> : <Showuserdetails obj={info} />}
        <h2>My articles</h2>
        {data ? data.map((ele,index) => <Displaymyarticles obj={ele} key={index} setData={setData} /> ) : "Loading...."}
    </div>
  )
}


function Edit({obj,setInfo, setStatus,status}){

    const validatechange =  yup.object({
        name: yup.string().required().min(3),
        email: yup.string().email().required().min(3),
        mobile: yup.number().required().min(10),
        gender: yup.string().required(),
        password: yup.string().required().min(6)
    })

    const formik = useFormik({
        initialValues:{ 
            name: obj.name,
            email: obj.email,
            mobile: obj.mobile,
            gender: obj.gender,
            password: obj.password
        },
        validationSchema: validatechange,
        onSubmit: (value) => {
            setInfo(value)
            setStatus(!status)
            console.log(value);
        }
    })
    return(
        <form className="useredform" style={{display: "flex", flexDirection: "column", gap: "20px", width: "500px", marginBottom:"40px"}} onSubmit={formik.handleSubmit}>
            <TextField
                error={formik.touched.name && formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="standard-error-helper-text"
                label="Enter name"
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                variant="standard"
                name="name"
            />
            <TextField
                error={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="standard-error-helper-text"
                label="Enter email"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                variant="standard"
                name="email"
            />
            <TextField
                error={formik.touched.mobile && formik.errors.mobile}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="standard-error-helper-text"
                label="Enter mobile"
                helperText={formik.touched.mobile && formik.errors.mobile ? formik.errors.mobile : null}
                variant="standard"
                name="mobile"
            />
            <div>
                <p>Choose Gender</p>
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name="gender" id="Do not specify" />
                <label htmlFor="Do not specify">Do not specify</label>
            </div>
            <input type="password" value={formik.values.password} />
            <Button type="submit">Update info</Button>
        </form>
    )
}

function Showuserdetails({obj}){
    return(
        <div className="userdet">
            <p>Name: {obj.name}</p>
            <p>email: {obj.email}</p>
            <p>mobile: {obj.mobile}</p>
            <p>gender: {obj.gender}</p>
            <p>password: {obj.password}</p>
        </div>
    )
}



function Displaymyarticles({obj, setData}){

    const navigate = useNavigate();

    function del(){
        fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/normal/${obj.id}`,{
            method: "DELETE",
            headers:{
                "content-type" : "application/json"
            }
        }).then(()=>{
            fetch("https://62aaf0f8a62365888bd041ae.mockapi.io/normal")
            .then((data)=>data.json())
            .then((data)=>{
            let filtered = data.filter((ele) => ele.author_name==="santosh");
            setData(filtered);
            console.log(filtered);
        })
        })
    }

    return(
        <div className="myarticle">
            <h3>{obj.title}</h3>
            <p>{obj.des1}</p>
            <p><EditIcon onClick={()=> navigate(`/edit-article/${obj.id}`)} /> <DeleteIcon onClick={()=>del()} /></p>
        </div>
    )
}