import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load w-40 md:w-80"></span>
      <p className="text-[21px] text-[#f1f1f1] font-[800] mt-10 whitespace-nowrap text-center w-[180px] -ml-20 ">
        Loading 3D Model <br />
        <span className="text-[#de4444]">{progress.toFixed(2)}%</span>
      </p>
    </Html>
  );
};

export default Loader;
