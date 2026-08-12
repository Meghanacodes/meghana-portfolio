import { useState } from "react";

function ApiExplorer() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");


  const fetchUsers = async () => {

    setLoading(true);
    setError(null);

    try {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };


  // Search and filter users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <section className="api-explorer">

      <div className="api-header">

        <div>
          <p className="api-label">INTERACTIVE PROJECT</p>

          <h2>API Explorer</h2>

          <p className="api-description">
            Fetch, search and explore user data from a REST API.
          </p>
        </div>

        <button
          className="api-fetch-button"
          onClick={fetchUsers}
        >
          {loading ? "Fetching..." : "Fetch Users"}
        </button>

      </div>


      {/* Search */}

      {users.length > 0 && (
        <div className="api-search">

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      )}


      {/* Loading */}

      {loading && (
        <p className="api-status">
          Loading users...
        </p>
      )}


      {/* Error */}

      {error && (
        <p className="api-error">
          {error}
        </p>
      )}


      {/* Users */}

     {users.length > 0 && (
  <div className="users-grid">
    {filteredUsers.map((user) => (
      <div className="user-card" key={user.id}>
        <div className="user-number">
          0{user.id}
        </div>

        <h3>{user.name}</h3>

        <p>{user.username}</p>

        <span>{user.email}</span>
      </div>
    ))}
  </div>
)}


      {/* No results */}

      {users.length > 0 &&
        filteredUsers.length === 0 &&
        !loading && (
          <p className="api-status">
            No users found.
          </p>
        )}

    </section>
  );
}

export default ApiExplorer;