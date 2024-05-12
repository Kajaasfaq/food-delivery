import { IMG_CDN_URL } from '../contant';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
<<<<<<< HEAD
  avgRating,
  costForTwo,
  sla
=======
  sla,
  avgRating
>>>>>>> 31dbe808c62b0d2affc605693b3db212b86edf02
}) => {
  return (
    <div className="border-2 border-transparent bg-white mt-5  w-[310px] h-[550px] p-3 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
      <img className='w-[100%]'
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
<<<<<<< HEAD
      <h2 className='mt-2 text-xl font-bold'>{name}</h2>
      <h3 className="mt-2 font-semibold">{cuisines.join(", ")}</h3>
      <span className='flex flex-row font-bold'><h4 className='mt-2'>{avgRating}⭐</h4><span className="text-xl font-extrabold mt-2 mr-2 ml-2">.</span><h4 className='mt-2 text-orange-700'>{sla?.lastMileTravelString} distance</h4></span>
      <h4 className='mt-2'>{costForTwo}</h4>
=======
      <h2 className='mt-2 text-xl'>{name}</h2>
      <h3 className="mt-4">{cuisines.join(", ")}</h3>
      <h4 className='mt-4 text-orange-700'>{sla.lastMileTravel} distance</h4>
      <h4 className="mt-4">{avgRating} ⭐</h4>
>>>>>>> 31dbe808c62b0d2affc605693b3db212b86edf02
    </div>
  );
};

export default RestrauntCard; 
