const CityList = ({ cityList }) => {
  return (
    <div>
      
      {cityList.map((city) => {
        return (
          <div className="tl bg-light-gray br3 pa1 ma2 shadow-5 dark-blue grow">
            <p>{city}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
