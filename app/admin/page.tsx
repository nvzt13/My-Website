"use client"
import { useParams } from "next/navigation";
import React from "react";

const AdminPage = () => {
  const params = useParams();
  console.log(params);
  return (
      
      <div className="bg-gray-100">
      </div>
  );
};

export default AdminPage;
