import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import React from 'react';
import { useSelector } from "react-redux";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";

export default function HomePage() {
    const isNonMobileScreens = useMediaQuery("(min-width:1010px)");
    //const { _id, picturePath } = useSelector((state) => state.user);
    const picturePath = useSelector((state) => state?.user?.picturePath);
    const _id = useSelector((state) => state?.user?._id);

    return (
        <>
            <Box>
                <Navbar />
                <Box
                    width={"100%"}
                    p={"2rem 6%"}
                    display={isNonMobileScreens ? "flex" : "block"}
                    gap={"0.5rem"}
                    justifyContent={"space-between"}
                >
                    <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                        <UserWidget userId={_id} picturePath={picturePath} />
                    </Box>
                    <Box
                        flexBasis={isNonMobileScreens ? "42%" : undefined}
                        mt={isNonMobileScreens ? undefined : "2rem"}
                    >
                        <MyPostWidget picturePath={picturePath} />
                    </Box>
                    {isNonMobileScreens && <Box flexBasis={"26%"}></Box>}
                </Box>
            </Box>
        </>
    )
}
