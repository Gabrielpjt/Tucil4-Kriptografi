'use client';

import { useState, useEffect } from 'react';
import { UserProfile, getUserProfiles, setUserProfiles } from '../../utils/storage';

interface ModalFormProps {
  isEdit: boolean;
  editIndex: number | null;
  setIsEdit: (isEdit: boolean) => void;
  setEditIndex: (editIndex: number | null) => void;
  showInfo: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isEdit, editIndex, setIsEdit, setEditIndex, showInfo }) => {
  const [formState, setFormState] = useState<UserProfile>({
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

  useEffect(() => {
    if (isEdit && editIndex !== null) {
      const profiles = getUserProfiles();
      const editProfile = profiles[editIndex];
      setFormState(editProfile);
    }
  }, [isEdit, editIndex]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size < 1000000) { // 1MB = 1000000
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormState((prev) => ({ ...prev, picture: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('This file is too large!');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const profiles = getUserProfiles();
    if (isEdit && editIndex !== null) {
      profiles[editIndex] = formState;
    } else {
      profiles.push(formState);
    }
    setUserProfiles(profiles);
    setIsEdit(false);
    setEditIndex(null);
    showInfo();
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
  };

  return (
    <div className="modal fade" id="userForm">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{isEdit ? 'Update The Form' : 'Fill the Form'}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="myForm" onSubmit={handleSubmit}>
              
              <div className="inputField">
                <div>
                  <label htmlFor="NIM">NIM:</label>
                  <input type="text" id="NIM" value={formState.NIM} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nama">Nama:</label>
                  <input type="text" id="nama" value={formState.nama} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK1">Kode MK 1:</label>
                  <input type="text" id="kodeMK1" value={formState.kodeMK1} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK1">Nama MK 1:</label>
                  <input type="text" id="namaMK1" value={formState.namaMK1} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK1">Nilai MK 1:</label>
                  <input type="number" id="nilaiMK1" value={formState.nilaiMK1} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK1">SKS MK 1:</label>
                  <input type="number" id="sksMK1" value={formState.sksMK1} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK2">Kode MK 2:</label>
                  <input type="text" id="kodeMK2" value={formState.kodeMK2} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK2">Nama MK 2:</label>
                  <input type="text" id="namaMK2" value={formState.namaMK2} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK2">Nilai MK 2:</label>
                  <input type="number" id="nilaiMK2" value={formState.nilaiMK2} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK2">SKS MK 2:</label>
                  <input type="number" id="sksMK2" value={formState.sksMK2} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK3">Kode MK 3:</label>
                  <input type="text" id="kodeMK3" value={formState.kodeMK3} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK3">Nama MK 3:</label>
                  <input type="text" id="namaMK3" value={formState.namaMK3} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK3">Nilai MK 3:</label>
                  <input type="number" id="nilaiMK3" value={formState.nilaiMK3} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK3">SKS MK 3:</label>
                  <input type="number" id="sksMK3" value={formState.sksMK3} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK4">Kode MK 4:</label>
                  <input type="text" id="kodeMK4" value={formState.kodeMK4} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK4">Nama MK 4:</label>
                  <input type="text" id="namaMK4" value={formState.namaMK4} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK4">Nilai MK 4:</label>
                  <input type="number" id="nilaiMK4" value={formState.nilaiMK4} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK4">SKS MK 4:</label>
                  <input type="number" id="sksMK4" value={formState.sksMK4} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK5">Kode MK 5:</label>
                  <input type="text" id="kodeMK5" value={formState.kodeMK5} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK5">Nama MK 5:</label>
                  <input type="text" id="namaMK5" value={formState.namaMK5} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK5">Nilai MK 5:</label>
                  <input type="number" id="nilaiMK5" value={formState.nilaiMK5} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK5">SKS MK 5:</label>
                  <input type="number" id="sksMK5" value={formState.sksMK5} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK6">Kode MK 6:</label>
                  <input type="text" id="kodeMK6" value={formState.kodeMK6} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK6">Nama MK 6:</label>
                  <input type="text" id="namaMK6" value={formState.namaMK6} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK6">Nilai MK 6:</label>
                  <input type="number" id="nilaiMK6" value={formState.nilaiMK6} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK6">SKS MK 6:</label>
                  <input type="number" id="sksMK6" value={formState.sksMK6} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK7">Kode MK 7:</label>
                  <input type="text" id="kodeMK7" value={formState.kodeMK7} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK7">Nama MK 7:</label>
                  <input type="text" id="namaMK7" value={formState.namaMK7} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK7">Nilai MK 7:</label>
                  <input type="number" id="nilaiMK7" value={formState.nilaiMK7} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK7">SKS MK 7:</label>
                  <input type="number" id="sksMK7" value={formState.sksMK7} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK8">Kode MK 8:</label>
                  <input type="text" id="kodeMK8" value={formState.kodeMK8} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK8">Nama MK 8:</label>
                  <input type="text" id="namaMK8" value={formState.namaMK8} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK8">Nilai MK 8:</label>
                  <input type="number" id="nilaiMK8" value={formState.nilaiMK8} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK8">SKS MK 8:</label>
                  <input type="number" id="sksMK8" value={formState.sksMK8} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK9">Kode MK 9:</label>
                  <input type="text" id="kodeMK9" value={formState.kodeMK9} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK9">Nama MK 9:</label>
                  <input type="text" id="namaMK9" value={formState.namaMK9} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK9">Nilai MK 9:</label>
                  <input type="number" id="nilaiMK9" value={formState.nilaiMK9} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK9">SKS MK 9:</label>
                  <input type="number" id="sksMK9" value={formState.sksMK9} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="kodeMK10">Kode MK 10:</label>
                  <input type="text" id="kodeMK10" value={formState.kodeMK10} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="namaMK10">Nama MK 10:</label>
                  <input type="text" id="namaMK10" value={formState.namaMK10} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="nilaiMK10">Nilai MK 10:</label>
                  <input type="number" id="nilaiMK10" value={formState.nilaiMK10} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="sksMK10">SKS MK 10:</label>
                  <input type="number" id="sksMK10" value={formState.sksMK10} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="IPK">IPK:</label>
                  <input type="text" id="IPK" value={formState.IPK} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="tandaTanganDigital">Tanda Tangan Digital:</label>
                  <input type="text" id="tandaTanganDigital" value={formState.tandaTanganDigital} onChange={handleChange} required />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary submit">{isEdit ? 'Update' : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
