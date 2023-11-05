export default function About() {
    return (
        <div>
            <h1 className="m-auto w-fit">About</h1>
            <p>Info about me.........</p>
            <div className='flex gap-1'>
                <p>CV:</p>
                <a href="/CV/CV English.pdf" download className='underline underline-offset-2'>Download</a>
                <a href="/CV/CV English.pdf" target='_blank' className='underline underline-offset-2'>View</a>
            </div>
        </div>
    )
}