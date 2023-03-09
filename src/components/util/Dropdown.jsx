const { useState } = require("react")
import { ChevronDown } from "react-bootstrap-icons"

const Dropdown = (props) =>{
    const [showProjects, setShowProjects] = useState(props.show?true:false)


    return(
        <div onClick={props.onClick}>
            <button class="nav-link text-white" data-bs-toggle={"collapse"} data-bs-target={`#${props.id}-collapse`} aria-expanded="true" onClick={()=>setShowProjects(p=>!p)}>
                <div className="d-flex flex-row align-items-center">
                    { props.icon && props.icon}
                    { !props.collapsed && props.buttonContent }
                    {
                        <ChevronDown className={"ms-2 text-white animate-icon "+(showProjects?"flipped":"")} />
                    }
                </div>
                
            </button>
            <div class={"collapse "+(props.show?"show":"")} id={`${props.id}-collapse`}>
                {
                    props.children
                }
            </div>
        </div>
        
    )
}
export default Dropdown