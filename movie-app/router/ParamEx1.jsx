import { useParams } from "react-router-dom";

const ParamEx1 = () => {
  console.log("this is ParamEx1");
  let {id} = useParams();

  return (
    <>
    <h2>ParamEx1.jsx</h2>
    <p>{id}</p>
    </>
  );
}

export default ParamEx1;
