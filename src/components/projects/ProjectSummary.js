import React from 'react'
const ProjectSummary= ({project})=> {
    return(
        <div className= "card">
            <div className= "card-content grey-text text-darken-3">
    <span className= "card-title">{project.title}</span>
            <p>Posted by: perreo Intenso</p>
            <p className="grey-text">septiembre 3 del perreo</p>
        </div>
        </div>
        
    )
}
export default ProjectSummary
