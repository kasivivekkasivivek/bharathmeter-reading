import HomePage from "./Components/HomePage";
import "./App.css";

const userDetails = [
  {
    connectionType: "LT-CAT1",
    consumerAddress: "7- MARUTI NGR",
    consumerAddress1: "MARUTI NAGAR (SUL)",
    consumerName: "A Ramu",
    meterNo: "19275561",
    phase: "1",
    prevReadingDate: "2021-06-07",
    section: "247-CHAMPAPET",
    serviceNumber: "211600479",
    uidNo: "102492091",
  },
  {
    connectionType: "LT-CAT1",
    consumerAddress: "8- MARUTI NGR",
    consumerAddress1: "MARUTI NAGAR (SUL)",
    consumerName: "B laxman",
    meterNo: "18275561",
    phase: "1",
    prevReadingDate: "2021-06-08",
    section: "247-CHAMPAPET",
    serviceNumber: "211600489",
    uidNo: "102492291",
  },
];

const app = () => <HomePage userDetails={userDetails} />;
export default app;
