import React from "react";
import { Component } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "All" };
  }
  render() {
    const projects = this.props.projects;
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const currentSelected = [];

    projects.forEach((project) => {
      if (this.state.selected === "All") {
        currentSelected.push(project);
      } else if (this.state.selected === project.category) {
        currentSelected.push(project);
      }
    });

    return (
      <>
        <div className="toolbar">
          <ul className="toolbarFilters">
            <Toolbar
              filters={filters}
              selected={this.state.selected}
              onSelectFilter={(filter) =>
                this.setState({ selected: filter.textContent })
              }
            />
          </ul>
        </div>
        <div className="projects">
          <ul className="projectItem">
            <ProjectList projects={currentSelected} />
          </ul>
        </div>
      </>
    );
  }
}
