import { IMG_CDN_URL } from '../contant';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          IMG_CDN_URL +
          cloudinaryImageId
        }
      />
      <h2 className='res-name'>{name}</h2>
      <h3 className='cuisines'>{cuisines.join(", ")}</h3>
      <h4 className='min'>{lastMileTravelString} distance</h4>
    </div>
  );
};

export default RestrauntCard; 