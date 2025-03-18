import fb from "../assets/fb.png";
import Google from "../assets/google.png";

const Socials = () => {
  return (
    <div>
      <div className="text-center my-4">— Social Account —</div>
      <button className="w-full flex items-center justify-center border border-blue-500 text-blue-600 py-2 mb-2 bg-blue-100">
        <img src={fb} alt="" className="mr-2 w-10 h-15" />
        {/* <span className="mr-2">🔵</span> Facebook With $5 Off */}
        Facebook
      </button>
      <button className="w-full flex items-center justify-center border border-red-500 text-red-600 py-2 bg-red-100">
        <img src={Google} alt="" className="mr-2 w-10 h-15" />
        {/* <span className="mr-2">🔴</span> Google With $5 Off */}
        Google
      </button>
    </div>
  );
};

export default Socials;
