export const FecthApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Fetch gagal");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error ambil API:", error);
    return null;
  }
};
