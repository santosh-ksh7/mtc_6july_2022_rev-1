// import "./Editarticle.css";

// import React from 'react'

// export default function Editarticle() {
//   return (
//     <div>Editarticle</div>
//   )
// }

import "./Editarticle.css";
import {useNavigate, useParams} from "react-router-dom";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function Editarticle() {

    const {id} = useParams();

    const[data2edit, setData2edit] = useState(null);

    useEffect(()=>{
        fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/normal/${id}`)
        .then((data) => data.json())
        .then((data)=> setData2edit(data))
    })

    return <div>{data2edit ? <Editform obj={data2edit} id={id} /> : "Loading......."}</div>
    
}



function Editform({obj, id}){

    const navigate =useNavigate();

    const createeditform = yup.object({
        contentimage: yup.string().required(),
        title: yup.string().required().min(5),
        description: yup.string().required().min(10),
        tag: yup.string().required(),
        date: yup.string().required(),
        author_name: yup.string().required(),
        des1: yup.string().required()
    })

    const formik = useFormik({
        initialValues: {contentimage: obj.contentimage, title: obj.title, description: obj.description, tag:obj.tag, date: obj.date, author_name:obj.author_name, des1: obj.des1 },
        validationSchema: createeditform,
        onSubmit: (value) =>{
            let newobj = {
                ...value,
                author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
                estimated_time2read: 10,
                read: 120,
                share: 100
            }
            fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/normal/${id}`,{
                method:  "PUT",
                body: JSON.stringify(newobj),
                headers: {
                    "content-type":"application/json"
                }
            }).then(()=>alert("Data succesfully uploaded"))
            .then(()=> navigate("/home"))
        }
    })

  return (
    <form style={{display:"flex", gap:"20px", flexDirection: "column", textAlign: "center", width: "900px", marginLeft: "200px"}}  onSubmit={formik.handleSubmit}>
        <h2>Blog your Story</h2>
        <TextField
          error={formik.touched.contentimage && formik.errors.contentimage}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contentimage}
          id="standard-error-helper-text"
          label="Enter image link"
          helperText={formik.touched.contentimage && formik.errors.contentimage ? formik.errors.contentimage : null}
          variant="standard"
          name="contentimage"
        />
        <TextField
          error={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          id="standard-error-helper-text"
          label="Title"
          helperText={formik.touched.title && formik.errors.title ? formik.errors.title : null}
          variant="standard"
          name="title"
        />
        <TextField
          error={formik.touched.description && formik.errors.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          id="standard-textarea"
          multiline
          label="Tell us your Story"
          helperText={formik.touched.description && formik.errors.description ? formik.errors.description : null}
          variant="standard"
          name="description"
        />
        <TextField
          error={formik.touched.des1 && formik.errors.des1}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.des1}
          id="standard-textarea"
          multiline
          label="A short description to your story"
          helperText={formik.touched.des1 && formik.errors.des1 ? formik.errors.des1 : null}
          variant="standard"
          name="des1"
        />
        <TextField
          error={formik.touched.tag && formik.errors.tag}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tag}
          id="standard-error-helper-text"
          label="Tag"
          helperText={formik.touched.tag && formik.errors.tag ? formik.errors.tag : null}
          variant="standard"
          name="tag"
        />
        <TextField
          error={formik.touched.date && formik.errors.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          id="standard-error-helper-text"
          label="Date"
          helperText={formik.touched.date && formik.errors.date ? formik.errors.date : null}
          variant="standard"
          name="date"
        />
        <TextField
          error={formik.touched.author_name && formik.errors.author_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.author_name}
          id="standard-error-helper-text"
          label="Author Name"
          helperText={formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : null}
          variant="standard"
          name="author_name"
        />
        <div className="btngroup">
            <Button variant="contained" type="submit">Upload Blog Post</Button>
        </div>
    </form>
  )
}