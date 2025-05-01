"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { fetchProjects } from "@/lib/redux/projectSlice";

const FillReduxStore = () => {
  const dispatch = useAppDispatch();
  const { projects, loading, error } = useAppSelector((state) => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <div>
    </div>
  );
};

export default FillReduxStore;
