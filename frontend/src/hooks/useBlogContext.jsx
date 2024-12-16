import { BlogContext } from "../context/BlogContex"
import { useContext } from "react"


export const useBlogsContext = () => {
    const context = useContext(BlogContext)

    if (!context) {
        throw new Error("useBlog context must be used inside a blogContext provider");
    }

    return context
}