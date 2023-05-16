const Shimmer = () => {
  return (
    <>
    <div className="bg-body-colour flex flex-wrap gap-7 p-10 justify-center" data-testid="shimmer">
        {Array(15).fill('').map((e , index ) => ( <div key={index}  className="border-2 border-transparent bg-white  w-[300px] h-[380px] p-3"></div>))}
    </div>
    </>
  );
}

export default Shimmer;