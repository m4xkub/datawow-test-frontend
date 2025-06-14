export default async function GetHistories() {
  const backendUri = process.env.NEXT_PUBLIC_BACKEND_URI;
  if (!backendUri) {
    throw new Error("BACKEND_URI is not defined");
  }
  const token = localStorage.getItem("token");

  const res = await fetch(backendUri + "/history", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Retrieving Histories failed");
  }

  const { message, result } = await res.json();

  return { message, result };
}
