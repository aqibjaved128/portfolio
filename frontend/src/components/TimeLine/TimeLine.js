import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";


const TimeLine = ({timelines=[]}) => {
  return (
    <div>
     <Timeline position='alternate'>
         {
            timelines.map((item,index)=>(
                <TimeLineItem key={index}>
                <TimelineOppositeContent
                sx={{ m: "auto 0" }}              
                align="right"
                variant="body2"
                color="text.secondary"
               >
              {String(item.date).substr(0,10)}
               </TimelineOppositeContent>
               <TimelineSeparator>
                <TimelineConnector/>
                    <TimelineDot>
                    <Event/>
                    </TimelineDot>
                <TimelineConnector/>
               </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
            
            <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
                
               </TimelineContent>

                </TimeLineItem>
            ))
         }
     </Timeline>
      
    </div>
  )
}

export default TimeLine
