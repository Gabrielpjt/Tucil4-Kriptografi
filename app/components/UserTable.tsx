import { useState, useEffect } from 'react';
import { UserProfile, getUserProfiles, setUserProfiles } from '../../utils/storage';

interface UserTableProps {
  setIsEdit: (isEdit: boolean) => void;
  setEditIndex: (editIndex: number | null) => void;
}

const UserTable: React.FC<UserTableProps> = ({ setIsEdit, setEditIndex }) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    const storedProfiles = getUserProfiles();
    setProfiles(storedProfiles);
  }, []);

  const handleDelete = (index: number) => {
    if (window.confirm('Are you sure want to delete?')) {
      const updatedProfiles = [...profiles];
      updatedProfiles.splice(index, 1);
      setUserProfiles(updatedProfiles);
      setProfiles(updatedProfiles);
    }
  };

  const handleEdit = (index: number) => {
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">NIM</th>
          <th scope="col">Nama</th>
          <th scope="col">Kode MK 1</th>
          <th scope="col">Nama MK 1</th>
          <th scope="col">Nilai MK 1</th>
          <th scope="col">SKS MK 1</th>
          <th scope="col">Kode MK 2</th>
          <th scope="col">Nama MK 2</th>
          <th scope="col">Nilai MK 2</th>
          <th scope="col">SKS MK 2</th>
          <th scope="col">Kode MK 3</th>
          <th scope="col">Nama MK 3</th>
          <th scope="col">Nilai MK 3</th>
          <th scope="col">SKS MK 3</th>
          <th scope="col">Kode MK 4</th>
          <th scope="col">Nama MK 4</th>
          <th scope="col">Nilai MK 4</th>
          <th scope="col">SKS MK 4</th>
          <th scope="col">Kode MK 5</th>
          <th scope="col">Nama MK 5</th>
          <th scope="col">Nilai MK 5</th>
          <th scope="col">SKS MK 5</th>
          <th scope="col">Kode MK 6</th>
          <th scope="col">Nama MK 6</th>
          <th scope="col">Nilai MK 6</th>
          <th scope="col">SKS MK 6</th>
          <th scope="col">Kode MK 7</th>
          <th scope="col">Nama MK 7</th>
          <th scope="col">Nilai MK 7</th>
          <th scope="col">SKS MK 7</th>
          <th scope="col">Kode MK 8</th>
          <th scope="col">Nama MK 8</th>
          <th scope="col">Nilai MK 8</th>
          <th scope="col">SKS MK 8</th>
          <th scope="col">Kode MK 9</th>
          <th scope="col">Nama MK 9</th>
          <th scope="col">Nilai MK 9</th>
          <th scope="col">SKS MK 9</th>
          <th scope="col">Kode MK 10</th>
          <th scope="col">Nama MK 10</th>
          <th scope="col">Nilai MK 10</th>
          <th scope="col">SKS MK 10</th>
          <th scope="col">IPK</th>
          <th scope="col">Tanda Tangan Digital</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile, index) => (
          <tr key={index}>
            <td>{profile.NIM}</td>
            <td>{profile.nama}</td>
            <td>{profile.kodeMK1}</td>
            <td>{profile.namaMK1}</td>
            <td>{profile.nilaiMK1}</td>
            <td>{profile.sksMK1}</td>
            <td>{profile.kodeMK2}</td>
            <td>{profile.namaMK2}</td>
            <td>{profile.nilaiMK2}</td>
            <td>{profile.sksMK2}</td>
            <td>{profile.kodeMK3}</td>
            <td>{profile.namaMK3}</td>
            <td>{profile.nilaiMK3}</td>
            <td>{profile.sksMK3}</td>
            <td>{profile.kodeMK4}</td>
            <td>{profile.namaMK4}</td>
            <td>{profile.nilaiMK4}</td>
            <td>{profile.sksMK4}</td>
            <td>{profile.kodeMK5}</td>
            <td>{profile.namaMK5}</td>
            <td>{profile.nilaiMK5}</td>
            <td>{profile.sksMK5}</td>
            <td>{profile.kodeMK6}</td>
            <td>{profile.namaMK6}</td>
            <td>{profile.nilaiMK6}</td>
            <td>{profile.sksMK6}</td>
            <td>{profile.kodeMK7}</td>
            <td>{profile.namaMK7}</td>
            <td>{profile.nilaiMK7}</td>
            <td>{profile.sksMK7}</td>
            <td>{profile.kodeMK8}</td>
            <td>{profile.namaMK8}</td>
            <td>{profile.nilaiMK8}</td>
            <td>{profile.sksMK8}</td>
            <td>{profile.kodeMK9}</td>
            <td>{profile.namaMK9}</td>
            <td>{profile.nilaiMK9}</td>
            <td>{profile.sksMK9}</td>
            <td>{profile.kodeMK10}</td>
            <td>{profile.namaMK10}</td>
            <td>{profile.nilaiMK10}</td>
            <td>{profile.sksMK10}</td>
            <td>{profile.IPK}</td>
            <td>{profile.tandaTanganDigital}</td>
            <td>
              <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
