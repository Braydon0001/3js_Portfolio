import { Dispatch, SetStateAction, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { ScrollArea } from "../ui/scroll-area";

interface GlassPopupProps {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;

  heading?: string;
  children: React.ReactNode;

  isLoading?: boolean;
  hideCloseBtn?: boolean;
  lightBg?: boolean;
  displayNone?: boolean;
}

const GlassPopup = (props: GlassPopupProps) => {
  const {
    isOpen,
    setIsOpen,
    heading,
    children,
    isLoading,
    lightBg = true,
    hideCloseBtn = false,
    displayNone,
  } = props;

  useEffect(() => {
    if (document) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  return (
    <div className={`${displayNone && "hidden"} absolute`}>
      {/* background blur when drawer is active */}
      {isOpen && (
        <div>
          <div
            className=" top-0 left-0 transparent-blur-bg fixed z-[53] h-full w-full cursor-pointer blur-lg"
            onClick={() => {
              !hideCloseBtn && setIsOpen?.(false);
            }}
          />

          <div
            className={`  ${
              lightBg ? "glassWhiter5" : "glassWhiter"
            } glass shadow-md fixed left-[50%]  top-[50%] z-[53] h-[80vh] w-[100vw] translate-y-[-50%] translate-x-[-50%] rounded-[15px] p-[10px]  pb-[15px] pt-[15px] sm:w-[90vw] sm:p-[30px] sm:pt-[30px] sm:pb-[40px] md:w-[70vw] ${
              hideCloseBtn && "pt-[40px]"
            }`}
          >
            {!hideCloseBtn && (
              <button
                className="absolute right-[23px] top-5 rounded-[15px] text-[24px] font-bold  leading-[24px]  text-white"
                onClick={() => {
                  setIsOpen?.(false);
                }}
              >
                <MdClose
                  size={30}
                  color={"#de4444"}
                  className=" ease-in-1s transition hover:rotate-90 "
                />
              </button>
            )}

            <div className="scrollbar scrollbarWidth2 mt-[30px] h-[calc(100%-40px)] overflow-y-auto  p-4 overflow-x-hidden">
              {heading && (
                <>
                  <h2 className="text-[40px] text-[#333] font-semibold">
                    {heading}
                  </h2>
                </>
              )}
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlassPopup;
