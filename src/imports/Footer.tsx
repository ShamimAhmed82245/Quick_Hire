import clsx from "clsx";
import svgPaths from "./svg-np0mgvodgm";
type FooterHelperProps = {
  additionalClassNames?: string;
};

function FooterHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<FooterHelperProps>) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#202430] relative size-full" data-name="Footer">
      <div className="absolute contents right-[124px] top-[425px]" data-name="Social Media Icons">
        <FooterHelper additionalClassNames="right-[124px] top-[425px]">
          <g id="Twitter">
            <circle cx="16" cy="16" fill="var(--fill-0, white)" id="Ellipse 10" opacity="0.1" r="16" />
            <path clipRule="evenodd" d={svgPaths.p34808340} fill="var(--fill-0, white)" fillRule="evenodd" id="Twitter_2" />
          </g>
        </FooterHelper>
        <FooterHelper additionalClassNames="right-[180px] top-[425px]">
          <g id="LinkedIn">
            <circle cx="16" cy="16" fill="var(--fill-0, white)" id="Ellipse 9" opacity="0.1" r="16" />
            <path clipRule="evenodd" d={svgPaths.p14f5c500} fill="var(--fill-0, white)" fillRule="evenodd" id="LinkedIn_2" />
          </g>
        </FooterHelper>
        <FooterHelper additionalClassNames="right-[calc(8.33%+116px)] top-[425px]">
          <g id="Dribbble">
            <circle cx="16" cy="16" fill="var(--fill-0, white)" id="Ellipse 8" opacity="0.1" r="16" />
            <path d={svgPaths.p1687900} fill="var(--fill-0, white)" id="Dribbble_2" />
          </g>
        </FooterHelper>
        <div className="absolute right-[calc(8.33%+172px)] size-[32px] top-[425px]" data-name="Instagram">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32.0001">
            <g id="Instagram">
              <circle cx="16" cy="16" fill="var(--fill-0, white)" id="Ellipse 7" opacity="0.1" r="16" />
              <path clipRule="evenodd" d={svgPaths.p39d8dc80} fill="var(--fill-0, white)" fillRule="evenodd" id="Instagram_2" />
            </g>
          </svg>
        </div>
        <FooterHelper additionalClassNames="right-[calc(16.67%+108px)] top-[425px]">
          <g id="Facebook">
            <circle cx="16" cy="16" fill="var(--fill-0, white)" id="Ellipse 6" opacity="0.1" r="16" />
            <path clipRule="evenodd" d={svgPaths.p18fc3a80} fill="var(--fill-0, white)" fillRule="evenodd" id="Facebook_2" />
          </g>
        </FooterHelper>
      </div>
      <div className="absolute contents left-[124px] top-[427px]" data-name="Copyright">
        <p className="absolute font-['Epilogue:Medium',sans-serif] font-medium leading-[1.6] left-[124px] opacity-50 text-[16px] text-white top-[427px] whitespace-nowrap">2021 @ QuickHire. All rights reserved.</p>
      </div>
      <div className="absolute h-0 left-[124px] top-[385px] w-[1192px]" data-name="Divider">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1192 2.00013">
            <g id="Divider">
              <line id="Line" opacity="0.1" stroke="var(--stroke-0, white)" strokeWidth="2" x1="8.74228e-08" x2="1192" y1="1.0001" y2="1" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[calc(66.67%-6px)] top-[64px]" data-name="Right">
        <div className="absolute contents left-[calc(66.67%-6px)] top-[203px]" data-name="Subscribe">
          <div className="absolute content-stretch flex gap-[8px] items-start left-[calc(66.67%-6px)] top-[203px]">
            <div className="bg-white relative shrink-0 w-[223px]" data-name="Input">
              <div aria-hidden="true" className="absolute border border-[#d6ddeb] border-solid inset-0 pointer-events-none" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center px-[16px] py-[12px] relative w-full">
                  <p className="font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#a8adb7] text-[16px] whitespace-nowrap">Email Address</p>
                </div>
              </div>
            </div>
            <div className="bg-[#4640de] relative shrink-0" data-name="Button">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative">
                  <p className="font-['Epilogue:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Subscribe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="absolute font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] left-[calc(66.67%-6px)] text-[#d6ddeb] text-[16px] top-[111px] w-[306px]">The latest job news, articles, sent to your inbox weekly.</p>
        <p className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold leading-[1.6] left-[calc(66.67%-6px)] text-[18px] text-white top-[64px] whitespace-nowrap">Get job notifications</p>
      </div>
      <div className="absolute contents leading-[1.6] left-[calc(33.33%+108px)] top-[64px] whitespace-nowrap" data-name="Menu">
        <div className="absolute contents left-[calc(50%+66px)] top-[64px]" data-name="Second Column">
          <div className="absolute contents font-['Epilogue:Regular',sans-serif] font-normal left-[calc(50%+66px)] text-[#d6ddeb] text-[16px] top-[111px]" data-name="Description">
            <p className="absolute left-[calc(50%+66px)] top-[258px]">Contact Us</p>
            <p className="absolute left-[calc(50%+66px)] top-[209px]">Updates</p>
            <p className="absolute left-[calc(50%+66px)] top-[160px]">Guide</p>
            <p className="absolute left-[calc(50%+66px)] top-[111px]">Help Docs</p>
          </div>
          <p className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold left-[calc(50%+66px)] text-[18px] text-white top-[64px]">Resources</p>
        </div>
        <div className="absolute contents left-[calc(33.33%+108px)] top-[64px]" data-name="First Column">
          <div className="absolute content-stretch flex flex-col font-['Epilogue:Regular',sans-serif] font-normal gap-[16px] items-start left-[calc(33.33%+108px)] text-[#d6ddeb] text-[16px] top-[111px]" data-name="Description">
            <p className="relative shrink-0">Companies</p>
            <p className="relative shrink-0">Pricing</p>
            <p className="relative shrink-0">Terms</p>
            <p className="relative shrink-0">Advice</p>
            <p className="relative shrink-0">Privacy Policy</p>
          </div>
          <p className="absolute font-['Epilogue:SemiBold',sans-serif] font-semibold left-[calc(33.33%+109px)] text-[18px] text-white top-[64px]">About</p>
        </div>
      </div>
      <div className="absolute contents left-[124px] top-[64px]" data-name="Left">
        <p className="absolute font-['Epilogue:Regular',sans-serif] font-normal leading-[1.6] left-[124px] text-[#d6ddeb] text-[16px] top-[132px] w-[376px]">Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
        <div className="absolute contents left-[124px] top-[64px]" data-name="Logo 2">
          <div className="absolute left-[124px] overflow-clip size-[32px] top-[66px]">
            <FooterHelper additionalClassNames="left-0 top-0">
              <circle cx="16" cy="16" fill="var(--fill-0, #4640DE)" id="Ellipse 2" r="16" />
            </FooterHelper>
            <div className="absolute inset-[65.63%_21.87%_15.63%_21.88%]">
              <div className="absolute inset-[23.47%_9.95%_0_9.95%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4176 4.59186">
                  <g id="Vector 7">
                    <mask fill="white" id="path-1-inside-1_4_34815">
                      <path d={svgPaths.p3af5b400} />
                    </mask>
                    <path d={svgPaths.p1f0f8d80} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_4_34815)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[7px] size-[20px] top-[4px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <div className="overflow-clip relative size-[20px]" data-name="Search">
                  <div className="absolute contents inset-[8.33%]" data-name="Iconly/Bold/Search">
                    <div className="absolute inset-[8.33%]" data-name="Search">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                        <g id="Search">
                          <path d={svgPaths.p1e3ce200} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="absolute font-['Red_Hat_Display:Bold',sans-serif] font-bold leading-[1.5] left-[164px] text-[24px] text-white top-[64px] tracking-[-0.24px] whitespace-nowrap" style={{ fontFeatureSettings: "'cv11'" }}>
            QuickHire
          </p>
        </div>
      </div>
    </div>
  );
}