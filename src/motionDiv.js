import { motion } from "framer-motion";
import Card from "./cardContent";
const MotionDiv = (props) => {
  const delay = props.delay == null ? 0.5 : props.delay;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  };
  const item = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0, 0.71, 0.2, 1.01]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.8
      }
    }
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Card
        variants={item}
        title="Kangxing Xie"
        subtitle="Student / Developer"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci augue. Cras blandit leo elit, sit amet accumsan est consequat ac. Nulla vitae porttitor risus. Donec tincidunt leo ipsum, ut lacinia enim tincidunt vitae. Ut ut venenatis dolor. Sed magna turpis, tincidunt nec congue at, pellentesque at risus. Vivamus luctus ipsum in magna dapibus suscipit."
      />
      <Card
        variants={item}
        title="Content"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci augue. Cras blandit leo elit, sit amet accumsan est consequat ac. Nulla vitae porttitor risus. Donec tincidunt leo ipsum, ut lacinia enim tincidunt vitae. Ut ut venenatis dolor. Sed magna turpis, tincidunt nec congue at, pellentesque at risus. Vivamus luctus ipsum in magna dapibus suscipit."
      />
      <Card
        variants={item}
        title="Contact"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel orci augue. Cras blandit leo elit, sit amet accumsan est consequat ac. Nulla vitae porttitor risus. Donec tincidunt leo ipsum, ut lacinia enim tincidunt vitae. Ut ut venenatis dolor. Sed magna turpis, tincidunt nec congue at, pellentesque at risus. Vivamus luctus ipsum in magna dapibus suscipit."
      />
    </motion.div>
  );
};

export default MotionDiv;
