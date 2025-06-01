export default function TableOfContents() {
    return (
        <>
            <div className="TableOfContents bg-base-100 h-screen flex flex-col justify-center items-start p-6">
                <h2 className="text-5xl font-bold mb-8">Table of Contents</h2>
                <ul className="text-3xl space-y-4">
                    <li><a href="#projects" className="hover:text-[#b5dcff] transition-colors duration-300">Projects</a></li>
                    <li><a href="#pictures" className="hover:text-[#b5dcff] transition-colors duration-300">Pictures</a></li>
                    <li><a href="#about" className="hover:text-[#b5dcff] transition-colors duration-300">About</a></li>
                </ul>
            </div>
        </>
    )
}