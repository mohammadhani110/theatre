import React from "react";

const styles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#000",
    top: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoClip: {
    clipPath:
      "polygon(10% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
    background: `url(
    "https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  )`,
    maxWidth: "50%",
    width: "40%",
    height: "60%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};
const PageTransition = () => {
  return (
    <div style={styles.container}>
      <div style={styles.logoClip}></div>
    </div>
  );
};

export default PageTransition;
