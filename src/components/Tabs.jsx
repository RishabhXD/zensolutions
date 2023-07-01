import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex border-b border-gray-200">
        <TabButton isActive={activeTab === 1} onClick={() => handleTabClick(1)}>
          Our Mission
        </TabButton>
        <TabButton isActive={activeTab === 2} onClick={() => handleTabClick(2)}>
          Our Vision
        </TabButton>
        <TabButton isActive={activeTab === 3} onClick={() => handleTabClick(3)}>
          Our Values
        </TabButton>
      </div>
      <div className="mt-4">
        {activeTab === 1 && (
          <TabContent>
            <h2 className="text-lg font-semibold mb-2">Our Mission</h2>
            <p>
              The mission of ZenSolutions is to provide the highest quality
              technology-based services while remaining personable, reliable,
              and comprehensive. We are dedicated to delivering exceptional IT
              solutions that empower our clients to thrive in a digital world.
              Through our innovative approach, cutting-edge technology, and
              unwavering commitment to customer satisfaction, we strive to make
              technology a seamless and valuable asset for our clients.
            </p>
          </TabContent>
        )}
        {activeTab === 2 && (
          <TabContent>
            <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
            <p>
              To be a successful information technology services business known
              for providing excellent support, caring for staff, and partnering
              with stakeholders to provide creative and value-driven IT
              services.
            </p>
          </TabContent>
        )}
        {activeTab === 3 && (
          <TabContent>
            <h2 className="text-lg font-semibold mb-2">Our Values</h2>
            <ul className="list-none pl-6">
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>Customer Focus – We put our customers first.</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>Caring – We are concerned about you.</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>
                    Simplicity – We try to keep it as straightforward as
                    possible.
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>Passion – We are passionate about serving you.</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>
                    Commitment – We are dedicated to achieving excellence.
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>
                    Integrity – We conduct ourselves in a trustworthy manner.
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <TiTick className="text-[#9333ea] mr-2" />
                  <span>
                    Professionalism – We take our work very seriously.
                  </span>
                </div>
              </li>
            </ul>
          </TabContent>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ isActive, onClick, children }) => {
  const activeStyles = isActive
    ? "border-b-2 border-[#9333ea]"
    : "text-gray-500 hover:";

  return (
    <button
      className={`py-4 px-6 text-lg font-medium focus:outline-none ${activeStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabContent = ({ children }) => {
  return <div className="py-4">{children}</div>;
};

export default Tabs;
