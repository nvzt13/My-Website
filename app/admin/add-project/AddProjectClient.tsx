"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/lib/redux/hooks";
import { createProject } from "@/lib/redux/projectSlice";
import { Post } from "@prisma/client";

const AddProjectClient = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = React.useState<Post>({
    id: "",
    title: "",
    address: "",
    technologies: "",
    date: "",
    image: "",
    createdAt: null,
    updatedAt: null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    dispatch(createProject(formData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const convertDriveLinkToUC = (link: string) => {
    const regex = /https:\/\/drive\.google\.com\/file\/d\/([^/]+)\/view/;
    const match = link.match(regex);
    if (match && match[1]) {
      const fileId = match[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    } else {
      return link;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const converted = convertDriveLinkToUC(value);
    setFormData((prev) => ({
      ...prev,
      image: converted,
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Proje Ekle</CardTitle>
          <CardDescription>Yeni proje detaylarını giriniz</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Proje Başlığı</Label>
              <Input id="title" name="title" required onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Proje Adresi</Label>
              <Input id="address" name="address" required onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">Teknolojiler</Label>
              <Input
                id="technologies"
                name="technologies"
                placeholder="React, Next.js, TypeScript..."
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Tarih</Label>
              <Input id="date" name="date" type="date" required onChange={handleInputChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Proje Görseli (Google Drive Bağlantısı)</Label>
              <Input
                id="image"
                name="image"
                type="text"
                placeholder="https://drive.google.com/file/d/..../view"
                onChange={handleImageChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Projeyi Ekle
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProjectClient;
