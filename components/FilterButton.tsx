"use client";

import { GiSettingsKnobs } from "react-icons/gi";

type FilterButtonProps = {
  onToggle: () => void;
};

const FilterButton = ({ onToggle }: FilterButtonProps) => (
  <button className="filter-icon button" onClick={onToggle} type="button">
    <GiSettingsKnobs />
  </button>
);

export default FilterButton;
