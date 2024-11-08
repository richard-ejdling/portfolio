export default function Loader({
  design = "standard",
  size, // if no value, it takes inherited height
  weight = 2,
  color = "#ffffff",
  easing = "linear",
  speed = "1",
}) {
  const options = {
    standard: {
      borderWidth: weight,
      borderColor: `${color}40`,
      borderRadius: "50%",
      borderTopColor: color,
    },
    cat_eye: {
      borderRadius: "50%",
      borderTopWidth: weight,
      borderBottomWidth: weight,
      borderTopColor: color,
      borderBottomColor: color,
    },
    crescent: {
      borderRadius: "50%",
      borderTopWidth: weight,
      borderTopColor: color,
    },
    triangle: {
      borderWidth: size / 2,
      borderColor: `${color}40`,
      borderRadius: "50%",
      borderTopColor: color,
    },
    double_triangle: {
      borderWidth: size / 2,
      borderColor: `${color}40`,
      borderRadius: "50%",
      borderTopColor: color,
      borderBottomColor: color,
    },
  };



  return (
    <>
      <div
        className="bg-transparent animate-spin"
        style={{
          height: size ? size : '100%',
          aspectRatio: 1/1,
          ...options[design],
          animation: `spin ${speed}s ${easing} infinite`,
        }}
      ></div>
    </>
  );
}
