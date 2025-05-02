"use client";

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { deleteProject } from '@/lib/redux/projectSlice';
import { RootState } from '@/lib/redux/store';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const AdminClient = () => {
  const projects = useAppSelector((state: RootState) => state.projects.projects);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteProject(id));
  };

  const handleEdit = (id: string) => {
    console.log("Düzenle:", id);
    // düzenleme işlemleri burada olabilir
  };

  return (
    <Card className="mt-6 p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Proje Başlığı</TableHead>
            <TableHead>İşlemler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((proje) => (
            <TableRow key={proje.id}>
              <TableCell>{proje.title}</TableCell>
              <TableCell className="flex gap-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleEdit(proje.id)}
                >
                  Düzenle
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(proje.id)}
                >
                  Sil
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default AdminClient;
