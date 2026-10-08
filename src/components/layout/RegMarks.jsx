import { profile } from '../../data/profile';

const RegMarks = () => {
  const { coords, rev } = profile;
  return (
    <>
      <div className="reg-mark reg-tl" />
      <div className="reg-mark reg-tr" />
      <div className="reg-mark reg-bl" />
      <div className="reg-mark reg-br" />
      <div className="coord-label coord-tl">
        {coords.lat}
        <br />
        {coords.lng}
      </div>
      <div className="coord-label coord-tr">
        {coords.place}
        <br />
        {rev}
      </div>
    </>
  );
}

export default RegMarks;