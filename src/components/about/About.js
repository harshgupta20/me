import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import classNames from 'classnames';


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> <br/>$ </span>
                <span style={{ fontSize: '1rem' }}>{info.bio}</span>
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul style={{ fontSize: '1rem' }} className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul style={{ fontSize: '1rem' }} className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }
    function experienceText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                experience</p>
                <p>
                    <span style={{ color: info.baseColor }}>experience <span
                        className={Style.green}>(main)</span> $</span> ls
                </p>
                <p style={{ color: info.baseColor, fontSize: '1rem', marginTop: '1rem' }}>- MindIT Systems [1.5 Years]</p>
                <p style={{ fontSize: '1rem' }}><span style={{color: info.baseColor}}>Position</span>: Software Engineer</p>
                <ul style={{ fontSize: '1rem', marginTop: '.5rem' }}>
                        <li><span style={{color: info.baseColor}}>#</span>Designed and implemented reusable UI structures and theme modules, improving development efficiency by
                        40%.</li>
                        <li><span style={{color: info.baseColor}}>#</span> Created scalable backend architecture and database schemas for Airtime software, including API documenta
                        tion that reduced on-boarding time by 2x.</li>
                        <li><span style={{color: info.baseColor}}>#</span> Implemented security best practices in APIs, reducing vulnerabilities by 40% and ensuring compliance with
                        industry standards.</li>
                </ul>

                <p style={{ color: info.baseColor, fontSize: '1rem', marginTop: '1rem' }}>- Pixxmo [3 Months]</p>
                <p style={{ fontSize: '1rem' }}>Position: Web Developer Intern</p>
                <ul style={{ fontSize: '1rem' }}>
                        <li><span style={{color: info.baseColor}}>#</span> Built responsive, SEO-optimized websites and web applications, enhancing website traffic by 25%.</li>
                        <li><span style={{color: info.baseColor}}>#</span> Streamlined development cycles by collaborating with designers and managers to ensure timely delivery of
                        production-ready applications.</li>
                        <li><span style={{color: info.baseColor}}>#</span> Developed reusable UI components, reducing development time for future projects by 40%.</li>
                </ul>

        </>;
    }

    function miscText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul style={{ fontSize: '1rem' }}>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
                width={{ xs: '90%', md: '80%' }} borderRadius={'0.5rem'} mb={'4rem'}>

                <Terminal text={aboutMeText()} title={'who is harsh'} />
            </Box>
            <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={"10px"} component={'section'} className={classNames(Style.terminal, Style.shadowed)}
                width={{ xs: '90%', md: '80%' }} borderRadius={'0.5rem'} mb={'4rem'}>
                <Box width={{ xs: '100%', md: '50%' }}>
                    <Terminal text={experienceText()} title={'experience'} />
                </Box>
                <Box width={{ xs: '100%', md: '50%' }}>
                    <Terminal text={skillsText()} title={'skills'} />
                </Box>
            </Box>

            <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
                width={{ xs: '90%', md: '80%' }} borderRadius={'0.5rem'} mb={'4rem'}>

                <Terminal text={miscText()} title="hobbies" />
            </Box>
        </Box>
    )
}