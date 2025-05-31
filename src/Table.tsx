export default function TableOfContents() {
    return (
        <>
            <div className="TableOfContents bg-base-100 h-screen flex flex-col justify-center items-start p-6">
                <h2 className="text-5xl font-bold mb-8">Table of Contents</h2>
                <ul className="text-3xl space-y-4">
                    <li><a href="#section1" className="hover:text-[#b5dcff] transition-colors duration-300">Section 1</a></li>
                    <li><a href="#section2" className="hover:text-[#b5dcff] transition-colors duration-300">Section 2</a></li>
                    <li><a href="#section3" className="hover:text-[#b5dcff] transition-colors duration-300">Section 3</a></li>
                </ul>
            </div>
        </>
    )
}