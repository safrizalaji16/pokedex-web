import loader from "../assets/spinner.png";

export default function Preloader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <div className="animate-spin" role="status">
          <img className="h-10 w-10" src={loader} alt="spinner" />
        </div>
      </div>
    </div>
  );
}
