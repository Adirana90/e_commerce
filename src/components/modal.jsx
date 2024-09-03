import PropTypes from "prop-types";

export const Modal = ({ children }) => {
  return (
    <div className="">
      <div className="inset-0 fixed bg-slate-700 bg-opacity-30 backdrop-blur-sm">
        <div className="flex justify-center items-center h-[100vh]">
          <div className="w-[500px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
};
