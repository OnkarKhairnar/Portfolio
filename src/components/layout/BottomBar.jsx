import { profile } from '../../data/profile';

const pad = (n) => String(n).padStart(2, '0');

const BottomBar = ({ sheet, total }) => {
  return (
    <div className="bottom-bar">
      <span>
        DRAWN BY: <b>{profile.shortName}</b>
      </span>

      <span>
        SCALE 1:1 · {profile.rev.replace('REV. ', 'REV ')}
      </span>

      <span>
        SHEET {pad(sheet)} / {pad(total)}
      </span>
    </div>
  );
};

export default BottomBar;