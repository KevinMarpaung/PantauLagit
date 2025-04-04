export const FecthApi = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("gagal mengalbil data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
