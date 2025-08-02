import React, { useState, useEffect } from "react";

const Manager = () => {
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState({
    title: "",
    username: "",
    password: "",
    website: ""
  });
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Load passwords from localStorage on component mount
  useEffect(() => {
    const savedPasswords = localStorage.getItem("passwords");
    if (savedPasswords) {
      setPasswords(JSON.parse(savedPasswords));
    }
  }, []);

  // Save passwords to localStorage whenever passwords change
  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (includeUppercase) chars += uppercase;
    if (includeLowercase) chars += lowercase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === "") {
      alert("Please select at least one character type!");
      return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedPassword(password);
  };

  const addPassword = () => {
    if (!newPassword.title || !newPassword.username || !newPassword.password) {
      alert("Please fill in all required fields!");
      return;
    }

    const passwordEntry = {
      id: Date.now(),
      ...newPassword,
      createdAt: new Date().toISOString()
    };

    setPasswords([...passwords, passwordEntry]);
    setNewPassword({ title: "", username: "", password: "", website: "" });
    setGeneratedPassword("");
  };

  const deletePassword = (id) => {
    setPasswords(passwords.filter(pwd => pwd.id !== id));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const filteredPasswords = passwords.filter(password =>
    password.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    password.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    password.website.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Password Generator Section */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Password Generator</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password Length: {passwordLength}
                </label>
                <input
                  type="range"
                  min="8"
                  max="32"
                  value={passwordLength}
                  onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="mr-2"
                  />
                  Include Uppercase Letters
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    className="mr-2"
                  />
                  Include Lowercase Letters
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="mr-2"
                  />
                  Include Numbers
                </label>
                <label className="flex items-center text-gray-300">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="mr-2"
                  />
                  Include Symbols
                </label>
              </div>

              <button
                onClick={generatePassword}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Generate Password
              </button>

              {generatedPassword && (
                <div className="bg-gray-700 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-mono text-sm break-all">
                      {generatedPassword}
                    </span>
                    <button
                      onClick={() => copyToClipboard(generatedPassword)}
                      className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Add New Password Section */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Add New Password</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={newPassword.title}
                  onChange={(e) => setNewPassword({...newPassword, title: e.target.value})}
                  placeholder="e.g., Gmail, Facebook"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Username/Email *
                </label>
                <input
                  type="text"
                  value={newPassword.username}
                  onChange={(e) => setNewPassword({...newPassword, username: e.target.value})}
                  placeholder="username@example.com"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Password *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newPassword.password}
                    onChange={(e) => setNewPassword({...newPassword, password: e.target.value})}
                    placeholder="Enter or generate password"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  {generatedPassword && (
                    <button
                      onClick={() => setNewPassword({...newPassword, password: generatedPassword})}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Use Generated
                    </button>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  value={newPassword.website}
                  onChange={(e) => setNewPassword({...newPassword, website: e.target.value})}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                onClick={addPassword}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Save Password
              </button>
            </div>
          </div>
        </div>

        {/* Password List Section */}
        <div className="mt-8 bg-slate-800 rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Saved Passwords</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search passwords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          {filteredPasswords.length === 0 ? (
            <div className="text-center text-gray-400 py-8">
              {searchTerm ? "No passwords found matching your search." : "No passwords saved yet. Add your first password above!"}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPasswords.map((password) => (
                <div key={password.id} className="bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">{password.title}</h3>
                      <p className="text-gray-300 text-sm">Username: {password.username}</p>
                      {password.website && (
                        <p className="text-gray-300 text-sm">
                          Website: <a href={password.website} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{password.website}</a>
                        </p>
                      )}
                      <div className="flex items-center mt-2">
                        <span className="text-gray-300 text-sm mr-2">Password:</span>
                        <span className="text-white font-mono text-sm bg-gray-800 px-2 py-1 rounded">
                          ••••••••••••
                        </span>
                        <button
                          onClick={() => copyToClipboard(password.password)}
                          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => deletePassword(password.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
