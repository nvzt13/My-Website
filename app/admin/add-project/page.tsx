"use client";

import React, { useState } from "react";
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
import { ProjectCardProps } from "@/type/types";
import { createProject } from "@/actions/create-project";

const AddProject = () => {
  // Form state yönetimi
  const [formData, setFormData] = useState<ProjectCardProps>({
    title: "",
    address: "",
    technologies: "",
    date: "",
    file: undefined,
  });

const [loading, setLoading] = useState(false)
  // Form gönderme fonksiyonu
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      setLoading(true)
      const res = await createProject(formData); // Verileri backend'e gönder
      if (res && res.status === 201) {
        alert("Proje başarıyla eklendi");
      setLoading(false)
      } else {
        alert("Proje eklenirken bir hata oluştu");
      setLoading(false)
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Hata loglama
    }
  };

  // Tüm inputlar için state güncelleme
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Tüm text inputlar için
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // File to base64
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setFormData((prev) => ({
          ...prev,
          file: base64String, // Store the base64 string
        }));
      };
    }
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
              <Input
                id="title"
                name="title"
                required
                onChange={handleInputChange} // Text inputlar için handleInputChange kullan
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Proje Adresi</Label>
              <Input
                id="address"
                name="address"
                required
                onChange={handleInputChange}
              />
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
              <Input
                id="date"
                name="date"
                type="date"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="file">Proje Görseli</Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept="image/*"
                onChange={handleFileChange} // Dosya için ayrı handleFileChange kullan
              />
            </div>

            <Button type="submit" className="w-full">
              {
                loading ? "Gönderiliyor..." 
                       : "Projeyi Ekle"
              }
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProject;
