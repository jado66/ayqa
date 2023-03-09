import { useState } from "react"
import Dropdown from "../util/Dropdown"
import { ClipboardData, BarChart, GearWideConnected, HouseFill, List, PersonFillGear, ChevronLeft, BoxFill, Images, PencilSquare, GearFill } from "react-bootstrap-icons"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
const Sidebar = (props) =>{
    
    const [collapsed, setCollapsed] = useState(false)
    const [selectedProject, setSelectedProject] = useState()
    const [projects, setProjects] = useState([
        "Demo Project",
        "Injection Mold Parts 1",
        "Injection Mold Parts 2"
    ])

    const selectProject = (project) =>{setSelectedProject(project)}
    const goBack = (project) =>{setSelectedProject()}

    return(
        <>
            <div class={"flex-shrink-0 p-3 text-bg-dark col "+(collapsed?"px-1 col-2":"")} style={{maxWidth: (collapsed?"100px":"250px")}}>

        {
            selectedProject ?
            <SidebarLevel2 collapsed = {collapsed} selectedProject ={selectedProject.replaceAll(" ","_")} goBack ={goBack}/>
            :
            <SidebarLevel1 collapsed = {collapsed} projects = {projects} selectProject ={selectProject}/>

        }
        </div>
        </>
        
    )
}
export default Sidebar


const SidebarLevel1 = ({collapsed, projects, setSelectedProject}) =>{


    return(
          
            <ul class="nav nav-pills flex-column mb-auto">
                {
                    collapsed &&
                    <li class="nav-item">
                        <button 
                            className="btn btn-lg btn-dark d-flex"
                            onClick={()=>setCollapsed(p=>!p)}
                        >
                            <List/>
                        </button>
                    </li>
                }
                <li class="nav-item d-flex flex-row align-items-center">
                
                    
                    <Link href="/" class={"nav-link text-white d-flex flex-row align-items-center "+(collapsed?"":"fs-4")} aria-current="page">
                        {
                            collapsed ? <HouseFill className="me-3"/> :"AYQA"
                        }
                    </Link>
                    {
                        !collapsed &&
                        <button 
                            className="btn btn-lg btn-dark ms-auto d-flex"
                            onClick={()=>setCollapsed(p=>!p)}
                        >
                            <List/>
                        </button>
                    }   
                </li>
                <hr/>

                <li class="nav-item">
                    
                    <Dropdown
                        icon = {<ClipboardData className="me-3"/>}
                        buttonContent = "Projects"
                        id = {"projects-dropdown"}
                        collapsed = {collapsed}
                        // onClick = {()=>setCollapsed(false)}
                    >
                        <ul class={"btn-toggle-nav list-unstyled fw-normal pb-1 small "+(collapsed?"":"ms-4")}>
                            {
                                projects.map((el,index)=>{
                                    return(
                                        <li key={el+'-li'}>
                                            <button onClick={()=>selectProject(el)} class={"nav-link text-white "+(collapsed?"px-1":"")}>{el}</button>
                                        </li>
                                    )
                                })
                            }
                           
                            <li className={"w-75  px-2 d-flex "+(collapsed?"mx-auto":"")}><button className={" nav-link text-white border my-2 flex-grow-1 text-nowrap"}>+ {!collapsed&&"Create New Project"}</button></li>
                        </ul>
                    </Dropdown>
                    
                </li>
                <hr className="w-75 mx-auto my-1 border-secondary"/>
                <li class="nav-item">
                    <CollapsableLink
                        href ="/reports"
                        text = "Reports"
                        icon = {<BarChart className="me-3"/>}
                        collapsed = {collapsed}
                    />
                </li>
                {/* <hr className="w-75 mx-auto my-1 border-secondary"/> */}

                <li class="nav-item">
                    <CollapsableLink
                        href ="/settings"
                        text = "Settings"
                        icon = {<GearWideConnected className="me-3"/>}
                        collapsed = {collapsed}
                    />
                   
                </li>
                <hr/>
                <li class="nav-item">
                    <Dropdown
                        icon = {<PersonFillGear className="me-3"/>}
                        buttonContent = "Account"
                        key = {"profile-dropdown"}
                        collapsed = {collapsed}
                    >
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4 ">

                            {/* <li><Link class="nav-link text-white" href="#">Dashboard Settings</Link></li> */}
                            <li><Link class="nav-link text-white" href="/account">Profile</Link></li>
                            <hr className="my-1 ms-2 me-5"/>
                            <li><button class="nav-link text-white" onClick={signOut}>Sign out</button></li>
                        </ul>
                    </Dropdown>
                </li>
                <hr className="w-75 mx-auto my-1 border-secondary"/>

            </ul>
            
            
            
    )
}

const SidebarLevel2 = (props) =>{
    return(
        <>
            <div class="d-flex flex-row align-items-center">
                
                <button className="btn text-light" onClick={props.goBack}>
                    <ChevronLeft/>
                </button>
                <span class="fs-4 py-2">
                    {props.selectedProject}
                </span>
            </div>
            <hr/>

            <ul class="nav nav-pills flex-column mb-auto">
                {/* <span className="text-light">{props.selectedProject+"/overview"}</span> */}

                <li class="nav-item">
                    <Link href={`../${props.selectedProject}`+"/overview"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <BoxFill className="me-3"/>
                        Overview
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={`../${props.selectedProject}`+"/images"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <Images className="me-3"/>
                        Images
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={`../${props.selectedProject}/annotate`} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <PencilSquare className="me-3"/>
                        Annotate
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={`../${props.selectedProject}`+"/settings"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <GearFill className="me-3"/>
                        Project Settings
                    </Link>
                </li>
              
            </ul>
           
        </>
    )
}

const CollapsableLink = (props) =>{
    return(
        <Link href={props.href} class="nav-link text-white d-flex flex-row align-items-center">
            {props.icon}
            {!props.collapsed && props.text}
        </Link>
    )
}