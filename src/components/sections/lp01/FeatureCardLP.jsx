import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function FeatureCardLP({
  number,
  title,
  description,
  className,
}) {
  return (
    <MotionDivDownToUp
      className={` relative bg-neutral-100 rounded-xl max-w-[300px] desktop2:max-w-[35%] flex desktop1:max-w-[350px] flex-col items-center desktop1:hover:scale-110 p-[22px] ${className}`}
    >
      <div className=" absolute bg-buttonColor top-[-25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-labelButtons text-title1 font-semibold">
        {number}
      </div>
      <h1 className="h-auto w-full leading-[28px] font-bold font-mainFont text-title2 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-secondFont text-paragraph3 w-full">
        {description}
      </p>
    </MotionDivDownToUp>
  );
}
