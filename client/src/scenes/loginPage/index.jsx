import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';


export default function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1010px)");

  return (
    <>
      <Box>
        <Box>
          <Typography
            fontWeight={"bold"}
            fontSize={"32px"}
            color={"primary"}
          >
            شبکه اجتماعی
          </Typography>
        </Box>
      </Box>
    </>
  )
}
