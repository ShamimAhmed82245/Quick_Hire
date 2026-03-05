import clsx from "clsx";
import svgPaths from "./svg-vtaknho5n";
import imgLandingPageCtaDesktop from "../assets/3ad48678939b1a70e13c1386143bf6d2df7f6ec6.png";
import imgLandingPageCtaDesktop1 from "../assets/dd2a0ce2931952f6be080a1ad0a1a434fdbdc7e9.png";
import imgLandingPageCtaDesktop2 from "../assets/0cc0cb4bdc7c7038cbe6ecbcb6471484d9a5714f.png";
import imgLandingPageCtaDesktop4 from "../assets/3f78d9b7a602caedf1464cfac554db50f001e514.png";
import { imgLandingPageCtaDesktop3 } from "./svg-yjvo4";

function Header({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[80.292px]">
      <div className="relative shrink-0 size-[18.8px]" data-name="Company Logo">
        {children}
      </div>
      <LandingPageCtaDesktopLabelText text="Full-Time" />
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div
      className={clsx(
        "content-stretch flex items-start p-[2.35px] relative rounded-[12.533px] shrink-0",
        additionalClassNames,
      )}
    >
      <div
        className="overflow-clip relative shrink-0 size-[7.833px]"
        data-name="Icon"
      >
        {children}
      </div>
    </div>
  );
}

function CardDashboard({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[56.792px] relative shrink-0 w-[89.3px]">
      <div className="content-stretch flex flex-col gap-[5.483px] items-start overflow-clip p-[6.267px] relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[3.133px] items-center justify-center px-[3.917px] py-[2.35px] relative">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white relative shrink-0 w-[96.546px]">
      <div
        aria-hidden="true"
        className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[8.617px] items-start p-[9.4px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function JobList1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div
        className="content-stretch flex flex-col gap-[6.267px] items-start relative shrink-0"
        data-name="Content"
      >
        {children}
      </div>
      <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0">
        <div className="relative rounded-[80px] shrink-0" data-name="Label">
          <div
            aria-hidden="true"
            className="absolute border-[#56cdad] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[80px]"
          />
          <div className="flex flex-row items-center justify-center size-full">
            <Text
              text="Business"
              additionalClassNames="gap-[3.133px] justify-center"
            />
          </div>
        </div>
        <LabelText text="Design" />
      </div>
      <LandingPageCtaDesktopHelper4 text="5 applied" text1="of 10 capacity" />
    </Wrapper>
  );
}

function JobList({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div
        className="content-stretch flex flex-col gap-[6.267px] items-start relative shrink-0"
        data-name="Content"
      >
        {children}
      </div>
      <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0">
        <div className="relative rounded-[80px] shrink-0" data-name="Label">
          <div
            aria-hidden="true"
            className="absolute border-[#ffb836] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[80px]"
          />
          <Wrapper1>
            <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#ffb836] text-[5.48px] whitespace-nowrap">
              {"Marketing"}
            </p>
          </Wrapper1>
        </div>
        <LabelText text="Design" />
      </div>
      <LandingPageCtaDesktopHelper4 text="5 applied" text1="of 10 capacity" />
    </Wrapper>
  );
}

function LandingPageCtaDesktopVector3({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-5.56%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 7.83333 7.83333"
        >
          {children}
        </svg>
      </div>
    </div>
  );
}
type SidebarMenuProps = {
  additionalClassNames?: string;
};

function SidebarMenu({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<SidebarMenuProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6.267px] items-center pl-[12.533px] pr-[6.267px] py-[4.7px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
type LandingPageCtaDesktopIcon1Props = {
  additionalClassNames?: string;
};

function LandingPageCtaDesktopIcon1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<LandingPageCtaDesktopIcon1Props>) {
  return (
    <div
      className={clsx(
        "overflow-clip relative size-[7.833px]",
        additionalClassNames,
      )}
    >
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Vector" />
      </svg>
      <div
        className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
        data-name="Vector"
      >
        <div className="absolute inset-[-15%_-7.5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 4.50418 2.54583"
          >
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type LandingPageCtaDesktopHelper4Props = {
  text: string;
  text1: string;
};

function LandingPageCtaDesktopHelper4({
  text,
  text1,
}: LandingPageCtaDesktopHelper4Props) {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full">
      <div
        className="content-stretch flex items-start relative shrink-0 w-full"
        data-name="Progress Bar"
      >
        <div className="bg-[#56cdad] flex-[1_0_0] h-[2.35px] min-h-px min-w-px" />
        <div className="bg-[#56cdad] flex-[1_0_0] h-[2.35px] min-h-px min-w-px" />
        <div className="bg-[#d6ddeb] flex-[1_0_0] h-[2.35px] min-h-px min-w-px" />
        <div className="bg-[#d6ddeb] flex-[1_0_0] h-[2.35px] min-h-px min-w-px" />
        <div className="bg-[#d6ddeb] flex-[1_0_0] h-[2.35px] min-h-px min-w-px" />
      </div>
      <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-black text-center whitespace-nowrap">
        <span className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] text-[#25324b] text-[14px]">
          {text}
        </span>
        <span className="leading-[1.6] text-[5.48px]">{` `}</span>
        <span className="leading-[1.6] text-[#7c8493] text-[5.48px]">
          {text1}
        </span>
      </p>
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="relative rounded-[80px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border-[#4640de] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[80px]"
      />
      <Wrapper1>
        <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#4640de] text-[5.48px] whitespace-nowrap">
          {text}
        </p>
      </Wrapper1>
    </div>
  );
}
type LocationProps = {
  text: string;
  text1: string;
};

function Location({ text, text1 }: LocationProps) {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center justify-center relative shrink-0">
      <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#7c8493] text-[6.27px] whitespace-nowrap">
        {text}
      </p>
      <div className="relative shrink-0 size-[1.567px]">
        <svg
          className="absolute block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1.56667 1.56667"
        >
          <circle
            cx="0.783333"
            cy="0.783333"
            fill="var(--fill-0, #A8ADB7)"
            id="Ellipse 4"
            r="0.783333"
          />
        </svg>
      </div>
      <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#7c8493] text-[6.27px] whitespace-nowrap">
        {text1}
      </p>
    </div>
  );
}
type LandingPageCtaDesktopJobTitleProps = {
  text: string;
  text1: string;
  text2: string;
};

function LandingPageCtaDesktopJobTitle({
  text,
  text1,
  text2,
}: LandingPageCtaDesktopJobTitleProps) {
  return (
    <div className="content-stretch flex flex-col gap-[0.783px] items-start relative shrink-0">
      <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#25324b] text-[7.05px] whitespace-nowrap">
        {text}
      </p>
      <Location text={text1} text1={text2} />
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex items-center px-[3.917px] py-[2.35px] relative",
        additionalClassNames,
      )}
    >
      <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#56cdad] text-[5.48px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type LandingPageCtaDesktopLabelTextProps = {
  text: string;
};

function LandingPageCtaDesktopLabelText({
  text,
}: LandingPageCtaDesktopLabelTextProps) {
  return (
    <div className="bg-[rgba(86,205,173,0.1)] relative rounded-[80px] shrink-0">
      <div className="flex flex-row items-center justify-end size-full">
        <Text text={text} additionalClassNames="justify-end" />
      </div>
    </div>
  );
}
type LandingPageCtaDesktopTitleTextProps = {
  text: string;
};

function LandingPageCtaDesktopTitleText({
  text,
}: LandingPageCtaDesktopTitleTextProps) {
  return (
    <div className="content-stretch flex items-start pb-[6.267px] pt-[9.4px] px-[9.4px] relative shrink-0 w-[137.867px]">
      <div
        className="flex flex-col font-['Clash_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25324b] text-[7.833px] text-center whitespace-nowrap"
        style={{ fontFeatureSettings: "'cv11'" }}
      >
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}

function LandingPageCtaDesktopHelper3() {
  return (
    <div className="absolute inset-[-0.39px_-60%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1.43611 0.783333"
      >
        <path
          d="M0.391667 0.391667H1.04444"
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.783333"
        />
      </svg>
    </div>
  );
}

function LandingPageCtaDesktopHelper2() {
  return (
    <div className="absolute inset-[-0.39px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 0.786597 0.783333"
      >
        <path
          d="M0.391667 0.391667H0.394931"
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.783333"
        />
      </svg>
    </div>
  );
}
type LandingPageCtaDesktopBarProps = {
  additionalClassNames?: string;
};

function LandingPageCtaDesktopBar({
  additionalClassNames = "",
}: LandingPageCtaDesktopBarProps) {
  return (
    <div
      className={clsx(
        "content-stretch flex flex-col gap-[0.783px] items-end justify-center relative shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <div className="bg-[#ffb836] flex-[1_0_0] min-h-px min-w-px w-full" />
      <div className="bg-[#7b61ff] flex-[1_0_0] min-h-px min-w-px w-full" />
    </div>
  );
}
type LandingPageCtaDesktopTabMenuText1Props = {
  text: string;
};

function LandingPageCtaDesktopTabMenuText1({
  text,
}: LandingPageCtaDesktopTabMenuText1Props) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center relative">
          <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.27px] whitespace-nowrap">
            <p className="leading-[1.6]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type LandingPageCtaDesktopTabMenuTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LandingPageCtaDesktopTabMenuText({
  text,
  additionalClassNames = "",
}: LandingPageCtaDesktopTabMenuTextProps) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[4.7px] py-[2.742px] relative">
          <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#4640de] text-[6.27px] whitespace-nowrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return (
    <div
      className={clsx(
        "content-stretch flex h-[41.517px] items-center justify-between p-[9.4px] relative shrink-0 w-[137.475px]",
        additionalClassNames,
      )}
    >
      <div className="content-stretch flex gap-[5.092px] items-center leading-[0] relative shrink-0 text-white">
        <div
          className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[18.8px] whitespace-nowrap"
          style={{ fontFeatureSettings: "'cv11'" }}
        >
          <p className="leading-none">{text}</p>
        </div>
        <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[7.05px] w-[78.333px]">
          <p className="leading-[1.6]">{text1}</p>
        </div>
      </div>
      <LandingPageCtaDesktopIcon />
    </div>
  );
}

function LandingPageCtaDesktopIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[9.4px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Vector" />
      </svg>
      <div
        className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4"
        data-name="Vector"
      >
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 3.13333 5.48333"
          >
            <path
              d={svgPaths.p3e641ec0}
              id="Vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.783333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
type LandingPageCtaDesktopVector2Props = {
  additionalClassNames?: string;
};

function LandingPageCtaDesktopVector2({
  additionalClassNames = "",
}: LandingPageCtaDesktopVector2Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-30%_-0.39px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 0.783333 2.08889"
        >
          <path
            d="M0.391667 0.391667V1.69722"
            id="Vector"
            stroke="var(--stroke-0, #4640DE)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.783333"
          />
        </svg>
      </div>
    </div>
  );
}

function LandingPageCtaDesktopCompanyLogo() {
  return (
    <div className="relative shrink-0 size-[18.8px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 32 32"
      >
        <g id="Base" />
      </svg>
      <div
        className="absolute inset-[5%_11.56%_5%_12.5%] overflow-clip"
        data-name="Nomad"
      >
        <div className="absolute inset-[0.01%_0_0.3%_0]" data-name="Group">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14.2763 16.8684"
          >
            <g id="Group">
              <path
                clipRule="evenodd"
                d={svgPaths.p1845f500}
                fill="var(--fill-0, #449B82)"
                fillRule="evenodd"
                id="Vector"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p1e590680}
                fill="var(--fill-0, #9BDB9C)"
                fillRule="evenodd"
                id="Vector_2"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p2bb73800}
                fill="var(--fill-0, #56CDAD)"
                fillRule="evenodd"
                id="Vector_3"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p23dc7680}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
                id="Vector_4"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type LandingPageCtaDesktopVector1Props = {
  additionalClassNames?: string;
};

function LandingPageCtaDesktopVector1({
  additionalClassNames = "",
}: LandingPageCtaDesktopVector1Props) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-25%_-0.39px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 0.783333 2.35"
        >
          <path
            d="M0.391667 0.391667V1.95833"
            id="Vector"
            stroke="var(--stroke-0, #7C8493)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.783333"
          />
        </svg>
      </div>
    </div>
  );
}

function LandingPageCtaDesktopHelper1() {
  return (
    <div className="absolute inset-[-0.39px_-50%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1.56667 0.783333"
      >
        <path
          d="M0.391667 0.391667H1.175"
          id="Vector"
          stroke="var(--stroke-0, #7C8493)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.783333"
        />
      </svg>
    </div>
  );
}

function LandingPageCtaDesktopHelper() {
  return (
    <div className="absolute inset-[-0.39px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 0.78725 0.783333"
      >
        <path
          d="M0.391667 0.391667H0.395583"
          id="Vector"
          stroke="var(--stroke-0, #7C8493)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.783333"
        />
      </svg>
    </div>
  );
}

function Helper() {
  return (
    <div className="absolute inset-[-0.39px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 0.783333 0.78725"
      >
        <path
          d="M0.391667 0.391667V0.395583"
          id="Vector"
          stroke="var(--stroke-0, #7C8493)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.783333"
        />
      </svg>
    </div>
  );
}
type LandingPageCtaDesktopVectorProps = {
  additionalClassNames?: string;
};

function LandingPageCtaDesktopVector({
  additionalClassNames = "",
}: LandingPageCtaDesktopVectorProps) {
  return (
    <div
      className={clsx(
        "absolute left-[37.5%] right-[62.5%]",
        additionalClassNames,
      )}
    >
      <Helper />
    </div>
  );
}

export default function LandingPageCtaDesktop() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Landing Page / CTA / Desktop"
    >
      <div
        className="absolute contents left-[124px] top-[72px]"
        data-name="CTA Section"
      >
        <div className="absolute h-[414px] left-[124px] top-[72px] w-[1192px]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1192 414"
          >
            <path
              d={svgPaths.p30f7d480}
              fill="var(--fill-0, #4640DE)"
              id="Rectangle 2742"
            />
          </svg>
        </div>
        <div
          className="absolute content-stretch flex flex-col gap-[24px] items-start left-[194px] top-[165px]"
          data-name="Text"
        >
          <div
            className="flex flex-col font-['Clash_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[364px]"
            style={{ fontFeatureSettings: "'cv11'" }}
          >
            <p className="leading-[1.1]">Start posting jobs today</p>
          </div>
          <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white w-[364px]">
            <p className="leading-[1.6]">Start posting jobs for only $10.</p>
          </div>
          <div className="bg-white relative shrink-0" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative">
                <p className="font-['Epilogue:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[#4640de] text-[16px] text-center whitespace-nowrap">
                  Sign Up For Free
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-white content-stretch flex h-[346px] items-start left-[682px] overflow-clip top-[140px]"
          data-name="3.1 Dashboard Company"
        >
          <div
            className="bg-[#f8f8fd] h-[509.167px] relative shadow-[0.392px_0px_0px_0px_#d3d6db] shrink-0 w-[106.533px]"
            data-name="Side Bar / Dashboard - Company"
          >
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-between py-[12.533px] relative size-full">
                <div
                  className="content-stretch flex flex-col gap-[12.533px] items-center relative shrink-0 w-[106.533px]"
                  data-name="Menu"
                >
                  <div
                    className="content-stretch flex gap-[3.133px] items-center pr-[25.067px] relative shrink-0"
                    data-name="Logo 2"
                  >
                    <div className="overflow-clip relative shrink-0 size-[12.533px]">
                      <div className="absolute left-0 size-[12.533px] top-0">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 12.5333 12.5333"
                        >
                          <circle
                            cx="6.26667"
                            cy="6.26667"
                            fill="var(--fill-0, #4640DE)"
                            id="Ellipse 2"
                            r="6.26667"
                          />
                        </svg>
                      </div>
                      <div className="absolute inset-[65.63%_21.87%_15.63%_21.88%]">
                        <div className="absolute inset-[23.47%_9.95%_0_9.95%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 5.64691 1.79848"
                          >
                            <g id="Vector 7">
                              <mask fill="white" id="path-1-inside-1_4_3350">
                                <path d={svgPaths.p2c55a1b2} />
                              </mask>
                              <path
                                d={svgPaths.p31c81000}
                                fill="var(--stroke-0, white)"
                                mask="url(#path-1-inside-1_4_3350)"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="absolute flex items-center justify-center left-[2.74px] size-[7.833px] top-[1.57px]"
                        style={
                          {
                            "--transform-inner-width": "1185",
                            "--transform-inner-height": "21",
                          } as React.CSSProperties
                        }
                      >
                        <div className="-rotate-90 flex-none">
                          <div
                            className="overflow-clip relative size-[7.833px]"
                            data-name="Search"
                          >
                            <div
                              className="absolute contents inset-[8.33%]"
                              data-name="Iconly/Bold/Search"
                            >
                              <div
                                className="absolute inset-[8.33%]"
                                data-name="Search"
                              >
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 6.52778 6.52778"
                                >
                                  <g id="Search">
                                    <path
                                      d={svgPaths.p1c47a700}
                                      fill="var(--fill-0, white)"
                                      id="Vector"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className="font-['Red_Hat_Display:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[#202430] text-[9.4px] tracking-[-0.094px] whitespace-nowrap"
                      style={{ fontFeatureSettings: "'cv11'" }}
                    >
                      QuickHire
                    </p>
                  </div>
                  <div
                    className="content-stretch flex flex-col gap-[12.533px] items-start justify-center relative shrink-0 w-full"
                    data-name="Main Menu"
                  >
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-name="Menu"
                    >
                      <div
                        className="relative shrink-0"
                        data-name="Sidebar Menu"
                      >
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex gap-[4.7px] items-center justify-center relative">
                            <div
                              className="h-[12.533px] relative shrink-0 w-[1.567px]"
                              data-name="Indicator"
                            >
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 1.56667 12.5333"
                              >
                                <path
                                  d="M0 0H1.56667V12.5333H0V0Z"
                                  fill="var(--fill-0, #4640DE)"
                                  id="Indicator"
                                />
                              </svg>
                            </div>
                            <div
                              className="bg-[#e9ebfd] content-stretch flex gap-[6.267px] items-start pl-[6.267px] py-[4.7px] relative shrink-0 w-[94px]"
                              data-name="Menu"
                            >
                              <div
                                className="overflow-clip relative shrink-0 size-[9.4px]"
                                data-name="Icon"
                              >
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 32 32"
                                >
                                  <g id="Vector" />
                                </svg>
                                <div
                                  className="absolute bottom-1/2 left-[12.5%] right-[12.5%] top-[12.5%]"
                                  data-name="Vector"
                                >
                                  <div className="absolute inset-[-11.11%_-5.56%]">
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 7.83336 4.30833"
                                    >
                                      <path
                                        d={svgPaths.p5c7000}
                                        id="Vector"
                                        stroke="var(--stroke-0, #4640DE)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.783333"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="absolute bottom-[12.5%] left-[20.83%] right-[20.83%] top-1/2"
                                  data-name="Vector"
                                >
                                  <div className="absolute inset-[-11.11%_-7.14%]">
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 6.26667 4.30833"
                                    >
                                      <path
                                        d={svgPaths.p2e29ed40}
                                        id="Vector"
                                        stroke="var(--stroke-0, #4640DE)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.783333"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4640de] text-[6.27px]">
                                <p className="leading-[1.6]">Dashboard</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative shrink-0 w-[106.533px]"
                        data-name="Sidebar Menu"
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[6.267px] items-center px-[12.533px] py-[4.7px] relative w-full">
                            <div className="content-stretch flex gap-[6.267px] items-start relative shrink-0">
                              <div
                                className="overflow-clip relative shrink-0 size-[9.4px]"
                                data-name="Icon"
                              >
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 32 32"
                                >
                                  <g id="Vector" />
                                </svg>
                                <div
                                  className="absolute inset-[12.5%_10%]"
                                  data-name="Vector"
                                >
                                  <div className="absolute inset-[-5.56%_-5.21%]">
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 8.30333 7.83333"
                                    >
                                      <path
                                        d={svgPaths.p2f5b2000}
                                        id="Vector"
                                        stroke="var(--stroke-0, #7C8493)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.783333"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="absolute inset-[32.5%_30%_67.5%_30%]"
                                  data-name="Vector"
                                >
                                  <div className="absolute inset-[-0.39px_-10.42%]">
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 4.54333 0.783333"
                                    >
                                      <path
                                        d="M0.391667 0.391667H4.15167"
                                        id="Vector"
                                        stroke="var(--stroke-0, #7C8493)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.783333"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  className="absolute inset-[52.5%_40%_47.5%_30%]"
                                  data-name="Vector"
                                >
                                  <div className="absolute inset-[-0.39px_-13.89%]">
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 3.60333 0.783333"
                                    >
                                      <path
                                        d="M0.391667 0.391667H3.21167"
                                        id="Vector"
                                        stroke="var(--stroke-0, #7C8493)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.783333"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] not-italic relative shrink-0 text-[#7c8493] text-[6.27px] w-[50.133px]">
                                <p className="leading-[1.6]">Messages</p>
                              </div>
                            </div>
                            <div
                              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                              data-name="Badge"
                            >
                              <div className="col-1 ml-0 mt-0 relative row-1 size-[9.4px]">
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 9.4 9.4"
                                >
                                  <circle
                                    cx="4.7"
                                    cy="4.7"
                                    fill="var(--fill-0, #4640DE)"
                                    id="Ellipse 95"
                                    r="4.7"
                                  />
                                </svg>
                              </div>
                              <div className="col-1 flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold h-[6.267px] justify-center ml-[3.52px] mt-[1.96px] relative row-1 text-[5.48px] text-white w-[2.35px]">
                                <p className="leading-[1.6]">1</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <SidebarMenu additionalClassNames="w-[106.533px]">
                        <div
                          className="overflow-clip relative shrink-0 size-[9.4px]"
                          data-name="Icon"
                        >
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 32 32"
                          >
                            <g id="Vector" />
                          </svg>
                          <div
                            className="absolute inset-[87.5%_12.5%_12.5%_12.5%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-0.39px_-5.56%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 7.83333 0.783333"
                              >
                                <path
                                  d="M0.391667 0.391667H7.44167"
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute inset-[12.5%_45.83%_12.5%_20.83%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-5.56%_-12.5%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 3.91667 7.83333"
                              >
                                <path
                                  d={svgPaths.p25870300}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute inset-[29.17%_20.83%_12.5%_54.17%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-7.14%_-16.67%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 3.13337 6.26671"
                              >
                                <path
                                  d={svgPaths.p1ebcaf40}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute inset-[37.5%_62.5%_62.46%_37.5%]"
                            data-name="Vector"
                          >
                            <Helper />
                          </div>
                          <LandingPageCtaDesktopVector additionalClassNames="bottom-[49.96%] top-1/2" />
                          <div
                            className="absolute inset-[62.5%_62.5%_37.46%_37.5%]"
                            data-name="Vector"
                          >
                            <Helper />
                          </div>
                          <LandingPageCtaDesktopVector additionalClassNames="bottom-[24.96%] top-3/4" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                          <p className="leading-[1.6]">Company Profile</p>
                        </div>
                      </SidebarMenu>
                      <SidebarMenu additionalClassNames="w-[106.533px]">
                        <div
                          className="overflow-clip relative shrink-0 size-[9.4px]"
                          data-name="Icon"
                        >
                          <div
                            className="absolute inset-[12.5%_4.17%]"
                            data-name="Vector (Stroke)"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 8.61667 7.05"
                            >
                              <path
                                clipRule="evenodd"
                                d={svgPaths.p2c20af80}
                                fill="var(--fill-0, #7C8493)"
                                fillRule="evenodd"
                                id="Vector (Stroke)"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                          <p className="leading-[1.6]">All Applicants</p>
                        </div>
                      </SidebarMenu>
                      <SidebarMenu additionalClassNames="w-[106.533px]">
                        <div
                          className="overflow-clip relative shrink-0 size-[9.4px]"
                          data-name="Icon"
                        >
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 32 32"
                          >
                            <g id="Vector" />
                          </svg>
                          <div
                            className="absolute inset-[20.83%_20.83%_12.5%_20.83%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-6.25%_-7.14%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 6.26667 7.05"
                              >
                                <path
                                  d={svgPaths.p3b07e700}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute inset-[12.5%_37.5%_70.83%_37.5%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-25%_-16.67%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 3.13333 2.35"
                              >
                                <path
                                  d={svgPaths.p2e284400}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute bottom-1/2 left-[37.5%] right-[62.46%] top-1/2"
                            data-name="Vector"
                          >
                            <LandingPageCtaDesktopHelper />
                          </div>
                          <div
                            className="absolute bottom-1/2 left-[54.17%] right-[37.5%] top-1/2"
                            data-name="Vector"
                          >
                            <LandingPageCtaDesktopHelper1 />
                          </div>
                          <div
                            className="absolute inset-[66.67%_62.46%_33.33%_37.5%]"
                            data-name="Vector"
                          >
                            <LandingPageCtaDesktopHelper />
                          </div>
                          <div
                            className="absolute inset-[66.67%_37.5%_33.33%_54.17%]"
                            data-name="Vector"
                          >
                            <LandingPageCtaDesktopHelper1 />
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                          <p className="leading-[1.6]">Job Listing</p>
                        </div>
                      </SidebarMenu>
                      <SidebarMenu additionalClassNames="w-[106.533px]">
                        <div
                          className="overflow-clip relative shrink-0 size-[9.4px]"
                          data-name="Icon"
                        >
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 32 32"
                          >
                            <g id="Vector" />
                          </svg>
                          <div
                            className="absolute inset-[20.83%_16.67%_12.5%_16.67%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-6.25%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 7.05 7.05"
                              >
                                <path
                                  d={svgPaths.p1ee0bc00}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <LandingPageCtaDesktopVector1 additionalClassNames="inset-[12.5%_33.33%_70.83%_66.67%]" />
                          <LandingPageCtaDesktopVector1 additionalClassNames="inset-[12.5%_66.67%_70.83%_33.33%]" />
                          <div
                            className="absolute inset-[45.83%_16.67%_54.17%_16.67%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-0.39px_-6.25%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 7.05 0.783333"
                              >
                                <path
                                  d="M0.391667 0.391667H6.65833"
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="absolute inset-[62.5%_58.33%_29.17%_33.33%]"
                            data-name="Vector"
                          >
                            <div className="absolute inset-[-50%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 1.56667 1.56667"
                              >
                                <path
                                  d={svgPaths.pa410980}
                                  id="Vector"
                                  stroke="var(--stroke-0, #7C8493)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="0.783333"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                          <p className="leading-[1.6]">My Schedule</p>
                        </div>
                      </SidebarMenu>
                    </div>
                    <div className="bg-[#ccccf5] h-[0.392px] shrink-0 w-full" />
                    <div
                      className="content-stretch flex flex-col gap-[9.4px] items-start relative shrink-0 w-full"
                      data-name="Settings"
                    >
                      <div className="content-stretch flex items-start pl-[12.533px] relative shrink-0">
                        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[9.4px] not-italic opacity-50 relative shrink-0 text-[#202430] text-[5.48px] tracking-[0.2192px] whitespace-nowrap">
                          SETTINGS
                        </p>
                      </div>
                      <div
                        className="content-stretch flex flex-col items-start relative shrink-0 w-full"
                        data-name="Menu"
                      >
                        <SidebarMenu additionalClassNames="w-[100.267px]">
                          <div
                            className="overflow-clip relative shrink-0 size-[9.4px]"
                            data-name="Icon"
                          >
                            <LandingPageCtaDesktopVector3>
                              <path
                                d={svgPaths.p26433f00}
                                id="Vector"
                                stroke="var(--stroke-0, #7C8493)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.783333"
                              />
                            </LandingPageCtaDesktopVector3>
                            <div
                              className="absolute inset-[37.5%]"
                              data-name="Vector"
                            >
                              <div className="absolute inset-[-16.67%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 3.13333 3.13333"
                                >
                                  <path
                                    d={svgPaths.pe23cbf0}
                                    id="Vector"
                                    stroke="var(--stroke-0, #7C8493)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="0.783333"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                            <p className="leading-[1.6]">Settings</p>
                          </div>
                        </SidebarMenu>
                        <SidebarMenu additionalClassNames="w-full">
                          <div
                            className="overflow-clip relative shrink-0 size-[9.4px]"
                            data-name="Icon"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 32 32"
                            >
                              <g id="Vector" />
                            </svg>
                            <LandingPageCtaDesktopVector3>
                              <path
                                d={svgPaths.p2658d500}
                                id="Vector"
                                stroke="var(--stroke-0, #7C8493)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="0.783333"
                              />
                            </LandingPageCtaDesktopVector3>
                            <div
                              className="absolute bottom-[29.12%] left-1/2 right-1/2 top-[70.83%]"
                              data-name="Vector"
                            >
                              <Helper />
                            </div>
                            <div
                              className="absolute inset-[29.05%_38.87%_43.75%_41.67%]"
                              data-name="Vector"
                            >
                              <div className="absolute inset-[-15.32%_-21.41%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 2.61295 3.34033"
                                >
                                  <path
                                    d={svgPaths.p2e304b60}
                                    id="Vector"
                                    stroke="var(--stroke-0, #7C8493)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="0.783333"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-[9.4px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#7c8493] text-[6.27px]">
                            <p className="leading-[1.6]">Help Center</p>
                          </div>
                        </SidebarMenu>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="h-[123.767px] relative shrink-0 w-[106.533px]"
                  data-name="Pattern"
                >
                  <div className="absolute inset-[-57.28%_-197.11%_-221.42%_-43.01%]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 362.349 468.703"
                    >
                      <g id="Pattern">
                        <path
                          d={svgPaths.p130bd9f0}
                          fill="var(--fill-0, #F8F8FD)"
                          id="Rectangle 2729"
                          stroke="var(--stroke-0, #CCCCF5)"
                          strokeWidth="1.56667"
                        />
                        <path
                          d={svgPaths.p2ea40a70}
                          fill="var(--fill-0, #F8F8FD)"
                          id="Rectangle 2731"
                          stroke="var(--stroke-0, #CCCCF5)"
                          strokeWidth="1.56667"
                        />
                        <path
                          d={svgPaths.p3fdb9c00}
                          fill="var(--fill-0, #E9EBFD)"
                          id="Rectangle 2730"
                          stroke="var(--stroke-0, #CCCCF5)"
                          strokeWidth="1.56667"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div
                  className="h-[28.2px] relative shrink-0 w-[106.533px]"
                  data-name="Profile"
                >
                  <div
                    className="absolute content-stretch flex gap-[6.267px] items-center left-[12.53px] top-[8.22px]"
                    data-name="Profile"
                  >
                    <div
                      className="relative shrink-0 size-[18.8px]"
                      data-name="Avatar"
                    >
                      <div
                        className="absolute inset-[-12.5%_0_-37.5%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_6px] mask-size-[48px_48px]"
                        data-name="vicky-hladynets-C8Ta0gwPbQg-unsplash"
                        style={{
                          maskImage: `url('${imgLandingPageCtaDesktop}')`,
                        }}
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                          src={imgLandingPageCtaDesktop1}
                        />
                      </div>
                      <div
                        className="absolute inset-[-20.83%_-154.17%_-143.7%_-141.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[68px_10px] mask-size-[48px_48px]"
                        data-name="sarah-brown-tTdC88_6a_I-unsplash"
                        style={{
                          maskImage: `url('${imgLandingPageCtaDesktop}')`,
                        }}
                      >
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                          src={imgLandingPageCtaDesktop2}
                        />
                      </div>
                    </div>
                    <div
                      className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 whitespace-nowrap"
                      data-name="Name & Email"
                    >
                      <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#25324b] text-[7.05px]">
                        <p className="leading-[1.6]">Maria Kelly</p>
                      </div>
                      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center opacity-50 relative shrink-0 text-[#515b6f] text-[5.48px]">
                        <p className="leading-[1.6]">MariaKlly@email.com</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-[28.2px] h-0 left-0 w-[106.533px]"
                    data-name="Line"
                  >
                    <svg
                      className="absolute block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 32 32"
                    >
                      <g id="Line" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-stretch flex flex-col items-center pb-[9.4px] relative shrink-0"
            data-name="Content"
          >
            <div
              className="bg-white relative shrink-0 w-[457.075px]"
              data-name="Top Nav"
            >
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-center justify-between px-[12.533px] py-[6.267px] relative w-full">
                  <div
                    className="content-stretch flex gap-[6.267px] items-center relative shrink-0"
                    data-name="Job List"
                  >
                    <LandingPageCtaDesktopCompanyLogo />
                    <div
                      className="content-stretch flex flex-col items-start relative shrink-0"
                      data-name="Job Title"
                    >
                      <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#515b6f] text-[6.27px] whitespace-nowrap">
                        Company
                      </p>
                      <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0">
                        <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#25324b] text-[7.83px] whitespace-nowrap">
                          Nomad
                        </p>
                        <div
                          className="relative shrink-0 size-[9.4px]"
                          data-name="Icon"
                        >
                          <div
                            className="absolute inset-[35.42%_20.83%]"
                            data-name="Arrow - Down 2"
                          >
                            <div className="absolute inset-[-14.29%_-7.14%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 6.26667 3.525"
                              >
                                <g id="Arrow - Down 2">
                                  <path
                                    d={svgPaths.p28493c80}
                                    id="Stroke 1"
                                    stroke="var(--stroke-0, #25324B)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="0.783333"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="content-stretch flex gap-[12.533px] items-center justify-center relative shrink-0"
                    data-name="Action"
                  >
                    <div
                      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
                      data-name="Notification"
                    >
                      <div
                        className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1"
                        data-name="Default"
                      >
                        <div
                          className="col-1 ml-0 mt-0 relative row-1 size-[15.667px]"
                          data-name="Ellipse"
                        >
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15.6667 15.6667"
                          >
                            <circle
                              cx="7.83333"
                              cy="7.83333"
                              fill="var(--fill-0, white)"
                              id="Ellipse"
                              r="7.83333"
                            />
                          </svg>
                        </div>
                        <div
                          className="col-1 h-[9.415px] ml-[3.13px] mt-[3.16px] overflow-clip relative row-1 w-[9.4px]"
                          data-name="Icon"
                        >
                          <div
                            className="absolute contents inset-[4.3%_9.77%_6.12%_13.16%]"
                            data-name="Iconly/Light-Outline/Notification"
                          >
                            <div
                              className="absolute inset-[4.3%_9.77%_6.12%_13.16%]"
                              data-name="Notification"
                            >
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 7.2447 8.43466"
                              >
                                <g id="Notification">
                                  <path
                                    clipRule="evenodd"
                                    d={svgPaths.pe326700}
                                    fill="var(--fill-0, #25324B)"
                                    fillRule="evenodd"
                                    id="Combined-Shape"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[12.5%_12.5%_62.5%_62.5%]">
                            <div className="absolute inset-[-16.64%_-16.67%]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 3.13333 3.13719"
                              >
                                <path
                                  d={svgPaths.p3861d680}
                                  fill="var(--fill-0, #FF6550)"
                                  id="Ellipse 72"
                                  stroke="var(--stroke-0, white)"
                                  strokeWidth="0.391667"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-[#4640de] relative shrink-0"
                      data-name="Button"
                    >
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex gap-[3.917px] items-center justify-center px-[9.4px] py-[4.7px] relative">
                          <div
                            className="overflow-clip relative shrink-0 size-[9.4px]"
                            data-name="Icon"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 32 32"
                            >
                              <g id="Vector" />
                            </svg>
                            <div
                              className="absolute inset-[16.67%_45.83%]"
                              data-name="Vector (Stroke)"
                            >
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 0.783333 6.26667"
                              >
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p6d44f00}
                                  fill="var(--fill-0, white)"
                                  fillRule="evenodd"
                                  id="Vector (Stroke)"
                                />
                              </svg>
                            </div>
                            <div
                              className="absolute inset-[45.83%_16.67%]"
                              data-name="Vector (Stroke)"
                            >
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 6.26667 0.783333"
                              >
                                <path
                                  clipRule="evenodd"
                                  d={svgPaths.p249e3400}
                                  fill="var(--fill-0, white)"
                                  fillRule="evenodd"
                                  id="Vector (Stroke)"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="font-['Epilogue:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[6.27px] text-center text-white whitespace-nowrap">
                            Post a job
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.392px_0px_0px_#d6ddeb]" />
            </div>
            <div
              className="content-stretch flex items-center justify-between p-[12.533px] relative shrink-0 w-[457.467px]"
              data-name="Greeting & Filter"
            >
              <div
                className="content-stretch flex flex-col gap-[3.133px] items-start leading-[0] relative shrink-0 whitespace-nowrap"
                data-name="Greeting"
              >
                <div
                  className="flex flex-col font-['Clash_Display:Semibold',sans-serif] justify-center not-italic relative shrink-0 text-[#25324b] text-[9.4px]"
                  style={{ fontFeatureSettings: "'cv11'" }}
                >
                  <p className="leading-[1.2]">Good morning, Maria</p>
                </div>
                <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#7c8493] text-[6.267px]">
                  <p className="leading-[1.6]">
                    Here is your job listings statistic report from July 19 -
                    July 25.
                  </p>
                </div>
              </div>
              <div
                className="bg-white relative shrink-0 w-[70.5px]"
                data-name="Dropdown"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
                />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex items-center justify-between px-[6.267px] py-[4.7px] relative w-full">
                    <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#25324b] text-[6.27px] whitespace-nowrap">
                      Jul 19 - Jul 25
                    </p>
                    <div
                      className="overflow-clip relative shrink-0 size-[7.833px]"
                      data-name="Icon"
                    >
                      <svg
                        className="absolute block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 32 32"
                      >
                        <g id="Vector" />
                      </svg>
                      <div
                        className="absolute inset-[20.83%_16.67%_12.5%_16.67%]"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-7.5%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 6.00556 6.00556"
                          >
                            <path
                              d={svgPaths.p1035c680}
                              id="Vector"
                              stroke="var(--stroke-0, #4640DE)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.783333"
                            />
                          </svg>
                        </div>
                      </div>
                      <LandingPageCtaDesktopVector2 additionalClassNames="inset-[12.5%_33.33%_70.83%_66.67%]" />
                      <LandingPageCtaDesktopVector2 additionalClassNames="inset-[12.5%_66.67%_70.83%_33.33%]" />
                      <div
                        className="absolute inset-[45.83%_16.67%_54.17%_16.67%]"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-0.39px_-7.5%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 6.00556 0.783333"
                          >
                            <path
                              d="M0.391667 0.391667H5.61389"
                              id="Vector"
                              stroke="var(--stroke-0, #4640DE)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.783333"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className="absolute inset-[62.5%_58.33%_29.17%_33.33%]"
                        data-name="Vector"
                      >
                        <div className="absolute inset-[-60%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 1.43611 1.43611"
                          >
                            <path
                              d={svgPaths.p3e0ef400}
                              id="Vector"
                              stroke="var(--stroke-0, #4640DE)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="0.783333"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col gap-[9.4px] items-start relative shrink-0"
              data-name="Main Content"
            >
              <div
                className="content-stretch flex gap-[9.792px] items-start relative shrink-0"
                data-name="Action"
              >
                <div
                  className="bg-[#4640de] content-stretch flex gap-[5.092px] items-center p-[9.4px] relative shrink-0"
                  data-name="New Candidates"
                >
                  <div
                    className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18.8px] text-white whitespace-nowrap"
                    style={{ fontFeatureSettings: "'cv11'" }}
                  >
                    <p className="leading-none">76</p>
                  </div>
                  <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[7.05px] text-white w-[78.333px]">
                    <p className="leading-[1.6]">New candidates to review</p>
                  </div>
                  <LandingPageCtaDesktopIcon />
                </div>
                <Helper1
                  text="3"
                  text1="Schedule for today"
                  additionalClassNames="bg-[#56cdad]"
                />
                <Helper1
                  text="24"
                  text1="Messages received"
                  additionalClassNames="bg-[#26a4ff]"
                />
              </div>
              <div
                className="content-stretch flex gap-[9.4px] items-start relative shrink-0"
                data-name="Middle Content"
              >
                <div
                  className="bg-white h-[198.967px] relative shrink-0 w-[285.133px]"
                  data-name="Job Statistic"
                >
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div
                      className="absolute content-stretch flex flex-col gap-[6.267px] items-center left-0 pt-[9.4px] top-0"
                      data-name="Header"
                    >
                      <div
                        className="content-stretch flex gap-[101.833px] items-center relative shrink-0"
                        data-name="Title"
                      >
                        <div className="content-stretch flex flex-col gap-[1.567px] items-start leading-[0] relative shrink-0 whitespace-nowrap">
                          <div
                            className="flex flex-col font-['Clash_Display:Semibold',sans-serif] justify-center not-italic relative shrink-0 text-[#25324b] text-[7.833px]"
                            style={{ fontFeatureSettings: "'cv11'" }}
                          >
                            <p className="leading-[1.2]">Job statistics</p>
                          </div>
                          <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#7c8493] text-[5.483px]">
                            <p className="leading-[1.6]">
                              Showing Jobstatistic Jul 19-25
                            </p>
                          </div>
                        </div>
                        <div
                          className="bg-[#e9ebfd] relative shrink-0"
                          data-name="Pill Tab"
                        >
                          <div className="content-stretch flex items-start p-[1.567px] relative">
                            <LandingPageCtaDesktopTabMenuText
                              text="Week"
                              additionalClassNames="bg-white"
                            />
                            <LandingPageCtaDesktopTabMenuText
                              text="Month"
                              additionalClassNames="bg-[#e9ebfd]"
                            />
                            <LandingPageCtaDesktopTabMenuText
                              text="Year"
                              additionalClassNames="bg-[#e9ebfd]"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-white relative shrink-0 w-[284.742px]"
                        data-name="Tabs"
                      >
                        <div className="content-stretch flex gap-[15.667px] items-start pl-[9.4px] relative w-full">
                          <div
                            className="relative shrink-0"
                            data-name="Tab Menu"
                          >
                            <div className="flex flex-col items-center size-full">
                              <div className="content-stretch flex flex-col gap-[2.742px] items-center relative">
                                <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#25324b] text-[6.27px] whitespace-nowrap">
                                  <p className="leading-[1.6]">Overview</p>
                                </div>
                                <div className="h-[1.567px] relative shrink-0 w-full">
                                  <svg
                                    className="absolute block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 29 1.56667"
                                  >
                                    <path
                                      d={svgPaths.p624d100}
                                      fill="var(--fill-0, #4640DE)"
                                      id="Rectangle 173"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <LandingPageCtaDesktopTabMenuText1 text="Jobs View" />
                          <LandingPageCtaDesktopTabMenuText1 text="Jobs Applied" />
                        </div>
                        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.392px_0px_0px_#d6ddeb]" />
                      </div>
                    </div>
                    <div
                      className="absolute contents left-[9.4px] top-[67.82px]"
                      data-name="Content"
                    >
                      <div className="absolute contents left-[51.31px] top-[67.82px]">
                        <div className="absolute flex h-[6.267px] items-center justify-center left-[63.45px] top-[92.43px] w-[7.833px]">
                          <div className="flex-none rotate-180">
                            <div className="h-[6.267px] relative w-[7.833px]">
                              <div className="absolute bottom-1/4 left-[16.23%] right-[16.23%] top-[8.86%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 5.29062 4.14477"
                                >
                                  <path
                                    d={svgPaths.p1a394c80}
                                    fill="var(--fill-0, #25324B)"
                                    id="Polygon 1"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="absolute bg-[#25324b] content-stretch flex flex-col gap-[0.783px] inset-[34.08%_70.74%_52.32%_17.99%] items-start p-[3.133px]"
                          data-name="Visitors"
                        >
                          <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0">
                            <div className="bg-[#56cdad] rounded-[1.175px] shrink-0 size-[6.267px]" />
                            <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[6.267px] text-center text-white whitespace-nowrap">
                              <p className="leading-[1.6]">122</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0">
                            <div className="bg-[#26a4ff] rounded-[1.175px] shrink-0 size-[6.267px]" />
                            <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[6.267px] text-center text-white whitespace-nowrap">
                              <p className="leading-[1.6]">34</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[3.133px] items-start left-[9.4px] top-[72.85px]"
                        data-name="Bar"
                      >
                        <div
                          className="content-stretch flex gap-[6.267px] items-end relative shrink-0 w-[167.633px]"
                          data-name="Stats"
                        >
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 1"
                          >
                            <LandingPageCtaDesktopBar additionalClassNames="h-[90.867px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Mon</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 8"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[0.783px] h-[62.667px] items-end justify-center relative shrink-0 w-full"
                              data-name="Bar"
                            >
                              <div className="bg-[#ffb836] flex-[1_0_0] min-h-px min-w-px w-full" />
                              <div className="bg-[#7b61ff] h-[51.7px] shrink-0 w-full" />
                            </div>
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Tue</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 9"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[0.783px] h-[62.667px] items-end justify-center relative shrink-0 w-full"
                              data-name="Bar"
                            >
                              <div className="bg-[#ffb836] flex-[1_0_0] min-h-px min-w-px w-full" />
                              <div className="bg-[#7b61ff] h-[18.8px] shrink-0 w-full" />
                            </div>
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Wed</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 10"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[0.783px] h-[87.733px] items-end justify-center relative shrink-0 w-full"
                              data-name="Bar"
                            >
                              <div className="bg-[#ffb836] flex-[1_0_0] min-h-px min-w-px w-full" />
                              <div className="bg-[#7b61ff] h-[65.8px] shrink-0 w-full" />
                            </div>
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Thu</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 11"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[0.783px] h-[77.55px] items-end justify-center relative shrink-0 w-full"
                              data-name="Bar"
                            >
                              <div className="bg-[#ffb836] h-[51.7px] shrink-0 w-full" />
                              <div className="bg-[#7b61ff] flex-[1_0_0] min-h-px min-w-px w-full" />
                            </div>
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Fri</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 12"
                          >
                            <LandingPageCtaDesktopBar additionalClassNames="h-[34.075px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Sat</p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-h-px min-w-px relative"
                            data-name="Stat 13"
                          >
                            <div
                              className="content-stretch flex flex-col gap-[0.783px] h-[42.692px] items-end justify-center relative shrink-0 w-full"
                              data-name="Bar"
                            >
                              <div className="bg-[#ffb836] h-[4.308px] shrink-0 w-full" />
                              <div className="bg-[#7b61ff] flex-[1_0_0] min-h-px min-w-px w-full" />
                            </div>
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[9.4px] justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center w-full">
                              <p className="leading-[1.6]">Sun</p>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[11.358px] items-start relative shrink-0">
                          <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0">
                            <div className="bg-[#ffb836] rounded-[1.175px] shrink-0 size-[6.267px]" />
                            <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center whitespace-nowrap">
                              <p className="leading-[1.6]">Job View</p>
                            </div>
                          </div>
                          <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0">
                            <div className="bg-[#7b61ff] rounded-[1.175px] shrink-0 size-[6.267px]" />
                            <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[6.267px] text-center whitespace-nowrap">
                              <p className="leading-[1.6]">Job Applied</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[6.267px] items-start left-[186.43px] top-[69.72px]"
                        data-name="Stats"
                      >
                        <CardDashboard>
                          <div
                            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                            data-name="Title"
                          >
                            <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#25324b] text-[7.05px] whitespace-nowrap">
                              <p className="leading-[1.6]">Job Views</p>
                            </div>
                            <Wrapper2 additionalClassNames="bg-[#ffb836]">
                              <div
                                className="absolute inset-[16.67%_8.32%]"
                                data-name="Vector"
                              >
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 6.53005 5.22222"
                                >
                                  <path
                                    d={svgPaths.p101fc400}
                                    fill="var(--fill-0, white)"
                                    id="Vector"
                                  />
                                </svg>
                              </div>
                            </Wrapper2>
                          </div>
                          <div className="content-stretch flex flex-col gap-[0.783px] items-start relative shrink-0">
                            <div
                              className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#25324b] text-[14.1px] text-center whitespace-nowrap"
                              style={{ fontFeatureSettings: "'cv11'" }}
                            >
                              <p className="leading-none">2,342</p>
                            </div>
                            <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0">
                              <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[7.05px] text-center whitespace-nowrap">
                                <p className="leading-[1.6]">{`This Week `}</p>
                              </div>
                              <div className="content-stretch flex items-center relative shrink-0">
                                <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7b61ff] text-[7.05px] text-center whitespace-nowrap">
                                  <p className="leading-[1.6]">6.4%</p>
                                </div>
                                <LandingPageCtaDesktopIcon1 additionalClassNames="shrink-0">
                                  <path
                                    d={svgPaths.p9601400}
                                    fill="var(--fill-0, #7B61FF)"
                                    id="Vector"
                                    stroke="var(--stroke-0, #7B61FF)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="0.5875"
                                  />
                                </LandingPageCtaDesktopIcon1>
                              </div>
                            </div>
                          </div>
                        </CardDashboard>
                        <CardDashboard>
                          <div
                            className="content-stretch flex items-center justify-between relative shrink-0 w-full"
                            data-name="Title"
                          >
                            <div className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#25324b] text-[7.05px] whitespace-nowrap">
                              <p className="leading-[1.6]">Job Applied</p>
                            </div>
                            <Wrapper2 additionalClassNames="bg-[#7b61ff]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 32 32"
                              >
                                <g id="Vector" />
                              </svg>
                              <div
                                className="absolute inset-[20.83%_20.83%_12.5%_20.83%]"
                                data-name="Vector"
                              >
                                <div className="absolute inset-[-7.5%_-8.57%]">
                                  <svg
                                    className="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 5.35278 6.00556"
                                  >
                                    <path
                                      d={svgPaths.p14e84000}
                                      id="Vector"
                                      stroke="var(--stroke-0, white)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="0.783333"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="absolute inset-[12.5%_37.5%_70.83%_37.5%]"
                                data-name="Vector"
                              >
                                <div className="absolute inset-[-30%_-20%]">
                                  <svg
                                    className="block size-full"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 2.74167 2.08889"
                                  >
                                    <path
                                      d={svgPaths.p1c337b00}
                                      id="Vector"
                                      stroke="var(--stroke-0, white)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="0.783333"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="absolute bottom-1/2 left-[37.5%] right-[62.46%] top-1/2"
                                data-name="Vector"
                              >
                                <LandingPageCtaDesktopHelper2 />
                              </div>
                              <div
                                className="absolute bottom-1/2 left-[54.17%] right-[37.5%] top-1/2"
                                data-name="Vector"
                              >
                                <LandingPageCtaDesktopHelper3 />
                              </div>
                              <div
                                className="absolute inset-[66.67%_62.46%_33.33%_37.5%]"
                                data-name="Vector"
                              >
                                <LandingPageCtaDesktopHelper2 />
                              </div>
                              <div
                                className="absolute inset-[66.67%_37.5%_33.33%_54.17%]"
                                data-name="Vector"
                              >
                                <LandingPageCtaDesktopHelper3 />
                              </div>
                            </Wrapper2>
                          </div>
                          <div className="content-stretch flex flex-col gap-[0.783px] items-start relative shrink-0">
                            <div
                              className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#25324b] text-[14.1px] text-center whitespace-nowrap"
                              style={{ fontFeatureSettings: "'cv11'" }}
                            >
                              <p className="leading-none">654</p>
                            </div>
                            <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0">
                              <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[7.05px] text-center whitespace-nowrap">
                                <p className="leading-[1.6]">{`This Week `}</p>
                              </div>
                              <div className="content-stretch flex items-center relative shrink-0">
                                <div className="flex flex-col font-['Epilogue:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6550] text-[7.05px] text-center whitespace-nowrap">
                                  <p className="leading-[1.6]">0.5%</p>
                                </div>
                                <div className="flex items-center justify-center relative shrink-0">
                                  <div className="flex-none rotate-180">
                                    <LandingPageCtaDesktopIcon1>
                                      <path
                                        d={svgPaths.p9601400}
                                        fill="var(--fill-0, #FF6550)"
                                        id="Vector"
                                        stroke="var(--stroke-0, #FF6550)"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="0.5875"
                                      />
                                    </LandingPageCtaDesktopIcon1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardDashboard>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
                  />
                </div>
                <div
                  className="content-stretch flex flex-col gap-[9.4px] items-start relative shrink-0"
                  data-name="Right Content"
                >
                  <div
                    className="bg-white content-stretch flex flex-col items-center pb-[9.008px] relative shrink-0 w-[137.867px]"
                    data-name="Job Open"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
                    />
                    <LandingPageCtaDesktopTitleText text="Job Open" />
                    <div
                      className="h-[34.467px] leading-[0] relative shrink-0 w-full whitespace-nowrap"
                      data-name="Total Applicants"
                    >
                      <div
                        className="absolute flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold inset-[9.09%_71.42%_9.67%_6.82%] justify-center text-[#25324b] text-[28.2px]"
                        style={{ fontFeatureSettings: "'cv11'" }}
                      >
                        <p className="leading-none">12</p>
                      </div>
                      <div className="absolute bottom-[14.56%] flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center left-[calc(50%-27.02px)] text-[#7c8493] text-[7.833px] top-[47.73%]">
                        <p className="leading-[1.6]">Jobs Opened</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-white content-stretch flex flex-col items-center pb-[9.008px] relative shrink-0 w-[137.867px]"
                    data-name="Applicant summary"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-0 pointer-events-none"
                    />
                    <LandingPageCtaDesktopTitleText text="Applicants Summary" />
                    <div
                      className="relative shrink-0 w-full"
                      data-name="Total Applicants"
                    >
                      <div className="flex flex-row items-end size-full">
                        <div className="content-stretch flex gap-[3.133px] items-end leading-[0] pl-[9.4px] py-[3.133px] relative w-full">
                          <div
                            className="flex flex-col font-['Epilogue:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#25324b] text-[28.2px] whitespace-nowrap"
                            style={{ fontFeatureSettings: "'cv11'" }}
                          >
                            <p className="leading-none">67</p>
                          </div>
                          <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[19.583px] justify-center relative shrink-0 text-[#7c8493] text-[7.833px] w-[41.125px]">
                            <p className="leading-[1.6]">Applicants</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-name="Chart">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center px-[9.4px] relative w-full">
                          <div className="bg-[#7b61ff] h-[6.267px] shrink-0 w-[58.75px]" />
                          <div className="bg-[#56cdad] h-[6.267px] shrink-0 w-[30.158px]" />
                          <div className="bg-[#26a4ff] h-[6.267px] shrink-0 w-[15.667px]" />
                          <div className="bg-[#ffb836] h-[6.267px] shrink-0 w-[10.967px]" />
                          <div className="bg-[#ff6550] flex-[1_0_0] h-[6.267px] min-h-px min-w-px" />
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[12.533px] items-start px-[9.4px] relative w-full">
                        <div
                          className="content-stretch flex flex-col gap-[3.133px] items-start pt-[9.4px] relative shrink-0"
                          data-name="Row 2"
                        >
                          <div
                            className="content-stretch flex gap-[3.133px] items-center relative shrink-0"
                            data-name="Hired"
                          >
                            <div className="bg-[#7b61ff] rounded-[1.567px] shrink-0 size-[7.833px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[0px] whitespace-nowrap">
                              <p className="text-[6.267px]">
                                <span className="leading-[1.6]">{`Full Time : `}</span>
                                <span className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] text-[#25324b]">
                                  45
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[3.133px] items-center relative shrink-0"
                            data-name="Declined"
                          >
                            <div className="bg-[#56cdad] rounded-[1.567px] shrink-0 size-[7.833px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[0px] whitespace-nowrap">
                              <p className="text-[6.267px]">
                                <span className="leading-[1.6]">{`Part-Time : `}</span>
                                <span className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] text-[#25324b]">
                                  24
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[3.133px] items-center relative shrink-0"
                            data-name="Declined"
                          >
                            <div className="bg-[#26a4ff] rounded-[1.567px] shrink-0 size-[7.833px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[0px] whitespace-nowrap">
                              <p className="text-[6.267px]">
                                <span className="leading-[1.6]">{`Remote : `}</span>
                                <span className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] text-[#25324b]">
                                  22
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="content-stretch flex flex-col gap-[3.133px] items-start pt-[9.4px] relative shrink-0"
                          data-name="Row 3"
                        >
                          <div
                            className="content-stretch flex gap-[3.133px] items-center relative shrink-0"
                            data-name="Hired"
                          >
                            <div className="bg-[#ffb836] rounded-[1.567px] shrink-0 size-[7.833px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[0px] whitespace-nowrap">
                              <p className="text-[6.267px]">
                                <span className="leading-[1.6]">{`Internship : `}</span>
                                <span className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] text-[#25324b]">
                                  32
                                </span>
                              </p>
                            </div>
                          </div>
                          <div
                            className="content-stretch flex gap-[3.133px] items-center relative shrink-0"
                            data-name="Declined"
                          >
                            <div className="bg-[#ff6550] rounded-[1.567px] shrink-0 size-[7.833px]" />
                            <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7c8493] text-[0px] whitespace-nowrap">
                              <p className="text-[6.267px]">
                                <span className="leading-[1.6]">{`Contract : `}</span>
                                <span className="font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] text-[#25324b]">
                                  30
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="content-stretch flex flex-col items-start relative shrink-0 w-[433.183px]"
                data-name="Job Updates"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[#d6ddeb] border-[0.392px] border-solid inset-[-0.392px] pointer-events-none"
                />
                <div
                  className="bg-white relative shrink-0 w-full"
                  data-name="Title"
                >
                  <div className="content-stretch flex items-start justify-between p-[9.4px] relative w-full">
                    <div
                      className="flex flex-col font-['Clash_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25324b] text-[7.833px] whitespace-nowrap"
                      style={{ fontFeatureSettings: "'cv11'" }}
                    >
                      <p className="leading-[1.2]">Job Updates</p>
                    </div>
                    <div
                      className="content-stretch flex gap-[3.133px] items-center justify-end relative shrink-0"
                      data-name="Button"
                    >
                      <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#4640de] text-[6.267px] whitespace-nowrap">
                        View All
                      </p>
                      <div
                        className="relative shrink-0 size-[9.4px]"
                        data-name="Icon"
                      >
                        <div className="absolute flex inset-[23.76%_17.71%_26.04%_19.79%] items-center justify-center">
                          <div className="-rotate-90 flex-none h-[5.875px] w-[4.719px]">
                            <div
                              className="relative size-full"
                              data-name="Arrow - Right"
                            >
                              <div className="absolute inset-[-6.67%_-8.3%]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 5.50252 6.65841"
                                >
                                  <g id="Arrow - Right">
                                    <path
                                      d="M2.7513 6.26667V0.391667"
                                      id="Stroke 1"
                                      stroke="var(--stroke-0, #4640DE)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="0.783333"
                                    />
                                    <path
                                      d={svgPaths.p3c9f5f80}
                                      id="Stroke 3"
                                      stroke="var(--stroke-0, #4640DE)"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="0.783333"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.392px_0px_0px_#d6ddeb]" />
                </div>
                <div className="relative shrink-0 w-full" data-name="Row">
                  <div className="content-stretch flex gap-[9.4px] items-start p-[9.4px] relative w-full">
                    <JobList>
                      <div
                        className="content-stretch flex items-start justify-between relative shrink-0 w-[80.292px]"
                        data-name="Header"
                      >
                        <LandingPageCtaDesktopCompanyLogo />
                        <LandingPageCtaDesktopLabelText text="Full-Time" />
                      </div>
                      <LandingPageCtaDesktopJobTitle
                        text="Social Media Assistant"
                        text1="Nomad"
                        text2="Paris, France"
                      />
                    </JobList>
                    <JobList1>
                      <Header>
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 32 32"
                        >
                          <g id="Base" />
                        </svg>
                        <div
                          className="absolute inset-[12.5%_10%]"
                          data-name="Dropbox"
                        >
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 15.04 14.1"
                          >
                            <g clipPath="url(#clip0_1_3865)" id="Dropbox">
                              <path
                                d={svgPaths.p194a8c0}
                                fill="var(--fill-0, #0062FF)"
                                id="Vector"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1_3865">
                                <rect
                                  fill="white"
                                  height="14.1"
                                  width="15.04"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </Header>
                      <LandingPageCtaDesktopJobTitle
                        text="Brand Designer"
                        text1="Nomad"
                        text2="Paris, France"
                      />
                    </JobList1>
                    <JobList>
                      <Header>
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 32 32"
                        >
                          <g id="Base" />
                        </svg>
                        <div
                          className="absolute inset-[10%_13.75%_10%_15%] overflow-clip"
                          data-name="Terraform Enterprise"
                        >
                          <div
                            className="absolute inset-[0_0.01%]"
                            data-name="XMLID 8"
                          >
                            <svg
                              className="absolute block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 13.3934 15.04"
                            >
                              <g id="XMLID 8">
                                <path
                                  d={svgPaths.pf0fc380}
                                  fill="var(--fill-0, #21D4EF)"
                                  id="XMLID 21"
                                />
                                <path
                                  d={svgPaths.p12c7c500}
                                  fill="var(--fill-0, #21D4EF)"
                                  id="XMLID 20"
                                />
                                <path
                                  d={svgPaths.p1417cb30}
                                  fill="var(--fill-0, #21D4EF)"
                                  id="XMLID 19"
                                />
                                <path
                                  d={svgPaths.p1e910780}
                                  fill="var(--fill-0, #21D4EF)"
                                  id="XMLID 18"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </Header>
                      <LandingPageCtaDesktopJobTitle
                        text="Interactive Developer"
                        text1="Terraform"
                        text2="Berlin, Germany"
                      />
                    </JobList>
                    <JobList1>
                      <Header>
                        <div
                          className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[80px_80px]"
                          data-name="s93HU9p3_400x400"
                          style={{
                            maskImage: `url('${imgLandingPageCtaDesktop3}')`,
                          }}
                        >
                          <img
                            alt=""
                            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                            src={imgLandingPageCtaDesktop4}
                          />
                        </div>
                      </Header>
                      <div
                        className="content-stretch flex flex-col gap-[0.783px] items-start relative shrink-0"
                        data-name="Job Title"
                      >
                        <p className="font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#25324b] text-[2.76px] whitespace-nowrap">
                          Product Designer
                        </p>
                        <Location text="ClassPass" text1="Berlin, Germ.." />
                      </div>
                    </JobList1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
