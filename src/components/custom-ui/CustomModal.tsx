import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent } from "./Dialog";

interface CustomModalProps {
  isOpen: boolean;
  hideCloseBtn?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const CustomModal = (props: CustomModalProps) => {
  const { isOpen, setIsOpen, children, hideCloseBtn = false } = props;
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="min-w-fit p-8" hideCloseBtn={hideCloseBtn}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
