import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowltWorksCardLPV({
  icon,
  title,
  description,
  animation = true,
  colorMode = "default", // 'light', 'dark' ou 'default'
}) {
  let textColor, textOpacity;

  switch (colorMode) {
    case "light":
      textColor = "text-black";
      textOpacity = "opacity-90";
      break;
    case "dark":
      textColor = "text-white";
      textOpacity = "opacity-80";
      break;
    case "default":
    default:
      textColor = "text-black";
      textOpacity = "opacity-80";
      break;
  }

  const BaseContent = (
    <div className="flex flex-col items-center transition desktop1:items-center text-center min-w-[255px] desktop1:max-w-[180px] m-auto tablet1:m-0 desktop1:hover:scale-110 h-auto justify-between p-4 ">
      <div
        className={`p-[18px] mb-[18px] flex justify-center items-center text-labelButtons bg-primary rounded-md`}
      >
        {icon}
      </div>

      <h1 className={`text-[20px] min-h-[60px] font-mainFont ${textColor}`}>{title}</h1>
      <p
        className={`text-[16px] text-center w-full font-secondFont ${textColor} ${textOpacity}`}
      >
        {description}
      </p>
    </div>
  );

  const StaticContent = (
    <div
      className="flex w-[288px] tablet1:max-h-[300px] flex-col items-center transition 
  desktop1:items-center font-mainFont text-center desktop1:max-w-[280px]  
  desktop1:h-[400px] m-auto tablet1:m-0 desktop1:hover:scale-110 
  justify-between p-6 rounded-md"
    >
      <div
        className="p-[18px] mb-[24px] w-16 h-16 flex justify-center items-center 
    text-labelButtons bg-primary rounded-md"
      >
        {icon}
      </div>

      <h1 className="text-paragraph4 text-white mb-[18px] min-h-[48px] flex items-center">
        {title}
      </h1>

      <p
        className={`text-paragraph3 font-secondFont text-center w-full min-h-[100px] flex items-start text-gray-400 ${textOpacity}`}
      >
        {description}
      </p>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp>{BaseContent}</MotionDivDownToUp>
  ) : (
    <MotionDivDownToUp>{StaticContent}</MotionDivDownToUp>
  );
}
