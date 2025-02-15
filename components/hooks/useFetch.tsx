import { fetchAllProjects } from "@/app/api/fetch-projects";
import React from "react";

const useFetch = () => {
  const getProjects = async () => {
    try {
      const res = await fetchAllProjects();
      if (res && res.success) {
        setProjects(res.allProjects || []);
      } else {
        console.log("File can't be fetch.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  getProjects();

  return { fetchAllProjects };
};

export default useFetch;
