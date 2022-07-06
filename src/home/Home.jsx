import React, { useEffect } from 'react';
import "./Home.css";
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from "yup";
import { LocalDining } from '@mui/icons-material';


export default function Home() {

    // const content_initial = [
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     }
    // ];
    
    

    // const recent_initial = [
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     },
    //     {
    //         title: "Trekking in the Himalayas",
    //         description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
    //         author_name: "Kathy",
    //         author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //         date: "4th May",
    //         estimated_time2read: 10,
    //         tag: "Trekking",
    //         contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //         read: 120,
    //         share: 100
    //     }
    // ];
    
    // const[recent, setRecent] = useState(recent_initial);

    
    useEffect(()=>{
        fetch("https://62aaf0f8a62365888bd041ae.mockapi.io/normal")
        .then((data)=>data.json())
        .then((data)=>setContent(data))
    },[])

    const[content, setContent] = useState(null);
    
    const trending_content_initial = [
        {
            title: "Trekking in the Himalayas",
            description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
            author_name: "Kathy",
            author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
            date: "4th May",
            estimated_time2read: 10,
            tag: "Trekking",
            contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
            read: 120,
            share: 100
        },{
            title: "Trekking in the Himalayas",
            description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
            author_name: "Kathy",
            author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
            date: "4th May",
            estimated_time2read: 10,
            tag: "Trekking",
            contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
            read: 120,
            share: 100
        },{
            title: "Trekking in the Himalayas",
            description: "The Great Himalaya Trail is a route across the Himalayas from east to west. The original concept of the trail was to establish a single long distance trekking trail from the east end to the west end of Nepal that includes a total of roughly 1,700 kilometres (1,100 mi) of path",
            author_name: "Kathy",
            author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
            date: "4th May",
            estimated_time2read: 10,
            tag: "Trekking",
            contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
            read: 120,
            share: 100
        }
    ];

    const[trendingcontent, setTrendingcontent] = useState(trending_content_initial);

  return (
    <div>
        <div className="leftchild">
            <div className="trending">
                <h3>Featured</h3>
                <p>Explore the most loved blogs</p>
                <div className="trendingparentcontainer">
                    {trendingcontent.map((ele,index) => <Trendingcomponent obj={ele} key={index} />)}
                </div>
            </div>
        </div>
        <div className="mainouterhomeflex">
            <div className="normalblogs">
                <h3>Travel Blogs</h3>
                <p>Hear out experiences from the community</p>
                {content ? content.map((ele,index) => <Normalcomponent obj={ele} key={index} /> ) : "Loading..."}
                <p style={{textAlign: "center"}}>view more</p>
            </div>
            <div className="rightchilds">
                <div className='child1'>
                    <h3 style={{display:"flex", alignItems: "center"}}>Discover by tags <i class="fa-solid fa-tags" /></h3>
                    <p>Explore more of what matters to you</p>
                    <Rightchild1 />
                </div>
                {/* <div className="child2">
                    <h3>Recent Blogs</h3>
                    {recent.map((ele,index) => <Rightchild2 obj={ele} key={index} />)}
                </div> */}
                <div className="child3">
                    <h3 style={{display:"flex", alignItems: "center"}}>Subscribe to our newsletter <MailOutlineIcon /></h3>
                    <p>Get updates delivered to your mailbox</p>
                    <Rightchild3 />
                </div>
            </div>
        </div>
    </div>
  )
}


function Rightchild1(){
    return(
        <div className="tagcontainer">
            <button>Caves</button>
            <button>Trekking</button>
            <button>Forts & Palaces</button>
            <button>Wildlife & Safari</button>
            <button>Pilgrimage</button>
            <button>Nature</button>
            <button>Beaches</button>
            <button>Nature</button>
            <button>River rafting</button>
        </div>
    )
}

function Rightchild2({obj}){
    return(
        <div className="recentcontainer">
            <p style={{display:"flex", alignItems: "center"}}><img className='authorimage' src={obj.author_image} alt={obj.author_name} /> {obj.author_name}</p>
            <h4>{obj.title}</h4>
        </div>
    )
}

function Rightchild3(){

    const emailschema = yup.object({
        email: yup.string().email().required()
    })

    const formik = useFormik({
        initialValues: {email: ""},
        validationSchema: emailschema,
        onSubmit: (values) => {
            alert(`${values.email} succesfully subscribed`);
        }
    })

    return(
        <form style={{display:"flex", flexDirection: "column", gap: "20px"}} className="newslettercontainer" onSubmit={formik.handleSubmit}>
            <TextField
                error = {formik.touched.email && formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="standard-error-helper-text"
                label="Enter your email"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                variant="standard"
                name="email"
            />
            <button type='submit'>Subscribe</button>
        </form>
    )
}


function Trendingcomponent({obj}){
    
    return(
        <div className="trendingcomponent">
            <img className='mainpic' src={obj.contentimage} alt={obj.title} />
            <div className="othercontent">
                <div className="trendingtopcol">
                    <p style={{display:"flex", alignItems: "center"}}><i class="fa-solid fa-tags" />  {obj.tag}</p>
                    <p style={{display:"flex", alignItems: "center"}}><AccessTimeIcon /> {obj.estimated_time2read + " min read"}</p>
                    <p style={{display:"flex", alignItems: "center"}} className='date'><CalendarMonthIcon /> {obj.date}</p>
                </div>
                <div className="trendingmidcol">
                    <h3 style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}>{obj.title} <BookmarkAddOutlinedIcon /></h3>
                    <p>{obj.description.slice(0,180)}.....</p>
                </div>
                <div className="trendingbotcol">
                    <p style={{display:"flex", alignItems: "center"}}><img className='authorimage' src={obj.author_image} alt={obj.author_name} /> {obj.author_name}</p>
                    <p style={{display:"flex", alignItems: "center"}} className='read'><AutoStoriesIcon /> {obj.read} reads</p>
                    <p style={{display:"flex", alignItems: "center"}} className='share'><ShareIcon /> {obj.share}</p>
                </div>
            </div>
        </div>
    )
}


function Normalcomponent({obj}){

    const navigate = useNavigate();

    return(
        <div className='parenttonormal'>
            <div className="normalcomponent">
                <div className="normalcomponentleftchild">
                    <div className="topcol">
                        <img className='authorimage' src={obj.author_image} alt={obj.author_name} />
                        <p className='authorname'>{obj.author_name}</p>
                        <p style={{display:"flex", alignItems: "center"}} className='date'><CalendarMonthIcon /> {obj.date}</p>
                    </div>
                    <div className="midcol">
                        <h3 onClick={()=> navigate(`/open-an-article/${obj.id}`)}>{obj.title}</h3>
                        <p>{obj.des1}.....</p>
                    </div>
                    <div className="botcol">
                        <p style={{display:"flex", alignItems: "center"}}><i class="fa-solid fa-tags" />  {obj.tag}</p>
                        <p style={{display:"flex", alignItems: "center"}}><AccessTimeIcon /> {obj.estimated_time2read + " min read"}</p>
                        <p style={{display:"flex", alignItems: "center"}}><BookmarkAddOutlinedIcon /> save post </p>
                    </div>
                </div>
                <div className="normalcomponentrightchild">
                    <img className='contentimage' src={obj.contentimage} alt={obj.title} />
                </div>
            </div>
            <hr />
        </div>
    )
}
