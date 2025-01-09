import React from "react";
import { Container, Box, Typography, Grid2, Button } from "@mui/material";
import LandifyAppBar from "./LandifyAppBar";
import hero from '../../Assets/hero.png'
const Header = () => {
    return (
        <>
            <LandifyAppBar />
            <Container>
                <Grid2 container>
                    <Grid2 size={{ lg: 6, xs: 12 }}>
                        <Box sx={{
                            width: '100%',
                            marginTop: '104px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: '40px',
                            
                        }}>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: { lg: "60px", xs: '40px' },
                                lineHeight: "90px",
                                color: "#FFFFFF",
                                width: { lg: "465px", xs: '100%' },
                                height: "166px",
                                width: '100%'

                            }}>SaaS Landing Page Template</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                color: "#FFFFFF",
                                opacity: 0.4
                            }}>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</Typography>
                            <Button sx={{
                                background: "#F8D57E",
                                width: '175px',
                                height: '50px',
                                borderRadius: "15px",
                                color: '#333333',
                                position: 'relative',
                                top: '12px'
                            }}>Get started  </Button>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ lg: 6, xs: 12 }}>
                        <Box sx={{
                            marginTop: '77px',
                            background:'#333333',
                            width: { lg: "510px", xs: '100%' },
                            height: { lg: "446px", xs: 'auto' },
                            borderRadius:'15px',
                            display:'flex',
                            justifyContent:'center'

                        }}>
                            <Box sx={{
                                width: { lg: "500px", xs: '100%' },
                                height: { lg: "446px", xs: 'auto' },
                            }} component='img' src={hero}></Box>
                        </Box>
                    </Grid2>


                </Grid2>

            </Container>
        </>
    )
}

export default Header;