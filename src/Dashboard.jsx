import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { signOut, onAuthStateChanged, updateProfile } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  const handleUpdateProfile = async () => {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      alert("Profile updated successfully!");
      setEditing(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">🎉 Welcome to Your Dashboard</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {/* User Profile Info */}
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="profile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
        )}
        <h2 className="text-xl font-semibold">{user.displayName || "User"}</h2>
        <p className="text-gray-400">{user.email}</p>

        {/* Edit Profile Button */}
        <button
          onClick={() => setEditing(!editing)}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          {editing ? "Cancel" : "Edit Profile"}
        </button>

        {/* Edit Profile Form */}
        {editing && (
          <div className="mt-6 text-left">
            <label className="block mb-2">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-3 py-2 mb-4 rounded bg-gray-700 text-white"
            />

            <label className="block mb-2">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 mb-4 rounded bg-gray-700 text-white"
            />

            <button
              onClick={handleUpdateProfile}
              className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
