import { useState } from "react";

export default function Booklet({}: { userName?: string;}){
    // to keep track of which poster is showing, page = 0 initially
    const [page, setPage] = useState(0);

    // Go back one poster but never < 0
    function flipPrevPoster() {
        const prevPage = page - 1;
        const newPage = Math.max(0, prevPage);
        setPage(newPage);
    }

    // go to next poster
    function flipNextPoster() {    
        setPage(page + 1); // update later eventually to only go beyond what's available to be viewed
    }

    return (
    <div className="p-4">
        <p className="text-lg font-medium text-gray-700 text-center"> {page + 1}/infinite</p>
        {/* poster area */}
        <div className="mt-4 border rounded-lg bg-white shadow w-full max-w-md mx-auto p-10  flex items-center justify-center aspect-[3/4]">
        
        </div>

        {/* next and prev buttons */}
        <div className="flex justify-center gap-6 mt-4">
        <button onClick={flipPrevPoster} className="px-4 py-2 bg-gray-200 rounded">
            Prev
        </button>
        <button onClick={flipNextPoster} className="px-4 py-2 bg-gray-200 rounded">
            Next
        </button>
        </div>
    </div>
    );
}
