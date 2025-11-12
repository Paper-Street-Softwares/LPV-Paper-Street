
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";

export default function FooterLP() {
  return (
    <div className="bg-bgFixedLight">
      <SectionArea paddingTopAndBottom={false}>
        <SectionWrapper>
          <div className="w-full text-center font-mainFont py-[36px] opacity-70">
            <button>
              <a
                href="/privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-md bg-black/20"
              >
                Políticas de Privacidade
              </a>
            </button>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
