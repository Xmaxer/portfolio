import React from "react";

export interface IProjectLink {
  title: string;
  url: string;
  icon?: React.ElementType;
}

export interface IProgrammingCardProps {
  title: string;
  wip?: boolean;
  projectLinks?: IProjectLink[];
}
