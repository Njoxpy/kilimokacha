import { AnnouncementContext } from "../context/AnnouncementContext";
import { useContext } from "react";

// create hook function
export const useAnnouncementContext = () => {
    // pass workout context object
    const context = useContext(AnnouncementContext)

    // check if no value
    if (!context) {
        throw new Error("use context must be inside the context provider");

    }
    // return state of announcement context
    return context
}