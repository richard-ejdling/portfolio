import { forwardRef } from "react"

const Section = forwardRef(({ title, icon, id, styles, children }, ref) => {
    return (
        <section id={id} ref={ref} className={styles}>
            <div className="flex items-center gap-2 m-auto w-fit">
                <span className="text-3xl sm:text-4xl inline">{icon}</span>
                <h2 className=" text-3xl sm:text-4xl">{title}</h2>
            </div>
            {children}
        </section>
    )
})

Section.displayName = "Section"

export default Section