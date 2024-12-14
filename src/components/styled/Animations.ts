import { keyframes } from "@mui/material";

export const fadeInAnimation = keyframes`
    0% {
        transform: translateY(-5%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`;
