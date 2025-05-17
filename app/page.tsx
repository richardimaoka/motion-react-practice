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
    <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }}>
      button
    </motion.button>
  );
}
