import { IMG_CDN_URL } from '../contant';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating
}) => {
  return (
    <div className="border-2 border-transparent bg-white mt-5  w-[300px] h-[450px] p-3 hover:transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">
      <img className='w-[100%]'
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className='mt-2 text-xl'>{name}</h2>
      <h3 className="mt-4">{cuisines.join(", ")}</h3>
      <h4 className='mt-4 text-orange-700'>{sla[1]} distance</h4>
      <h4 className="mt-4">{avgRating} ⭐</h4>
    </div>
  );
};

export default RestrauntCard; 
