export const getUserProfiles = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('userProfile') || '[]');
  }
  return [];
};

export const setUserProfiles = (profiles) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userProfile', JSON.stringify(profiles));
  }
};
