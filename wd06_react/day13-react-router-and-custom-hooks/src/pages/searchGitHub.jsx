import React from 'react';
import { Search, Loader2 } from 'lucide-react';
import useFetch from '../components/useFetch';

function SearchGitHub() {
  const {
    nameSearched,
    setNameSearched,
    generateNameSearchedProfile,
    profile,
    loading,
    error,
  } = useFetch();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Input (Number of Profiles to display)  & Display profile Button */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="w-full sm:w-auto flex-1">
            <input
              type="text"
              value={nameSearched}
              onChange={(e) => setNameSearched(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  if (nameSearched.trim() === '') {
                    setError('Please enter a valid GitHub username.');
                    return;
                  }
                  generateNameSearchedProfile(nameSearched);
                }
              }}
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
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
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
      <div className="mt-8 flex justify-center items-center">
        {profile.map((value) => (
          <div
            key={value.id}
            className="max-w-sm w-full flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
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
export default SearchGitHub;
