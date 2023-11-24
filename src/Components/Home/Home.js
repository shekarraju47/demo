import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/";
      const options = {
        method: "get",
      };

      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
