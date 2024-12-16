import { ExpertAdviceContext } from "../context/ExpertAdviceContext"
import { useContext } from "react"

export const useExpertAdviceContext = () => {
    const context = useContext(ExpertAdviceContext)

    if (!context) {
        throw new Error("useExpertAdviceContext should be used inside provider");
    }
    return context
}