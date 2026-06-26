import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/users/${id}`,
      );

      const data = await response.json();

      if (data.success) {
        setUser(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>User Details</h1>

      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <p>
        <strong>Status:</strong> {user.isActive ? "Active" : "Inactive"}
      </p>
      <p>
        <strong>User ID:</strong> {user._id}
      </p>
      <p>
        <strong>Created At:</strong> {new Date(user.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
