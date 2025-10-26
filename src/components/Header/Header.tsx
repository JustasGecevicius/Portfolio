import { useState, useRef, useEffect, Suspense, useCallback } from "react";
import Contacts from "../../pages/Contacts";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Canvas } from "@react-three/fiber";
import { Center, Float, Text3D } from "@react-three/drei";
import { CANVAS_CAMERA_VALUES, FLOAT_FLOATING_RANGE, FLOAT_POSITION } from "./constants";
import { POINT_LIGHT_COMPONENT_CONSTANTS } from "./component_constants";

export default function Header() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const modal = useRef(null);
  const objectRef = useRef(null);

  const handleScroll = () => {
    window.scrollY !== 0 ? setIsTop(false) : setIsTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const onMouseEnter = useCallback(() => {
    if (objectRef?.current) {
      objectRef.current.scale.set(1.1, 1.1, 1.1);
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    if (objectRef?.current) {
      objectRef.current.scale.set(1, 1, 1);
    }
  }, []);

  const onClickLogo = useCallback(() => {
    document?.getElementById("main")?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  const onClickProjects = useCallback(() => {
    document?.getElementById("projects")?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  const onClickContacts = useCallback(() => {
    setContactsOpen(true);
    disableBodyScroll(modal);
  }, []);

  const onClickOutsideContactsModal = useCallback(() => {
    setContactsOpen(false);
    enableBodyScroll(modal);
  }, []);

  return (
    <>
      <Suspense>
        <div
          className={
            "fixed flex flex-row justify-between w-screen px-5 py-2 z-10 max-h-14 bg-[#00111a]"
          }
        >
          <div
            className="max-w-[100px]"
            onClick={onClickLogo}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Canvas shadows camera={CANVAS_CAMERA_VALUES}>
              <Float
                floatIntensity={1}
                speed={5}
                floatingRange={FLOAT_FLOATING_RANGE}
                position={FLOAT_POSITION}
                ref={objectRef}
              >
                <Center top>
                  <Text3D
                    font={"/Poppins Medium_Regular.json"}
                    size={5.5}
                    bevelEnabled
                    bevelSize={0.2}
                    bevelSegments={5}
                    height={2}
                    receiveShadow
                    castShadow
                  >
                    JG
                    <meshStandardMaterial color={"#00aeff"} />
                  </Text3D>
                </Center>
              </Float>
              {POINT_LIGHT_COMPONENT_CONSTANTS.map((light) => (
                <pointLight {...light} />
              ))}
            </Canvas>
          </div>
          <div className="flex flex-row gap-x-5 md:pr-4">
            <div
              onClick={onClickProjects}
              className={`md:text-xl ${
                !isTop && "text-[#00aeff]"
              } flex items-center hover:text-light_blue font-semibold`}
            >
              Projects
            </div>
            <button
              className={`md:text-xl ${
                !isTop ? "text-[#00aeff]" : "text-white"
              } flex items-center hover:text-light_blue`}
              onClick={onClickContacts}
            >
              Contacts
            </button>
          </div>
        </div>
      </Suspense>
      {contactsOpen && (
        <div className="fixed top-0 bottom-0 flex items-center justify-center w-screen bg-[#242424] z-30">
          <p
            className="fixed hover:ring-2 hover:ring-[#00aeff] top-0 right-0 flex items-center justify-center w-6 m-2 antialiased text-center text-[#00aeff] bg-white rounded-full md:text-2xl aspect-square md:w-10"
            onClick={onClickOutsideContactsModal}
          >
            &#10005;
          </p>
          <Contacts />
        </div>
      )}
    </>
  );
}
