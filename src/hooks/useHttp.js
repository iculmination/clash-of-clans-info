const useHttp = () => {
  const request = async (
    url,
    { method = "GET", headers = {}, body = null }
  ) => {
    try {
      const options = {
        method,
        headers,
        body: body ? JSON.stringify(body) : null,
      };
      console.log(url, options);
      const res = await fetch(url, options);
      console.log(res);
      if (!res.ok) {
        throw new Error("Failed to fetch data from URL: " + url);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return request;
};

export default useHttp;
