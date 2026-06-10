import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useAdminAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const user = localStorage.getItem("user");

    if (!token || !user) {
      router.replace("/admin/login");
      return;
    }

    const parsedUser = JSON.parse(user);

    if (parsedUser.role !== "admin") {
      router.replace("/admin/login");
      return;
    }

    setLoading(false);
  }, [router]);

  return loading;
}
