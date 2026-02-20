// Navbar.jsx
import { IdCard } from "lucide-react";

export default function Navbar({ userName = "Simran Panthi", onPostEvent }: { userName?: string; onPostEvent: () => void }) {
    return (
        <header className="w-full bg-white px-4 py-3 border border-stone-200">
            <div className="flex items-center justify-between gap-3">
                {/* left */}
                <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                        <IdCard className="h-6 w-6 text-(--accent)" />
                    </div>
                    <div className="flex items-baseline gap-2 min-w-0">
                        <h1 className="text-xl sm:text-3xl font-semibold whitespace-nowrap">
                            The Board
                        </h1>
                        <span className="text-base sm:text-lg text-stone-400 hidden xs:inline">|</span>
                        <span className="text-sm sm:text-lg font-medium text-stone-400 truncate hidden sm:inline">
                            {userName}
                        </span>
                    </div>
                </div>

                {/* right */}
                <button
                    type="button"
                    onClick={onPostEvent}
                    className="shrink-0 rounded-xl bg-(--accent) px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white hover:bg-(--surface) hover:text-(--accent) border border-(--accent) cursor-pointer whitespace-nowrap"
                >
                    + Post Event
                </button>
            </div>
        </header>
    );
}