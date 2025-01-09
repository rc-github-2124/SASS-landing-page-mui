import React from "react";
import { Container, Box, Typography, Grid2 } from "@mui/material";
import Logos from '../../Assets/logos.png';
import productImage from '../../Assets/producimage.png';
import card1 from '../../Assets/card1.png'
import card2 from '../../Assets/card2.png'
import card3 from '../../Assets/card3.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import user from '../../Assets/user.png';
import Star from '../../Assets/start.png';
import { Button } from "@mui/material";
import f1 from '../../Assets/f1.png'
const About = () => {
    return (
        <>
            <Container sx={{ marginTop: '6rem', height: '100vh', }}>
                <Grid2 container>
                    <Grid2 size={12}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box component='div' sx={{
                                width: { lg: "931px", xs: "100%" },
                                height: '100px',
                                background: `url(${Logos}) no-repeat center`,
                                backgroundSize: { xs: 'contain', lg: '931px 100px' },
                                aspectRatio: 3 / 2
                            }}>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{

                                width: { lg: "1080px", xs: '100%' },
                                height: { lg: "600px", xs: 'auto' },
                                aspectRatio: { lg: '3/3', xs: '3/2' }
                            }} component="img" src={productImage}></Box>
                        </Box>

                    </Grid2>
                </Grid2>
            </Container>


            <Container sx={{
                marginTop: { lg: '4rem', xs: "-450px" }
            }}>
                <Grid2 container>
                    <Grid2 size={{ lg: 4, xs: 12 }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: { xs: '10px', lg: '1px' },
                  
                        }}>
                            <Box sx={{
                                width: '70px',
                                height: '70px',
                                marginTop: { xs: '100px', lg: '1px',md:'700px' }
                            }} component='img' src={card1}></Box>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                marginTop: '40px',
                            }}>Customizable card</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                opacity: 0.4
                            }}>
                                Custom your own card for your exact incomes and expenses needs.
                            </Typography>
                        </Box>

                    </Grid2>
                    <Grid2 size={{ lg: 4, xs: 12 }}>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: { xs: '10px', lg: '1px' }
                        }}>
                            <Box sx={{
                                width: '70px',
                                height: '70px',
                                marginTop: { xs: '100px', lg: '1px' }
                            }} component='img' src={card2}></Box>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                marginTop: '40px',
                            }}>No payment fee</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                opacity: 0.4
                            }}>
                                Transfer your payment all over the world with no payment fee.
                            </Typography>
                        </Box>


                    </Grid2>
                    <Grid2 size={{ lg: 4, xs: 12 }}>


                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: { xs: '10px', lg: '1px' }
                        }}>
                            <Box sx={{
                                width: '70px',
                                height: '70px',
                                marginTop: { xs: '100px', lg: '1px' }
                            }} component='img' src={card3}></Box>

                            <Typography sx={{
                                marginTop: '40px',
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF"
                            }}>All in one place</Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                textAlign: "center",
                                color: "#FFFFFF",
                                opacity: 0.4
                            }}>
                                Custom your own card for your exact incomes and expenses needs.
                            </Typography>
                        </Box>


                    </Grid2>
                </Grid2>
            </Container>




            <Container sx={{
                marginTop: '7rem'
            }}>
                <Grid2 container>
                    <Grid2 size={12}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Card sx={{
                                width: { lg: "1080px", xs: '100%' },
                                height: { lg: "460px", xs: '1080px' },
                                background: "#BFAFF2",
                                borderRadius: "20px",
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'

                            }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',

                                        }}>
                                            <Typography sx={{
                                                width: { lg: "756px", xs: '100%' },
                                                height: "160px",
                                                textAlign: 'center',
                                                fontFamily: "'Poppins'",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                fontSize: "24px",
                                                lineHeight: "40px",
                                                color: "#2B2B2B",
                                                textAlign: 'left'
                                            }} gutterBottom variant="h5" component="div">
                                                “Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”
                                            </Typography>
                                        </Box>


                                    </CardContent>
                                </CardActionArea>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    flexDirection: 'row',
                                    gap: '20px',
                                    marginTop: { lg: '63px', xs: '200px' },
                                    width: '72%'
                                }}>
                                    <Box component='img' sx={{
                                        height: '80px',
                                        width: '80px'
                                    }} src={user}></Box>

                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        justifyContent: 'center'
                                    }}>


                                        <Typography sx={{
                                            fontFamily: "'Poppins'",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            fontSize: "18px",
                                            lineHeight: "32px",
                                            color: "#2B2B2B",
                                            opacity: 0.4,
                                        }}>Johnny Owens</Typography>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            width: '132px'
                                        }}>
                                            <Box component='img' sx={{
                                                width: '20px',
                                                height: '20px'
                                            }} src={Star}></Box>
                                            <Box component='img' sx={{
                                                width: '20px',
                                                height: '20px'
                                            }} src={Star}></Box>
                                            <Box component='img' sx={{
                                                width: '20px',
                                                height: '20px'
                                            }} src={Star}></Box>
                                            <Box component='img' sx={{
                                                width: '20px',
                                                height: '20px'
                                            }} src={Star}></Box>
                                            <Box component='img' sx={{
                                                width: '20px',
                                                height: '20px'
                                            }} src={Star}></Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Card>
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>

            <Container sx={{ marginTop: '7rem' }}>
                <Grid2 container>
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'flex-start',
                            flexDirection:'column',
                            gap:'30px'
                       
                        }}>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "60px",
                                lineHeight: "90px",
                                color: "#FFFFFF"
                            }}>Questions? <br/>
                                Let’s talk </Typography>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: "18px",
                                lineHeight: "32px",
                                color: "#FFFFFF",
                                opacity: 0.4,
                            }}>Contact us through our 24/7 live chat. <br/> We’re always happy to help!</Typography>
                            <Button sx={{
                                background: "#F8D57E",
                                width: '175px',
                                height: '50px',
                                borderRadius: "15px",
                                color: '#333333',
                                position: 'relative',
                                top: '12px',
                            }}>Get started  </Button>
                        </Box>

                    </Grid2>
                    <Grid2 size={{ xs: 12, lg: 6 }}>
                        <Box component='img' src={f1} sx={{
                              width: {lg:"500px",xs:'100%'},
                              height: {lg:"400px",xs:'100%'},
                              marginTop:{lg:'0px',xs:'100px'}
                        }}></Box>

                    </Grid2>
                </Grid2>
            </Container>
        </>
    )
}

export default About;