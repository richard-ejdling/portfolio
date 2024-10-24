import { forwardRef } from "react";

const Section = forwardRef(({ title, icon, id, styles, children }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`${styles} w-full`}
      tabIndex={"-1"}
    >
      <div className="flex items-center gap-2 m-auto w-fit mb-4">
        {icon && <span className="text-3xl sm:text-4xl inline">{icon}</span>}
        {title && <h2 className=" text-[40px] sm:text-4xl">{title}</h2>}
      </div>
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
