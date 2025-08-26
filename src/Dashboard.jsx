// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { auth, db, storage } from "../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [loading, setLoading] = useState(false);

  // Load user info
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
      setName(currentUser.displayName || "");
      setProfilePic(currentUser.photoURL || "");

      // Fetch extra info from Firestore
      const fetchData = async () => {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setBio(userSnap.data().bio || "");
        }
      };
      fetchData();
    }
  }, []);

  // Handle profile image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `profilePics/${user.uid}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    setProfilePic(downloadURL);
  };

  // Save profile updates
  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName: name,
        photoURL: profilePic,
      });

      // Save extra info in Firestore
      await setDoc(doc(db, "users", user.uid), { bio }, { merge: true });

      alert("✅ Profile updated successfully!");
    } catch (error) {
      console.error("❌ Error updating profile:", error);
      alert("Error updating profile");
    }
    setLoading(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-purple-600 mb-6">Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Profile</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Settings</a>
          <button 
            className="w-full text-left text-red-500"
            onClick={() => auth.signOut()}
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile Settings</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-lg">
          {/* Profile Picture */}
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={profilePic || "https://via.placeholder.com/100"} 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover border" 
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          {/* Name */}
          <label className="block mb-2 text-gray-700">Full Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg" 
          />

          {/* Bio */}
          <label className="block mb-2 text-gray-700">Bio</label>
          <textarea 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg"
          />

          {/* Save Button */}
          <button 
            onClick={handleSave} 
            disabled={loading}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
