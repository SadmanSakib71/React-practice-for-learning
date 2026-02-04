const Accordion = ({ title, isActive, children, onClick }) => {
  return (
    <div className="w-2/5 border py-1 mb-1">
      <p>{title}</p>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="border px-1" onClick={onClick}>
          show
        </button>
      )}
    </div>
  );
};

export default Accordion;
