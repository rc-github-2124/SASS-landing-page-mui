import React from "react";
import { Container, Box, Typography, Grid2, Button, TextField } from "@mui/material";

const Footer = () => {
    return (
        <>
            <Container sx={{
                marginTop: '7rem',
                height: '200px'
            }}>
                <Box sx={{
                    background: "#FFFFFF",
                    opacity: 0.2,
                    borderRadius: "100px",
                }} component='hr'></Box>
                <Grid2 container>
                    <Grid2 size={{ lg: 8, xs: 12 }}>
                        <Box sx={{
                            marginTop: '54px'
                        }}>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "24px",
                                lineHeight: "24px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF"
                            }}>Wallet</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            marginTop: '44px',
                            width: '100%'
                        }}>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                width: '200px',
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "32px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF",
                            }}> © Wallet 2022</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                width: '200px',
                                fontSize: "18px",
                                lineHeight: "32px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF"
                            }}>Privacy policy</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                width: '200px',
                                fontSize: "18px",
                                lineHeight: "32px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF"
                            }}>Cookies policy</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                width: '200px',
                                lineHeight: "32px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF"
                            }}>Terms of use</Typography>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ lg: 4, xs: 12 }}>
                        <Box sx={{
                            marginTop: '63px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                display: "flex",
                                alignItems: "center",
                                color: "#FFFFFF"
                            }}>Updates right to your Inbox</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap:'24px',
                            width:'100%'
                        }}>
                            <TextField style={{
                                background: "#333333",
                                width: "301px",
                                height: "50px",
                                borderRadius: "15px",
                                marginTop: '15px'
                            }} placeholder="Email Address"></TextField>
                            <Button sx={{
                                                    marginTop: '20px',
                                background: "#BFAFF2",
                                borderRadius: "15px",
                                width: '175px',
                                height: '50px',
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#333333",
                                textTransform:'none'
                            }}>Send</Button>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </>
    )
}

export default Footer;