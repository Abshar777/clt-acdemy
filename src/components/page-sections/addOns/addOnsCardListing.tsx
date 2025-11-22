import AddOnCard from "@/components/ui/addOnCard";
import { FaChartLine, FaPiggyBank } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

const addOns = [
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Weekly Market Insights",
    description: "Get expert market breakdowns and trade ideas every week.",
  },
  {
    icon: <FaPiggyBank className="text-white text-2xl" />,
    title: "Strategy Vault",
    description:
      "Access our complete library of back-tested trading strategies.",
  },
  {
    icon: <RiStockFill className="text-white text-2xl" />,
    title: "Premium Indicators",
    description:
      "Gain precision with our high-performance custom trading indicators.",
  },
];
export default function AddOnsCardListing() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid py-10 md:px-20 px-2 grid-cols-1 md:grid-cols-3 gap-1">
        {addOns.map((addOn) => (
          <AddOnCard
            key={addOn.title}
            icon={addOn.icon}
            title={addOn.title}
            description={addOn.description}
          />
        ))}
      </div>
    </div>
  );
}
