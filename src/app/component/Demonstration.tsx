import Button from "./Button";

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
      <div className="h-96 w-2/3 bg-orange-300 rounded-md mb-8"></div>
      <div className="flex gap-4 justify-start">
        {DemoTab.map((tab) => {
          return <Button key={tab.id}>{tab.title}</Button>;
        })}
      </div>
    </div>
  );
};

export default Demonstration;
