import { useEffect, useState } from "react";

const apiConstrant = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCSESS",
  failure: "FAILURE",
};

function Home() {
  const [data, setData] = useState([]);
  const [apiStatus, setStatus] = useState({
    api: apiConstrant.initial,
    error: false,
    errorMsg: null,
  });

  useEffect(() => {
    const getData = async () => {
      setStatus((prev) => ({
        ...prev,
        api: apiConstrant.loading,
      }));
      const url = "https://emerald-lamb-tux.cyclic.app/";
      const options = {
        method: "get",
        headers: {
          "Access-Control-Request-Private-Network": true,
        },
      };
      try {
        const res = await fetch(url, options, { mode: "cors" });
        console.log(res);
        if (res.ok) {
          const resdata = await res.json();
          setStatus((prev) => ({
            ...prev,
            api: apiConstrant.success,
          }));
          setData(resdata);
          console.log(resdata);
        } else {
          setStatus((prev) => ({
            ...prev,
            api: apiConstrant.failure,
            error: true,
            errorMsg: "Something Wrong",
          }));
          console.log("error");
        }
      } catch (e) {
        setStatus((prev) => ({
          ...prev,
          api: apiConstrant.failure,
          error: true,
          errorMsg: e.message,
        }));
        console.log(e.message);
      }
    };
    getData();
  }, []);

  const Loading = () => {
    return <h1>Loading...</h1>;
  };

  const Success = () => {
    return (
      <div>
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const Failure = () => {
    return <h1>Failed</h1>;
  };

  const getResult = () => {
    const { api } = apiStatus;
    switch (api) {
      case apiConstrant.loading:
        return Loading();
      case apiConstrant.success:
        return Success();
      case apiConstrant.failure:
        return Failure();
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {getResult()}
    </div>
  );
}

export default Home;
