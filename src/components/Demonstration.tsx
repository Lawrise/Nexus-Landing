import { Button } from "@/components/ui/button";

const DemoTab = [
  {
    id: 1,
    title: "Notes taking",
  },
  {
    id: 2,
    title: "Learning path",
  },
  {
    id: 3,
    title: "Peer to peer",
  },
];

const Demonstration = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center h-[400px] lg:h-[600px] w-2/3 lg:w-2/4 bg-orange-300 rounded-md mb-8">
        Screenshot of the actual app
      </div>
      <div className="flex gap-4 justify-start">
        {DemoTab.map((tab) => {
          return <Button key={tab.id}>{tab.title}</Button>;
        })}
      </div>
    </div>
  );
};

export default Demonstration;
