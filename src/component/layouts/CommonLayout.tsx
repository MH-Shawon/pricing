const CommonLayout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="w-[100%] sm:w-[95%] px-4 md:w-[80%] 3xl:w-[75%] pb-[20px] xl:pb-[27px] 3xl:pb-[30px]">
        {children}
      </div>
    </div>
  );
};

export default CommonLayout;
