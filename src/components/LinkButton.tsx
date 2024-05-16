import { cn } from "@/lib/utils";
import { MdArrowRightAlt } from "react-icons/md";

interface ButtonContainer {
  className?: string;
}

interface Typography {
  value: string;
  className?: string;
}

interface LinkButtonProps {
  url?: string;
  typography: Typography;
  container?: ButtonContainer;
  arrowLeft?: boolean;
}

const LinkButton = ({
  url,
  typography,
  container,
  arrowLeft = false,
}: LinkButtonProps) => {
  return (
    <div
      className={cn(
        "flex h-fit w-fit items-center justify-center px-3",
        arrowLeft ? "ml-[-2px]" : "mr-[-2px]",
        container?.className
      )}
    >
      <a href={url}>
        <h3
          className={cn(
            "mt-1 flex cursor-pointer  items-center border-[rgba(255,255,255,0.3)] py-1  text-[21px] leading-[18px] text-white hover:mb-[-1px] hover:border-b-[1px]",
            arrowLeft ? "pr-1" : "pl-1",
            typography?.className
          )}
        >
          {arrowLeft && (
            <span className="mr-1 rotate-180 text-[18px] text-white">
              <MdArrowRightAlt size={30} color={"#de4444"} />
            </span>
          )}
          {typography.value}
          {!arrowLeft && (
            <span className="ml-1 text-[18px] text-white">
              <MdArrowRightAlt size={30} color={"#de4444"} />
            </span>
          )}
        </h3>
      </a>
    </div>
  );
};

export default LinkButton;
