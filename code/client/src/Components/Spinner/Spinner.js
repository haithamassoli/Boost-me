import "./Spinner.css";
function Spinner() {
  return (
    <div className="fixed top-0 left-0 z-50 h-full w-full overflow-hidden bg-black/50">
      <div className="lds-ring z-50">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
