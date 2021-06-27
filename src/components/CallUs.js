import React,{useState} from 'react'
import {motion} from 'framer-motion'
const CallUs = () => {
    const [dialog,setDialog] = useState(true)
    return (
        // <div style={{backgroundColor:"orange",display: "flex", alignItems: "center",justifyContent: "center",padding:"10px",borderRadius:"50px" ,width:"fit-content"}}>
        //     <a href="/contact" ><motion.i class="fas fa-phone fa-2x"
        //     animate={{ rotate: 360 }}
        //     transition={{
        //       duration: 2,
        //       loop: Infinity,
        //       ease: "linear",
        //     }}></motion.i>&nbsp;  &nbsp;Call Now</a>
            
        // </div>
        
        <div style={{display:dialog?"flex":"none",alignItems:"center",width:"fit-content",height:"fit-content",backgroundColor:"#242b70",textAlign:"center",padding:"10px",color:"white",borderRadius:"1rem"}}>
            <div style={{display:"flex",alignItems:"center"}}><img src="https://www.w3schools.com/howto/img_avatar2.png"style={{width:"80px",height:"80px",border:"2px solid white",borderRadius:"40px"}} ></img>
            <div style={{margin:"0.5rem",textAlign:"center"}}>
            <h4>Mrs. Aradhana (RadhaRupa) Taank</h4>
            <p>Owner</p>
            <a href="+4407973179833" style={{color:"white"}}>(+44) 07973 179833</a>
            </div>
            </div>
            <div style={{margin:"1rem"}}>
            <motion.i class="fas fa-phone fa-2x"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              loop: Infinity,
              ease: "linear",
            }}></motion.i>
            </div>
        <h5>Call us today for pricing options and menu selection!</h5>
        <i class="far fa-times-circle fa-2x" onClick={()=>setDialog(!dialog)} style={{margin:"1rem"}}></i>
        </div>
      
    )
}

export default CallUs
