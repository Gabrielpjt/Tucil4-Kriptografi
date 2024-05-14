// /app/page.tsx

'use client';

import { useState } from 'react';
import ModalForm from './components/ModalForm';
import UserTable from './components/UserTable';

export default function Home() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const showInfo = () => {
    // Reload or update the component as needed
  };

  return (
    <div className="container">
      <h1 className="my-4">Employee Management</h1>
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
      <UserTable setIsEdit={setIsEdit} setEditIndex={setEditIndex} />
      <ModalForm isEdit={isEdit} editIndex={editIndex} setIsEdit={setIsEdit} setEditIndex={setEditIndex} showInfo={showInfo} />
    </div>
  );
}
