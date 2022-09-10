
import React, { Component } from "react";

export default class ProjectList extends Component {
  render() {
    const project = this.props.projects;
    const projectItem = [];
    project.forEach((project) =>
      projectItem.push(
        <li className="project">
          <img className="projectImg" src={project.img}></img>
        </li>
      )
    );
    return projectItem;
  }
}
