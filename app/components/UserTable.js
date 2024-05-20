import { useState, useEffect } from 'react';

// Fungsi untuk mendapatkan profil pengguna dari localStorage
const getUserProfiles = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('userProfile') || '[]');
  }
  return [];
};

// Fungsi untuk menyimpan profil pengguna ke localStorage
const setUserProfiles = (profiles) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userProfile', JSON.stringify(profiles));
  }
};

const UserTable = ({ setIsEdit, setEditIndex }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = getUserProfiles();
    setProfiles(storedProfiles);
  }, []);

  const handleDelete = (index) => {
    if (window.confirm('Are you sure want to delete?')) {
      const updatedProfiles = [...profiles];
      updatedProfiles.splice(index, 1);
      setUserProfiles(updatedProfiles);
      setProfiles(updatedProfiles);
    }
  };

  const handleEdit = (index) => {
    setIsEdit(true);
    setEditIndex(index);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = { ...formState };
    const profiles = getUserProfiles();
    
    if (isEdit && editIndex !== null) {
      profiles[editIndex] = newProfile;
    } else {
      profiles.push(newProfile);
    }
    
    setUserProfiles(profiles);
    setIsEdit(false);
    setEditIndex(null);
    setFormState({
      NIM: '',
      nama: '',
      kodeMK1: '',
      namaMK1: '',
      nilaiMK1: 0,
      sksMK1: 0,
      kodeMK2: '',
      namaMK2: '',
      nilaiMK2: 0,
      sksMK2: 0,
      kodeMK3: '',
      namaMK3: '',
      nilaiMK3: 0,
      sksMK3: 0,
      kodeMK4: '',
      namaMK4: '',
      nilaiMK4: 0,
      sksMK4: 0,
      kodeMK5: '',
      namaMK5: '',
      nilaiMK5: 0,
      sksMK5: 0,
      kodeMK6: '',
      namaMK6: '',
      nilaiMK6: 0,
      sksMK6: 0,
      kodeMK7: '',
      namaMK7: '',
      nilaiMK7: 0,
      sksMK7: 0,
      kodeMK8: '',
      namaMK8: '',
      nilaiMK8: 0,
      sksMK8: 0,
      kodeMK9: '',
      namaMK9: '',
      nilaiMK9: 0,
      sksMK9: 0,
      kodeMK10: '',
      namaMK10: '',
      nilaiMK10: 0,
      sksMK10: 0,
      IPK: '',
      tandaTanganDigital: '',
      picture: '/images/ProfileIcon.webp'
    });
  
    // Perbarui state profiles di komponen UserTable
    setProfiles(profiles);
  };
  

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">NIM</th>
          <th scope="col">Nama</th>
          <th scope="col">Kode MK1</th>
          <th scope="col">Nama MK1</th>
          <th scope="col">Nilai MK1</th>
          <th scope="col">SKS MK1</th>
          <th scope="col">Kode MK2</th>
          <th scope="col">Nama MK2</th>
          <th scope="col">Nilai MK2</th>
          <th scope="col">SKS MK2</th>
          <th scope="col">Kode MK3</th>
          <th scope="col">Nama MK3</th>
          <th scope="col">Nilai MK3</th>
          <th scope="col">SKS MK3</th>
          <th scope="col">Kode MK4</th>
          <th scope="col">Nama MK4</th>
          <th scope="col">Nilai MK4</th>
          <th scope="col">SKS MK4</th>
          <th scope="col">Kode MK5</th>
          <th scope="col">Nama MK5</th>
          <th scope="col">Nilai MK5</th>
          <th scope="col">SKS MK5</th>
          <th scope="col">Kode MK6</th>
          <th scope="col">Nama MK6</th>
          <th scope="col">Nilai MK6</th>
          <th scope="col">SKS MK6</th>
          <th scope="col">Kode MK7</th>
          <th scope="col">Nama MK7</th>
          <th scope="col">Nilai MK7</th>
          <th scope="col">SKS MK7</th>
          <th scope="col">Kode MK8</th>
          <th scope="col">Nama MK8</th>
          <th scope="col">Nilai MK8</th>
          <th scope="col">SKS MK8</th>
          <th scope="col">Kode MK9</th>
          <th scope="col">Nama MK9</th>
          <th scope="col">Nilai MK9</th>
          <th scope="col">SKS MK9</th>
          <th scope="col">Kode MK10</th>
          <th scope="col">Nama MK10</th>
          <th scope="col">Nilai MK10</th>
          <th scope="col">SKS MK10</th>
          <th scope="col">IPK</th>
          <th scope="col">Tanda Tangan Digital</th>
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
              <img src={profile.picture} alt={`${profile.nama}'s profile`} width="50" height="50" />
            </td>
            <td>
              <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
