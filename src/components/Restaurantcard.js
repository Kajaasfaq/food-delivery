import { IMG_CDN_URL } from '../contant';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
  sla
}) => {
  return (
    <div className="border-2 border-transparent bg-white mt-5  w-[310px] h-[550px] p-3 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
      <img className='w-[100%]'
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className='mt-2 text-xl font-bold'>{name}</h2>
      <h3 className="mt-2 font-semibold">{cuisines.join(", ")}</h3>
      <span className='flex flex-row font-bold'><h4 className='mt-2'>{avgRating}⭐</h4><span className="text-xl font-extrabold mt-2 mr-2 ml-2">.</span><h4 className='mt-2 text-orange-700'>{sla?.lastMileTravelString} distance</h4></span>
      <h4 className='mt-2'>{costForTwo}</h4>
    </div>
  );
};

export default RestrauntCard; 
