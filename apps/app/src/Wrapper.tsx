// Layout.tsx
import Navbar from "./components/Navbar";

export default function Wrapper({navbar, children, onPostEvent, boardLayout, setBoardLayout}: { 
    navbar?: boolean; 
    children: React.ReactNode; 
    onPostEvent: () => void; 
    boardLayout: "board" | "booklet";
    setBoardLayout: (v: "board" | "booklet") => void; 
}) {

    return (
        <div className="min-h-screen bg-(--page-bg)">
        {navbar && 
                <Navbar onPostEvent={onPostEvent} boardLayout={boardLayout} setBoardLayout={setBoardLayout}/>
            }
            <main className="px-6 py-6">
                {children}
            </main>
        </div>
    );
}