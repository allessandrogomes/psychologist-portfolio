import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ReactElement } from "react"

interface IAccordionItem {
    title: string,
    description: string,
    defaultExpanded?: boolean,
    icon: ReactElement
}

export default function AccordionItem({ title, description, defaultExpanded = false, icon }: IAccordionItem) {
    return (
        <Accordion defaultExpanded={defaultExpanded} sx={{ color: "#E9EFEC", backgroundColor: "#2C363F", boxShadow: 0 }}>
            
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#E9EFEC" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
                <Typography sx={{ mt: { md: "3px" }, mr: "10px" }} component="span">{icon}</Typography>
                {title}
            </AccordionSummary>
            <AccordionDetails sx={{ textAlign: "justify" }}>{description}</AccordionDetails>
        </Accordion>
    )
}