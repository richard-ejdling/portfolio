export default function About() {
    return (
        <div>
            <h1 className="m-auto w-fit">About</h1>
            <p>Info about me.........</p>
            <div className='flex gap-1'>
                <p>CV:</p>
                <a href="/Shiva.jpg" download>Download</a>
                <a href="/Shiva.jpg" target='_blank'>View</a>
            </div>
        </div>
    )
}