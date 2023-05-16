const ShimmerMenu = () => {
    return(
        <>
        <div className="bg-body-colour h-[820px] w-[1778px]">
             {Array(1).fill('').map((e , index ) => (<div key={index} className="  bg-white  w-[1500px] h-[95%] relative left-[139px] top-7"></div>))}
        </div>
        </>
    )
}

export default ShimmerMenu;