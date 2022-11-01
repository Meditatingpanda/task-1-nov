import { Avatar, Box, Typography } from "@mui/material";
import React, { FC } from "react";


const Card: FC<any> = ({name,url,image,lazy}) => {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        width: !lazy? "10rem":'100%',
        borderRadius: "10px",
      }}
      m={1}
      boxShadow={3}
    >
      <Avatar
        alt={name}
        src={image}
      />
      <Typography>{name}</Typography>
    </Box>
  );
};

export default Card;
