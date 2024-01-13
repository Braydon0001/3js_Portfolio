import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load w-80"></span>
      <p
        style={{
          fontSize: 21,
          color: "f1f1f1",
          fontWeight: 800,
          marginTop: 40,
          whiteSpace: "no-wrap",
          textAlign: "center",
          width: "180px",
        }}
      >
        Loading 3D Model <br />
        <span className="text-[#de4444]">{progress.toFixed(2)}%</span>
      </p>
    </Html>
  );
};

export default Loader;
