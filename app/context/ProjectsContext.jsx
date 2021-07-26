import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [data] = useQuery('Projects');

  return 1;
};

export default ProjectContextProvider;
