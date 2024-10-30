import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "@/slices/modeSlice";

function ModeToggle() {
  const { mode } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="w-8 h-8"
        onClick={() => {
          mode.theme === "light"
            ? dispatch(setMode("dark"))
            : dispatch(setMode("light"));
        }}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90 dark:scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}

export default ModeToggle;
