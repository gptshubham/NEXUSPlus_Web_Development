import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Search, Users, Loader2 } from 'lucide-react';

export default function GitHub() {
  const { name } = useParams();
  // console.log(name);
  const [Profile, setProfile] = useState(null);

  async function fetchuser() {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    fetchuser();
  }, [name]);

  return (
    <>
      {/* Displaying the user's GitHub Data : profile pic , username and visit profile link */}
      <div className="container mx-auto flex justify-center items-center px-4 py-8">
        <div
          key={Profile?.id}
          className="max-w-sm w-full flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <img
            src={Profile?.avatar_url}
            alt={`${Profile?.login}'s avatar`}
            className="w-40 h-40 rounded-full ring-4 ring-gray-100 shadow-lg mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            {Profile?.login}
          </h2>
          <a
            href={Profile?.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
          >
            View Profile
          </a>
        </div>
      </div>
    </>
  );
}
