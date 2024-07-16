import { forwardRef } from "react"

const Section = forwardRef(({ title, icon, id, styles, children }, ref) => {
    return (
        <section id={id} ref={ref} className={styles}>
            <div className="flex items-center gap-2 m-auto w-fit">
                <span className="text-3xl inline">{icon}</span>
                <h2 className=" text-3xl">{title}</h2>
            </div>
            {children}
        </section>
    )
})

export default Section