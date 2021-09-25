import React from "react";
import "../body/Body.css";
import { ImLocation2 } from "react-icons/im";
import { BsLink45Deg } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

const body = ({items, query}) => {
  return (
    ( query!=="")?
    <div className="body">

      
      
 <div className="body-container">
 <div className="body-1">
   <img src={items.avatar_url} alt="" className="body-1-image" />
 </div>

 <div className="body-2">
   <div className="octocat">
     <div className="f-size">
      {items.name} <div className="f-size-2">{items.id}</div>
     </div> 
      <div className='p-size'>Joined {items.created_at}</div>
   </div>

   <p className="f-size-3">{items.bio}</p>

   <div className="octacat-table">
     <p className="blur">
       Repos<p className="white">{items.public_repos}</p>
     </p>
     <p className="blur">
       Followers<p className="white">{items.followers}</p>
     </p>
     <p className="blur">
       Following<p className="white">{items.following}</p>
     </p>
   </div>
 
   <div className="octacat-links">
     <p className="white-g">
       <ImLocation2 className="icon-spacing" />
       San Francisco
       <p>
         <BsLink45Deg className="icon-spacing" />
         https://github.blog
       </p>
     </p>
     <p className="blur">
       <TiSocialTwitter className="icon-spacing" />
       Not Available
       <p className="white-g">
         <AiFillGithub className="icon-spacing" />
         agithub
       </p>
     </p>
   </div>
 </div>
</div>
</div> :<div className='noData'>"No data. please search something"</div>
      )}
  

export default body;
