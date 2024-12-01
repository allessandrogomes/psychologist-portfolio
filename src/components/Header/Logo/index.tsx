import { Typography } from "@mui/material";

interface ILogo {
    mobile?: boolean
}

const mobileStyle = {
    fontWeight: 800,
    color: "#2C363F",
    fontFamily: "Plus Jakarta Sans",
    textAlign: "center",
    padding: "20px 0",
}

export default function Logo({ mobile }: ILogo) {
    return (
        <Typography
            variant="h6"
            component="div"
            sx={mobile ? mobileStyle : {
                fontWeight: 800,
                color: "#2C363F",
                fontFamily: "Plus Jakarta Sans"
            }}
        >
            Ana C. Martins
        </Typography>
    )
}