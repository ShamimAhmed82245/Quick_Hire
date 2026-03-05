import clsx from "clsx";
import svgPaths from "./svg-ppi57ypjhb";

function JobCategory1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[#d6ddeb] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        {children}
      </svg>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]">
      <div className="absolute inset-[12.5%_12.5%_12.51%_12.5%]" data-name="Vector">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="absolute flex inset-[23.76%_17.71%_26.04%_19.79%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[15px] w-[12.049px]">
          <div className="relative size-full" data-name="Arrow - Right">
            <div className="absolute inset-[-6.67%_-8.3%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.049 17.0002">
                {children}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <g id="Arrow - Right">{children}</g>
    </Wrapper>
  );
}
type JobCategoryVectorProps = {
  additionalClassNames?: string;
};

function JobCategoryVector({ additionalClassNames = "" }: JobCategoryVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-66.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 3.5">
          <path d="M2.5 1L1 2.5" id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type CategoryName1Props = {
  text: string;
  text1: string;
};

function CategoryName1({ text, text1, children }: React.PropsWithChildren<CategoryName1Props>) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
      <p className="font-['Clash_Display:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#25324b] text-[24px] w-[210px] whitespace-pre-wrap">{text}</p>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Jobs Available">
        <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#7c8493] text-[18px]">{text1}</p>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <CategoryName text="Marketing" text1="140 jobs available">
      <g id="Arrow - Right">
        <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </g>
    </CategoryName>
  );
}
type CategoryNameProps = {
  text: string;
  text1: string;
};

function CategoryName({ text, text1, children }: React.PropsWithChildren<CategoryNameProps>) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
      <p className="font-['Clash_Display:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24px] text-white w-[210px] whitespace-pre-wrap">{text}</p>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Jobs Available">
        <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[18px] text-white">{text1}</p>
        <Wrapper>{children}</Wrapper>
      </div>
    </div>
  );
}
type JobCategoryProps = {
  className?: string;
  active?: boolean;
  device?: "Desktop" | "Mobile";
  size?: "Normal" | "Small";
};

function JobCategory({ className, active = false, device = "Desktop", size = "Normal" }: JobCategoryProps) {
  const isActiveAndNormalAndDesktop = active && size === "Normal" && device === "Desktop";
  const isActiveAndSmallAndDesktop = active && size === "Small" && device === "Desktop";
  const isNotActiveAndNormalAndDesktop = !active && size === "Normal" && device === "Desktop";
  const isNotActiveAndSmallAndDesktop = !active && size === "Small" && device === "Desktop";
  const isNotActiveAndSmallAndMobile = !active && size === "Small" && device === "Mobile";
  const isSmallAndDesktopAndIsFalseOrTrue = size === "Small" && device === "Desktop" && [false, true].includes(active);
  return (
    <div className={className || `relative ${isNotActiveAndSmallAndMobile ? "bg-white w-[343px]" : active && device === "Desktop" && ["Normal", "Small"].includes(size) ? "bg-[#4640de]" : "bg-white"}`}>
      <div aria-hidden={isNotActiveAndNormalAndDesktop || isNotActiveAndSmallAndDesktop || isActiveAndSmallAndDesktop || isNotActiveAndSmallAndMobile ? "true" : undefined} className={isActiveAndNormalAndDesktop ? "content-stretch flex flex-col gap-[32px] items-start p-[32px] relative" : "absolute border border-[#d6ddeb] border-solid inset-0 pointer-events-none"}>
        {isActiveAndNormalAndDesktop && (
          <>
            <Icon1>
              <div className="absolute inset-[-5.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9995 19.9988">
                  <path d={svgPaths.p1bb7dc00} id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </Icon1>
            <Helper />
          </>
        )}
      </div>
      {(isNotActiveAndNormalAndDesktop || isNotActiveAndSmallAndDesktop || isActiveAndSmallAndDesktop || isNotActiveAndSmallAndMobile) && (
        <div className={`flex ${isNotActiveAndSmallAndMobile ? "flex-row items-center size-full" : "content-stretch flex-col gap-[32px] items-start p-[32px] relative"}`}>
          {device === "Desktop" && ((!active && size === "Normal") || (!active && size === "Small") || (active && size === "Small")) && (
            <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Vector" />
              </svg>
              <div className="absolute inset-[13.21%_13.21%_12.5%_12.5%]" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-5.61%]" : "inset-[-4.21%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 19.8284 19.8284" : "0 0 38.6569 38.6569"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? svgPaths.p29b61500 : svgPaths.p2cf5d800} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[22.92%_22.92%_60.42%_60.42%]" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-25%]" : "inset-[-18.75%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 6 6" : "0 0 11 11"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? "M1 1L5 5" : "M1.5 1.5L9.5 9.5"} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/2 left-[12.5%] right-1/2 top-[12.5%]" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-11.11%]" : "inset-[-8.33%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 11 11" : "0 0 21 21"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? "M10 6L5 1L1 5L6 10" : svgPaths.p355bba80} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[33.33%_70.83%_60.42%_22.92%]" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-66.67%]" : "inset-[-50%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 3.5 3.5" : "0 0 6 6"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? "M2.5 1L1 2.5" : "M4.5 1.5L1.5 4.5"} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-1/2 right-[12.5%] top-1/2" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-11.11%]" : "inset-[-8.33%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 11 11" : "0 0 21 21"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? "M5 1L10 6L6 10L1 5" : svgPaths.p1b3a1f80} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[70.83%_33.33%_22.92%_60.42%]" data-name="Vector">
                <div className={`absolute ${isSmallAndDesktopAndIsFalseOrTrue ? "inset-[-66.67%]" : "inset-[-50%]"}`}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={isSmallAndDesktopAndIsFalseOrTrue ? "0 0 3.5 3.5" : "0 0 6 6"}>
                    <path d={isSmallAndDesktopAndIsFalseOrTrue ? "M2.5 1L1 2.5" : "M4.5 1.5L1.5 4.5"} id="Vector" stroke={isSmallAndDesktopAndIsFalseOrTrue ? "var(--stroke-0, #25324B)" : "var(--stroke-0, #4640DE)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={isSmallAndDesktopAndIsFalseOrTrue ? "2" : "3"} />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {isSmallAndDesktopAndIsFalseOrTrue && <p className={`font-["Clash_Display:Semibold",sans-serif] leading-[1.2] not-italic relative shrink-0 text-[24px] w-[210px] whitespace-pre-wrap ${isActiveAndSmallAndDesktop ? "text-white" : "text-[#25324b]"}`}>Design</p>}
          {isNotActiveAndNormalAndDesktop && (
            <CategoryName1 text="Design" text1="235 jobs available">
              <g id="Arrow - Right">
                <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </CategoryName1>
          )}
          {isNotActiveAndSmallAndMobile && (
            <div className="content-stretch flex gap-[32px] items-center p-[16px] relative w-full">
              <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[13.21%_13.21%_12.5%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.61%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8284 19.8284">
                      <path d={svgPaths.p29b61500} id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[22.92%_22.92%_60.42%_60.42%]" data-name="Vector">
                  <div className="absolute inset-[-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                      <path d="M1 1L5 5" id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-1/2 left-[12.5%] right-1/2 top-[12.5%]" data-name="Vector">
                  <Wrapper1 additionalClassNames="inset-[-11.11%]">
                    <path d="M10 6L5 1L1 5L6 10" id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Wrapper1>
                </div>
                <JobCategoryVector additionalClassNames="inset-[33.33%_70.83%_60.42%_22.92%]" />
                <div className="absolute bottom-[12.5%] left-1/2 right-[12.5%] top-1/2" data-name="Vector">
                  <Wrapper1 additionalClassNames="inset-[-11.11%]">
                    <path d="M5 1L10 6L6 10L1 5" id="Vector" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Wrapper1>
                </div>
                <JobCategoryVector additionalClassNames="inset-[70.83%_33.33%_22.92%_60.42%]" />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Category Name">
                <p className="font-['Clash_Display:Semibold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#25324b] text-[20px] w-[210px] whitespace-pre-wrap" style={{ fontFeatureSettings: "'cv11'" }}>
                  Design
                </p>
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Jobs Available">
                  <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#7c8493] text-[16px]">235 jobs available</p>
                  <Icon>
                    <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </Icon>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function LandingPageCategoryDesktop() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page / Category / Desktop">
      <div className="content-stretch flex flex-col gap-[48px] items-start pt-[72px] px-[124px] relative">
        <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Title">
          <p className="font-['Clash_Display:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#25324b] text-[48px]" style={{ fontFeatureSettings: "'cv11'" }}>
            <span className="leading-[1.1]">{`Explore by `}</span>
            <span className="leading-[1.1] text-[#26a4ff]">category</span>
          </p>
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Button">
            <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#4640de] text-[16px] text-center">Show all jobs</p>
            <Icon>
              <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </Icon>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Content">
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Row 1">
            <JobCategory className="bg-white relative shrink-0" />
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[12.5%_54.17%_54.17%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                      <path d={svgPaths.p26c2ca00} id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[12.5%_54.17%_70.83%_29.17%]" data-name="Vector">
                  <Wrapper1 additionalClassNames="inset-[-18.75%]">
                    <path d="M1.5 1.5V9.5H9.5" id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </Wrapper1>
                </div>
                <div className="absolute inset-[70.83%_62.5%_12.5%_37.5%]" data-name="Vector">
                  <div className="absolute inset-[-18.75%_-1.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 11">
                      <path d="M1.5 1.5V9.5" id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[58.33%_29.17%_12.5%_70.83%]" data-name="Vector">
                  <div className="absolute inset-[-10.71%_-1.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 17">
                      <path d="M1.5 1.5V15.5" id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[54.17%_45.83%_12.5%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-9.38%_-1.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 19">
                      <path d="M1.5 1.5V17.5" id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[12.5%] left-[87.5%] right-[12.5%] top-1/2" data-name="Vector">
                  <div className="absolute inset-[-8.33%_-1.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 21">
                      <path d="M1.5 1.5V19.5" id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <CategoryName1 text="Sales" text1="756 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
            <div className="bg-[#4640de] relative shrink-0" data-name="Job Category">
              <div className="content-stretch flex flex-col gap-[32px] items-start p-[32px] relative">
                <Icon1>
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.999 38.9976">
                      <path d={svgPaths.p105781f2} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </Icon1>
                <Helper />
              </div>
            </div>
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.36%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 31">
                      <path d={svgPaths.p298c1300} id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <CategoryName1 text="Finance" text1="325 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Row 2">
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                      <path d={svgPaths.pc467f80} id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <CategoryName1 text="Technology" text1="436 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-4.69%_-3.75%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 35.0007">
                      <path d={svgPaths.p142db500} id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <CategoryName1 text="Engineering" text1="542 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[8.33%_12.5%_16.67%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0008 39">
                      <path d={svgPaths.p3787c880} id="Vector" stroke="var(--stroke-0, #4640DE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </svg>
                  </div>
                </div>
              </div>
              <CategoryName1 text="Business" text1="211 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
            <JobCategory1>
              <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Icon">
                <div className="absolute inset-[12.5%_4.17%]" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                    <path clipRule="evenodd" d={svgPaths.p3359f00} fill="var(--fill-0, #25324B)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
              <CategoryName1 text="Human Resource" text1="346 jobs available">
                <g id="Arrow - Right">
                  <path d="M7.0246 16V1" id="Stroke 1" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pcca5f60} id="Stroke 3" stroke="var(--stroke-0, #25324B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </CategoryName1>
            </JobCategory1>
          </div>
        </div>
      </div>
    </div>
  );
}