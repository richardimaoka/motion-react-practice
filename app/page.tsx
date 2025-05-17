import styles from "./page.module.css";
import * as motion from "motion/react-client";

export default function Page() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };
  return (
    <motion.div
      style={box}
      animate={{ rotate: 360 }}
      transition={{ duration: 1 }}
    />
  );
}
