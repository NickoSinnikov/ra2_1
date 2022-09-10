import React from "react";

export default function Toolbar(props) {
  const { filters, selected, onSelectFilter } = props;
  const filterArray = [];
  filters.forEach((filter) => {
    filter === selected
      ? filterArray.push(
        <li
          className="filter selected"
          onClick={(event) => onSelectFilter(event.currentTarget)}
          key={filter}
        >
          {filter}
        </li>
      )
      : filterArray.push(
        <li
          className="filter"
          onClick={(event) => onSelectFilter(event.currentTarget)}
          key={filter}
        >
          {filter}
        </li>
      );
  });
  return filterArray;
}
