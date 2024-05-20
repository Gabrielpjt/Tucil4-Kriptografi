'use client';

import { useState } from 'react';
import ModalForm from './components/ModalForm';
import UserTable from './components/UserTable';

export default function Home() {
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const showInfo = () => {
    // Reload or update the component as needed
  };

  return (
    <div className="container">
      <h1 className="my-4">Kriptografi</h1>
      <button
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target="#userForm"
        onClick={() => {
          setIsEdit(false);
          setEditIndex(null);
        }}
      >
        Tambah Daftar Nilai Mahasiswa
      </button>
      <button
        className="btn btn-primary mb-4"
        data-bs-toggle="modal"
        data-bs-target="#userForm"
        onClick={() => {
          setIsEdit(false);
          setEditIndex(null);
        }}
      >
        GenerateRSA
      </button>
      <UserTable setIsEdit={setIsEdit} setEditIndex={setEditIndex} />
      <ModalForm isEdit={isEdit} editIndex={editIndex} setIsEdit={setIsEdit} setEditIndex={setEditIndex} showInfo={showInfo} />
    </div>
  );
}
