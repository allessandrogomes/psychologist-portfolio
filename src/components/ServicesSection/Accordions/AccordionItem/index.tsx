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
                sx={{ fontSize: "2rem" }}
            >
                <Typography sx={{ mt: "13px", mr: "10px" }} component="span">{icon}</Typography>
                {title}
            </AccordionSummary>
            <AccordionDetails>{description}</AccordionDetails>
        </Accordion>
    )
}