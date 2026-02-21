// Navbar.jsx
import { IdCard, LucidePlus } from "lucide-react";
import Button from "./common/Button";
import FilterBar from "./Filters";

export default function Navbar({ userName = "simranpanthi101@gmail.com", onPostEvent, boardLayout, setBoardLayout }: { 
    userName?: string; 
    onPostEvent: () => void 
    boardLayout: "board" | "booklet";
    setBoardLayout: (v: "board" | "booklet") => void;
}) {

    return (
        <header className="w-full bg-white  border border-stone-200">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
                {/* left */}
                <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <IdCard className="h-6 w-6 text-(--accent)" />
                    </div>
                    <div className="flex items-baseline gap-2 min-w-0">
                        <h1 className="text-xl sm:text-3xl font-semibold whitespace-nowrap">
                            The Board
                        </h1>
                        <span className="text-sm sm:text-lg font-medium text-stone-400 truncate hidden sm:inline">
                           | {userName}
                        </span>
                    </div>
                </div>

                {/* toggle button to switch between booklet and poster view*/}        
                {/* selected option will be in black */}
                <div className="flex rounded-full border border-stone-300 overflow-hidden">
                    {/*board*/}
                    <button type="button" onClick={() => setBoardLayout("board")} 
                    className={`px-4 py-1 text-sm font-medium ${
                        boardLayout === "board"  ? "bg-black text-white": "bg-white text-stone-600"}`}>
                    Board
                    </button>
                    {/*booklet*/}
                    <button type="button" onClick={() => setBoardLayout("booklet")}
                    className={`px-4 py-1 text-sm font-medium ${
                        boardLayout === "booklet" ? "bg-black text-white" : "bg-white text-stone-600"}`}>
                    Booklet
                    </button>
                </div>

                {/* right */}
                <Button
                    type="button"
                    onClick={onPostEvent}
                    icon={LucidePlus}
                    iconPosition="left"
                    className="shrink-0 bg-(--accent) px-4 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:bg-(--surface) hover:text-(--accent) border border-(--accent) cursor-pointer whitespace-nowrap"
                >
                    Post an event
                </Button>
            </div>
            <div className="w-full">
                <FilterBar />
            </div>
        </header>
    );
}