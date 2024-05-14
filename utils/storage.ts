// /utils/storage.ts

export interface UserProfile {
    NIM: string;
    nama: string;
    kodeMK1: string;
    namaMK1: string;
    nilaiMK1: number;
    sksMK1: number;
    kodeMK2: string;
    namaMK2: string;
    nilaiMK2: number;
    sksMK2: number;
    kodeMK3: string;
    namaMK3: string;
    nilaiMK3: number;
    sksMK3: number;
    kodeMK4: string;
    namaMK4: string;
    nilaiMK4: number;
    sksMK4: number;
    kodeMK5: string;
    namaMK5: string;
    nilaiMK5: number;
    sksMK5: number;
    kodeMK6: string;
    namaMK6: string;
    nilaiMK6: number;
    sksMK6: number;
    kodeMK7: string;
    namaMK7: string;
    nilaiMK7: number;
    sksMK7: number;
    kodeMK8: string;
    namaMK8: string;
    nilaiMK8: number;
    sksMK8: number;
    kodeMK9: string;
    namaMK9: string;
    nilaiMK9: number;
    sksMK9: number;
    kodeMK10: string;
    namaMK10: string;
    nilaiMK10: number;
    sksMK10: number;
    IPK: string;
    tandaTanganDigital: string;
    picture: string;
  }
  
  
  export const getUserProfiles = (): UserProfile[] => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('userProfile') || '[]');
    }
    return [];
  };
  
  export const setUserProfiles = (profiles: UserProfile[]): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(profiles));
    }
  };
  