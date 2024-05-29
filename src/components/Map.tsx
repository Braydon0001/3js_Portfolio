import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -40],
        scale: 400,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#020f3d"
        stroke="#58658f"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[24.3, -29.1]}
        dx={-90}
        dy={-30}
        connectorProps={{
          //   stroke: "#FF5533",

          stroke: "#de4444",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-11"
          y="-2"
          textAnchor="end"
          fontSize={18}
          fontWeight={750}
          alignmentBaseline="middle"
          fill="#de4444"
        >
          {"South Africa"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
