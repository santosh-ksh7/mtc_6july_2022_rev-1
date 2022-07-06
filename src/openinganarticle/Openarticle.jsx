import "./Openarticle.css";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShareIcon from '@mui/icons-material/Share';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



import React from 'react'

export default function Openarticle() {

    const {id} = useParams();
    console.log(id);

    const[singledata, setSingledata] =useState(null);

    useEffect(()=>{
        fetch(`https://62aaf0f8a62365888bd041ae.mockapi.io/normal/${id}`)
        .then((data)=>data.json())
        .then((data)=>setSingledata(data))
    },[])

  return (
    <div>
        {singledata ? <Renderarticle obj={singledata} /> : "Loading............."}
    </div>
  )
}


function Renderarticle({obj}){

    // let obj = {
    //     title: "Trekking in the Himalayas",
    //     description: "River rafting is the most in demand adventurous water sports in India. It has won several hearts from all around the world. Admirers of this adventure activity include not only domestic travellers but also international travellers from Japan, Korea and European countries.Rafting in Rishikesh has further boosted Uttarakhand Tourism with several other activities along with it. With the increasing number of adventurers participating in whitewater river expeditions in Rishikesh, the adventure tourism in Uttarakhand has set up a number of beach camps and forest camps for the convenience of tourists camping in Rishikesh. That sounds a perfect holiday in the foothill town of the Garhwal Himalaya, Rishikesh, which is also popular for its pilgrimages and yoga centers. The main course of rafting in Rishikesh commences from Kaudiyala, which is approximately 40 kilometers up by road from Rishikesh. The winding and splashing course with several whirlpools pass through popular sandy beaches like Byasi, Marine Drive, Shivpuri, and Brahmpuri. Irregular waves, rocks and many other obstacles await you when you are participating in white water rafting in the Ganges. The course includes 13 major and challenging rapids that ranges from grade II and III to IV+ with the prominent ones being Denial Dip, The Wall, Black Money, Cross Fire, Three Blind Mice, Return to Sender, Roller Coaster, Golf Course, Club House, Double Trouble, Hilton and Terminator.  ",
    //     author_name: "Kathy",
    //     author_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU",
    //     date: "4th May",
    //     estimated_time2read: 10,
    //     tag: "Trekking",
    //     contentimage: "https://miro.medium.com/max/700/1*2TvNVOwKhGBJoo-jejm5nA.jpeg",
    //     read: 120,
    //     share: 100
    // }

    return(
        <div className="articlecontainer">
            <div className="flexparent">
                <div className="leftchild1">
                    <div className="toprowinfo">
                        <p style={{display:"flex", alignItems: "center"}}><img className='authorimage' src={obj.author_image} alt={obj.author_name} />{obj.author_name}</p>
                        <p style={{display:"flex", alignItems: "center"}} className='date'><CalendarMonthIcon /> {obj.date}</p>
                        <p style={{display:"flex", alignItems: "center"}}><AccessTimeIcon /> {obj.estimated_time2read + " min read"}</p>
                        <p style={{display:"flex", alignItems: "center"}}><i class="fa-solid fa-tags" />  {obj.tag}</p>
                        <p style={{display:"flex", alignItems: "center"}}><AutoStoriesIcon />  {obj.read} reads</p>
                        <p style={{display:"flex", alignItems: "center"}}><ShareIcon />  {obj.share}</p>
                        <p style={{display:"flex", alignItems: "center"}}><BookmarkAddOutlinedIcon /></p>
                    </div>
                    <hr />
                    <div className="everythingelse">
                        <h2>{obj.title}</h2>
                        <img src={obj.contentimage} alt={obj.title} />
                        <p>{obj.description}</p>
                    </div>
                </div>
                <div className="rightchild">
                    <div className="child1">
                        <h5>About</h5>
                        <div>
                            <img src={obj.author_image} alt={obj.author_name} />
                            <p>{obj.author_name}</p>
                            <p>I’m a writer & travel addict originally from Uttrakhand. I have been traveling independently around India. I set up this blog to share my tips and experiences for traveling to inspire and help you to travel more too.</p>
                            <p style={{display:"flex", alignItems: "center", justifyContent: "space-between"}}><FacebookIcon/> <InstagramIcon/> <TwitterIcon/></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )

}