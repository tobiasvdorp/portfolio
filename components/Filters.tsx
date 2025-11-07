"use client";

import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export type ProjectCategory = "all" | "work" | "school" | "hobby";

type FiltersProps = {
  activeFilters: ProjectCategory[];
  setActiveFilters: (filters: ProjectCategory[]) => void;
};

const Filters = ({ activeFilters, setActiveFilters }: FiltersProps) => {
  const { t } = useTranslation();

  const filterOptions: Array<{ label: string; value: ProjectCategory }> = [
    { label: t("all"), value: "all" },
    { label: t("work"), value: "work" },
    { label: t("school"), value: "school" },
    { label: t("hobby"), value: "hobby" },
  ];

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let newFilters = [...activeFilters];

    if (value === "all") {
      newFilters = ["all"];
    } else {
      newFilters = newFilters.filter((filter) => filter !== "all");
      if (checked) {
        newFilters.push(value as ProjectCategory);
      } else {
        newFilters = newFilters.filter((filter) => filter !== value);
      }
    }

    const allButAllSelected = filterOptions
      .filter((option) => option.value !== "all")
      .every((option) => newFilters.includes(option.value));

    if (allButAllSelected) {
      newFilters = ["all"];
    }

    setActiveFilters(newFilters);
  };

  return (
    <div className="filters-container">
      {filterOptions.map(({ label, value }) => (
        <label
          key={value}
          className={
            activeFilters.includes(value)
              ? "button-selected"
              : "button-deselected"
          }
        >
          <input
            type="checkbox"
            value={value}
            checked={activeFilters.includes(value)}
            onChange={handleCheckboxChange}
            className="button"
          />
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      ))}
    </div>
  );
};

export default Filters;
