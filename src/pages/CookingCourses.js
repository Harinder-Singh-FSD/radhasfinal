
import React from "react";
import CookingCardLower from "../components/CookingCardLower";

import CourseCardTop from "../components/CourseCardTop";






const CookingCourses = () => {
  return (
    <div style={{textAlign:'center'}}> 
      <span className="cooking-header">RADHA's COOKING COURSES</span>
      <hr/>
      <CourseCardTop/>
      <div style={{margin:'1.5rem'}}>
        <span className="tags" style={{textAlign:'center',display:"flex", alignItems: "center",justifyContent: "space-around"}}>
        <i class="fas fa-clock fa-2x" style={{fontSize:"15px" ,backgroundColor:"#ef5282",color:"white",padding:"10px",borderRadius:"10px",margin:"5px"}}>&nbsp; Courses offered: Saturdays and Sundays</i>
        <i class="fas fa-people-arrows fa-2x" style={{fontSize:"15px" ,backgroundColor:"#ef5282",color:"white",padding:"10px",borderRadius:"10px",margin:"5px"}}>&nbsp;In-person: Individual $45</i>
        <i class="fas fa-laptop fa-2x" style={{fontSize:"15px" ,backgroundColor:"#ef5282",color:"white",padding:"10px",borderRadius:"10px",margin:"5px"}}>&nbsp;Via Zoom: $30</i>
        <i class="fas fa-users fa-2x" style={{fontSize:"15px",fontSize:"15px" ,backgroundColor:"#ef5282",color:"white",padding:"10px",borderRadius:"10px",margin:"5px"}}>&nbsp;Group/Public via Zoom: Coming soon</i>
        </span>
      </div>
    <CookingCardLower/>
    
    </div>

  );
};

export default CookingCourses;
