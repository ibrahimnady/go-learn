'use client'
import Link from 'next/link'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


function Intro() {


  return (
    <div>
      <head>
        <title>Go Learn | Intro</title>
      </head>
      <Box sx={{ marginTop: "60px" }}>
        <Link href="/Subjects">go</Link>
        <Typography variant="body1" color="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero consequatur sit quidem esse, sint nostrum enim dignissimos nulla natus rerum consectetur nisi magnam molestiae quam cupiditate aspernatur at tempora!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, libero est id dolore asperiores animi vero sapiente possimus facilis voluptatem fuga perferendis consequatur quisquam quam architecto doloremque facere a ex.
        </Typography>
      </Box>
    </div>



  )
}

export default Intro