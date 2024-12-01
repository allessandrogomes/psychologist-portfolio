import { Button } from "@mui/material";
import { Link } from "react-scroll";

interface IContactButton {
    mobile?: boolean
}

const buttonMobileStyle = {
    textTransform: "capitalize",
    color: "#2C363F",
    border: "2px solid #2C363F",
    borderRadius: 0,
    padding: 0,
    fontWeight: 600,
    width: "106px",
    height: "38px",
    mb: "20px"
}

export default function ContactButton({ mobile }: IContactButton) {
    return (
        <Button
            sx={ mobile ? buttonMobileStyle : {
                textTransform: "capitalize",
                color: "#2C363F",
                border: "2px solid #2C363F",
                borderRadius: 0,
                padding: 0,
                fontWeight: 600,
                width: "106px",
                height: "38px",
                display: { xs: "none", sm: "block" }
            }}
        >
            <Link
                role="button"
                aria-label="Scroll to respective Section"
                style={{ display: 'block', padding: "5px 0" }}
                to="contate"
                spy
                smooth
                duration={500}
                offset={0}
            >
                Contate
            </Link>
        </Button>
    )
}