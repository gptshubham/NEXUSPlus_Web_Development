import { useState, useEffect } from 'react';

export default function useFetch() {
  const [profile, setProfile] = useState([]);
  const [nameSearched, setNameSearched] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function generateNameSearchedProfile(name) {
    if (!name.trim()) {
      setError('Please enter a valid GitHub username.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/users/${name}`);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setProfile([data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    generateNameSearchedProfile(10);
  }, [nameSearched]);

  return {
    nameSearched,
    setNameSearched,
    generateNameSearchedProfile,
    profile,
    loading,
    error,
  };
}
