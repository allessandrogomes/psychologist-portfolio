import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from "@/themes/mui-themes"
import { ThemeProvider } from '@mui/material/styles';
import "@/app/globals.scss"

// $color1: #E9EFEC;
// $color2: #2C363F;

export default function Accordions() {
    return (
        <div>

            <Accordion sx={{ color: "#E9EFEC", backgroundColor: "#2C363F" }}>
                <ThemeProvider theme={theme}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ fontSize: "2.5rem", fontFamily: "Plus Jakarta Sans" }}
                    >
                        Terapia Individual
                    </AccordionSummary>
                </ThemeProvider>
                <AccordionDetails>
                    Na terapia individual, ofereço um espaço seguro e confidencial para que você possa explorar seus sentimentos, desafios e metas. Juntos, trabalharemos em estratégias personalizadas para promover seu bem-estar emocional, autoconhecimento e superação de dificuldades.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ color: "#E9EFEC", backgroundColor: "#2C363F" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ fontSize: "2.5rem" }}
                >
                    Terapia de Casal
                </AccordionSummary>
                <AccordionDetails>
                    A terapia de casal é voltada para ajudar parceiros a melhorar a comunicação, resolver conflitos e fortalecer o vínculo. Através de sessões colaborativas, trabalhamos na construção de um relacionamento mais saudável e harmonioso.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ color: "#E9EFEC", backgroundColor: "#2C363F" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ fontSize: "2.5rem" }}
                >
                    Aconselhamento Psicológico
                </AccordionSummary>
                <AccordionDetails>
                    O aconselhamento psicológico oferece apoio em momentos de crise ou transição. Seja para lidar com ansiedade, estresse ou tomada de decisões importantes, estou aqui para ajudá-lo a encontrar clareza e equilíbrio para seguir em frente.
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
