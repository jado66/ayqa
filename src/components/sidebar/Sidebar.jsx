import { useState } from "react"
import Dropdown from "../util/Dropdown"
import { ClipboardData, BarChart, GearWideConnected, PersonFillGear, ChevronLeft, BoxFill, Images, PencilSquare, GearFill } from "react-bootstrap-icons"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import Link from "next/link"
const Sidebar = (props) =>{
    

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
        {
            selectedProject ?
            <SidebarLevel2 selectedProject ={selectedProject} goBack ={goBack}/>
            :
            <SidebarLevel1 projects = {projects} selectProject ={selectProject}/>

        }
        </>
        
    )
}
export default Sidebar


const SidebarLevel1 = (props) =>{

    return(
        <div class="flex-shrink-0 p-3 text-bg-dark col " style={{maxWidth: "250px"}}>
          
            <ul class="nav nav-pills flex-column mb-auto">
                
                <li class="nav-item">
                
                    <Link href="/" class="fs-4 nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        {/* <HouseFill className="me-2"/> */}
                        AYQA
                    </Link>
                </li>
                <hr/>

                <li class="nav-item">
                    
                    <Dropdown
                        icon = {<ClipboardData className="me-2"/>}
                        buttonContent = "Projects"
                        id = {"projects-dropdown"}
                    >
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4 ">
                            {
                                props.projects.map((el,index)=>{
                                    return(
                                        <li key={el+'-li'}>
                                            <button onClick={()=>props.selectProject(el)} class="nav-link text-white">{el}</button>
                                        </li>
                                    )
                                })
                            }
                           
                            <li><button className="ms-2 nav-link text-white border my-2">+ Create New Project</button></li>
                        </ul>
                    </Dropdown>
                    
                </li>
                <li class="nav-item">
                    <Link href="/reports" class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <BarChart className="me-2"/>
                        Reports
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href="/settings" class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <GearWideConnected className="me-2"/>
                        Settings
                    </Link>
                </li>
                <hr/>
                <li class="nav-item">
                    <Dropdown
                        icon = {<PersonFillGear className="me-2"/>}
                        buttonContent = "Account"
                        key = {"profile-dropdown"}
                    >
                        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small ms-4 ">

                            {/* <li><Link class="nav-link text-white" href="#">Dashboard Settings</Link></li> */}
                            <li><Link class="nav-link text-white" href="/account">Profile</Link></li>
                            <hr className="my-1 ms-2 me-5"/>
                            <li><button class="nav-link text-white" onClick={signOut}>Sign out</button></li>
                        </ul>
                    </Dropdown>
                </li>
            </ul>
            
            
            
        </div>
    )
}

const SidebarLevel2 = (props) =>{
    return(
        <div class="flex-shrink-0 p-3 text-bg-dark col " style={{width: "280px"}}>
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
                    <Link href={props.selectedProject.replace(" ","_")+"/overview"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <BoxFill className="me-2"/>
                        Overview
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={props.selectedProject+"/images"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <Images className="me-2"/>
                        Images
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={props.selectedProject+"/annotate"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <PencilSquare className="me-2"/>
                        Annotate
                    </Link>
                </li>
                <li class="nav-item">
                    <Link href={props.selectedProject+"/project-settings"} class="nav-link text-white d-flex flex-row align-items-center" aria-current="page">
                        <GearFill className="me-2"/>
                        Project Settings
                    </Link>
                </li>
              
            </ul>
           
        </div>
    )
}