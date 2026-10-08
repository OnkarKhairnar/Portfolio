const pad = (n) => String(n).padStart(2, '0');

const SheetHeader = ({ n, title, total = 6 }) => {
  return (
    <div className="sheet-header">
      <span className="tag">
        SHEET {pad(n)}/{pad(total)}
      </span>
      <span className="rule" />
      <span className="title">{title}</span>
    </div>
  );
};

export default SheetHeader;