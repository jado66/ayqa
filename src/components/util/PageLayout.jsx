import Sidebar from "../sidebar/Sidebar"
import ProtectedContent from "./ProtectedContent"

const { default: Navbar } = require("../navbar/Navbar")

const PageLayout = (props) =>{
    
    const content = 
    <div className="d-flex flex-column h-100">
        {/* {
            !props.noNavbar &&
            <Navbar/>
        } */}
        <div className="d-flex flex-row flex-grow-1 ">
            {
                !props.noSidebar &&
                    <Sidebar/>
            }
            <div className={"col-9 "+props.className}> 
                {props.children}
            </div>
        </div>
    </div>


    if (props.protected){
        return(
            <ProtectedContent>
                {content}
            </ProtectedContent>
        )
    }
    
    return content
}
export default PageLayout