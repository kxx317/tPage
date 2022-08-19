import { motion } from "framer-motion";
import {
  Card as BootCard,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

export default function Card(props) {
  return (
    <motion.div variants={props.variants}>
      <BootCard
        color="dark"
        inverse
        style={{
          width: "100%"
        }}
      >
        <CardBody>
          <CardTitle tag="h1">{props.title}</CardTitle>
          {props.subtitle ? (
            <CardSubtitle tag="p">{props.subtitle}</CardSubtitle>
          ) : null}
          <CardText>{props.text}</CardText>
        </CardBody>
      </BootCard>
    </motion.div>
  );
}
