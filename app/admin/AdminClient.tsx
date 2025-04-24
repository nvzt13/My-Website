"use client";
import { useAppSelector } from '@/lib/redux/hooks';
import { RootState } from '@/lib/redux/store';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button
} from '@mui/material';

const AdminClient = () => {
  const projects = useAppSelector((state: RootState) => state.projects.projects);

  const handleEdit = (id: string) => {
    console.log("Düzenle:", id);
    // burada düzenleme için routing ya da modal açabilirsin
  };

  const handleDelete = (id: string) => {
    console.log("Sil:", id);
    // burada silme işlemini başlatabilirsin
  };

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
                <Button variant="contained" color="primary" onClick={() => handleEdit(proje.id)} sx={{ mr: 1 }}>
                  Düzenle
                </Button>
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