import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpg';
import classNames from 'classnames';
// import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function Home() {

   function openLinkInNewTab(url) {
      if (!url) {
        console.error("URL is required to open a new tab.");
        return;
      }
      
      const newTab = window.open(url, '_blank');
      
      if (newTab) {
        newTab.focus(); // Ensure the new tab is focused
      } else {
        console.error("Failed to open the link. It might be blocked by the browser's pop-up blocker.");
      }
    }
    

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'column'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName} {info.lastName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2 style={{fontSize: "23px", textAlign:'center'}}>{info.position}.</h2>
            {/* <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box> */}

            <p onClick={() => openLinkInNewTab('https://drive.google.com/drive/folders/1qUgPmpQFu9SoJceEhbmnj41AyXYCNVdA?usp=sharing')} style={{fontStyle: 'italic', textAlign:'center', marginTop: '1rem', padding: "10px 10px", backgroundColor: info.baseColor, color: 'black', borderRadius: '0.5rem', cursor: 'pointer'}}>My Resume</p>

            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} marginTop={'1.5rem'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}