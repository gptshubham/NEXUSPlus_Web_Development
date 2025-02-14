import React, { useState, useEffect, useCallback } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberChanged) str += '0123456789';
    if (charChanged) str += '+-*/.`~!@#$%^&*()_=[]{}()|"/>,<?\'\\';
    // console.log(str);

    let pass = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length);
      // console.log(index);
      pass += str[index];
      // console.log(pass);
    }

    setPassword(pass);
  }, [length, numberChanged, charChanged]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 p-2 sm:p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-3 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">
          Password Generator
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="relative">
            <div className="flex items-center justify-between p-2 sm:p-4 bg-gray-100 rounded-lg">
              <p className="font-mono text-sm sm:text-xl break-all pr-2">
                {password}
              </p>
              <div className="flex gap-1 sm:gap-2 shrink-0">
                <button
                  onClick={generatePassword}
                  className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Generate new password"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-xs sm:text-sm font-medium">
                  Password Length
                </label>
                <span className="text-xs sm:text-sm text-gray-500">
                  {length}
                </span>
              </div>
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-medium">
                  Include Numbers
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={numberChanged}
                    onChange={() => setNumberChanged(!numberChanged)}
                    className="sr-only peer"
                  />
                  <div className="w-9 sm:w-11 h-5 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-medium">
                  Include Special Characters
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={charChanged}
                    onChange={() => setCharChanged(!charChanged)}
                    className="sr-only peer"
                  />
                  <div className="w-9 sm:w-11 h-5 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 sm:after:h-5 after:w-4 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
