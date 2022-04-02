import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "#861657",
        backgroundImage: "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
      }}
    >
      <div>
        <img
          src="https://i.ibb.co/vqFCHPL/loginscreen.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
}

export default Loading;
