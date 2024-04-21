import React from 'react'
import {styled, Grid, Container, Typography, Button} from '@mui/material';
import Avatar from '../../../assets/avatar.jpeg';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

export default function Hero() {

  const BackgroundContainer = styled("div")(() =>({
    backgroundColor: 'black',
    height: "100vh"
  }))

  const StyledImg = styled("img")(() =>({
    borderRadius: '50%',
    width: '100%'
  }))
  
    return (
        <>
          <BackgroundContainer>
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <StyledImg src={Avatar}/>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography color='primary' variant='h1' textAlign='center'>Lucas Tenório</Typography>
                  <Typography color='primary' variant='h2' textAlign='center'>I'm a Software Engineer</Typography>
                  <Grid container>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                      <Button>
                        <DownloadIcon/>
                        Download CV
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Button>
                        <EmailIcon/>
                        Contact me
                      </Button>
                    </Grid>
                  </Grid>
                 
                </Grid>
              </Grid>
            </Container>
          </BackgroundContainer>
        </>
      );
  }
  
