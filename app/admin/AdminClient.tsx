"use client";
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { deleteProject } from '@/lib/redux/projectSlice';
import { RootState } from '@/lib/redux/store';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';

const AdminClient = () => {
  const projects = useAppSelector((state: RootState) => state.projects.projects);
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    console.log("Sil:", id);
    dispatch(deleteProject(id));  
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Proje Başlığı</TableCell>
            <TableCell>İşlemler</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((proje) => (
            <TableRow key={proje.id}>
              <TableCell>{proje.title}</TableCell>
              <TableCell>
                <Button variant="contained" color="error" onClick={() => handleDelete(proje.id)}>
                  Sil
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminClient;