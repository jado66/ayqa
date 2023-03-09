import { useSession } from "next-auth/react"

const ProtectedContent = (props) => {

    const { data: session, status } = useSession()

  
    if(status === "loading"){
        return(
            null
        )
      }

    if (session || props.debug) {
        return (
        <>
            {props.children}
        </>
        )
    }

    return props.alt
}

export default ProtectedContent