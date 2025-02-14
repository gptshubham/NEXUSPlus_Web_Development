import React, { useState, useEffect, useCallback } from 'react';
import { Search, Users, Loader2 } from 'lucide-react';

function Body() {
  const [profile, setProfile] = useState([]);
  const [numberOfProfiles, setNumberOfProfiles] = useState(10);
  const [nameSearched, setNameSearched] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateProfile = useCallback(
    async (count) => {
      if (count <= 0 || isNaN(count)) {
        setError('Please enter a valid number greater than 0.');
        return;
      }

      setLoading(true);
      setError('');

      try {
        const randomNumber = Math.floor(Math.random() * 10000 + 1);
        const response = await fetch(
          `https://api.github.com/users?since=${randomNumber}&per_page=${count}`
        );

        if (!response.ok) {
          throw new Error(
            `API Error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [numberOfProfiles]
  );

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
    generateProfile(10);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Input (Number of Profiles to display)  & Display profile Button */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-full sm:w-auto flex-1">
            <input
              type="number"
              value={numberOfProfiles}
              onChange={(e) => setNumberOfProfiles(e.target.value)}
              placeholder="Enter Number of Profiles to View"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-200 text-lg"
            />
          </div>
          <button
            onClick={() => {
              generateProfile(Number(numberOfProfiles));
              setNameSearched('');
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Users className="w-5 h-5" />
            Display Profiles
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-full sm:w-auto flex-1">
            <input
              type="text"
              value={nameSearched}
              onChange={(e) => setNameSearched(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 transition-all duration-200 text-lg"
            />
          </div>
          <button
            onClick={() => {
              if (nameSearched.trim() === '') {
                setError('Please enter a valid GitHub username.');
                return;
              }
              generateNameSearchedProfile(nameSearched);
              setNumberOfProfiles('');
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-5 h-5" />
            Search Profile
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium">
          {error}
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center justify-center gap-3 mt-8 text-gray-600 font-medium">
          <Loader2 className="w-6 h-6 animate-spin" />
          Loading profiles...
        </div>
      )}

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {profile.map((value) => (
          <div
            key={value.id}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <img
              src={value.avatar_url}
              alt={`${value.login}'s avatar`}
              className="w-40 h-40 rounded-full ring-4 ring-gray-100 shadow-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {value.login}
            </h2>
            <a
              href={value.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Body;
