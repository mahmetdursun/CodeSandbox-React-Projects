import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/carsSlice";

function CarList() {
  const { data } = useSelector((state) => state.cars);

  const cars = data;
  const dispatch = useDispatch();
  const onClick = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car, id) => {
    return (
      <div key={id} className="panel">
        <p>
          {car.name} - ${car.value}
        </p>
        <button className="button" onClick={() => onClick(car)}>
          Sil
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className="no-cars">Başlamak için araba ekleyin</div>
      )}
    </div>
  );
}

export default CarList;
