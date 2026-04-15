import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, containerClassName }, ref) => {
    return (
      <section ref={ref} id={id} className={cn("section-padding", className)}>
        <Container className={containerClassName}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = "Section";
