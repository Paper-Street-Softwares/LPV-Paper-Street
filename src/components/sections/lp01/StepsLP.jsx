import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";

function StepsNovoTemplate() {
  const steps = Object.values(content.texts.steps.cards);

  return (
    <SectionArea className="bg-secondary/20">
      <SectionWrapper>
        <section>
          <div className="container mx-auto">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-primary rounded-[2rem] rotate-3 opacity-10 " />
                <img
                  src={content.texts.steps.img}
                  alt="Passo a passo"
                  className="relative rounded-[2rem] shadow-xl w-full"
                />
              </div>

              <div className="order-1 space-y-12 lg:order-2">
                <div>
                  <span className="block mb-2 text-xs font-bold tracking-wider uppercase text-primary font-secondFont">
                    {content.texts.steps.miniTag}
                  </span>
                  <h2 className="mb-6 text-3xl font-medium md:text-4xl font-mainFont text-foreground">
                    {content.texts.steps.title}
                  </h2>
                </div>

                <div className="space-y-8">
                  {steps.map((item, idx) => (
                    <div key={idx} className="relative flex gap-6">
                      {idx !== 3 && (
                        <div className="absolute left-[1.65rem] top-12 bottom-0 w-0.5 bg-primary/20" />
                      )}
                      <div className="z-10 flex items-center justify-center text-xl font-bold bg-white border-2 rounded-full shadow-sm w-14 h-14 border-primary text-primary font-mainFont shrink-0">
                        {item.stepNumber}
                      </div>
                      <div className="pt-2">
                        <h3 className="mb-2 text-xl font-bold font-mainFont text-textPadrao">
                          {item.cardTitle}
                        </h3>
                        <p className="font-light text-mutedForeground font-secondFont">
                          {item.cardDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default StepsNovoTemplate;
