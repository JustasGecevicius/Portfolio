import { useGSAP } from "@gsap/react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import gsap from "gsap";
import { memo, useCallback, useRef } from "react";
import { useInView } from "react-intersection-observer";

type AboutPropsType = {
  setIsWaitingOnAboutAnimation: (value: boolean) => void;
};

function About({ setIsWaitingOnAboutAnimation }: AboutPropsType) {
  const animationRefference = useRef(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  useGSAP(
    () => {
      if (inView) {
        gsap.fromTo(
          animationRefference.current,
          { opacity: 0, x: -200 },
          { opacity: 1, x: 0, duration: 1, delay: 0.3 }
        );
        setTimeout(() => setIsWaitingOnAboutAnimation(false), 1300);
      }
    },
    { scope: animationRefference, dependencies: [inView] }
  );

  const downloadPDF = useCallback(async () => {
    try {
      const storage = getStorage();
      const url = await getDownloadURL(ref(storage, "Web Dev CV.pdf"));
      const alink = document.createElement("a");
      alink.href = url;
      alink.target = "_b";
      alink.click();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-5" ref={inViewRef}>
      {inView && (
        <div ref={animationRefference}>
          <p className="text-lg text-center max-w-prose text-white_blue md:text-xl">Intro</p>
          <h2 className="text-3xl font-bold text-center max-w-prose md:text-4xl">About Me</h2>
          <div className="mt-4 text-justify max-w-prose md:text-lg">
            I am a <span className="italic text-blue">Dedicated and Inquisitive</span> Front-end
            Developer. With the expert guidance of several Software and Front-end Development
            professionals I have managed to progress swiftly and understand the market standards for
            writing <span className="italic text-blue">Clean and Professional code</span>. <br />{" "}
            <br />I got hooked on coding from the moment I picked up an Arduino kit. The fact that
            the code I wrote made real world changes seemed fascinating to me. This is the reasson
            why I got drawn to Front-end development as well. The changes made to the code appeared
            on the screen instantly and provided instant feedback. This
            <span className="italic text-blue"> gets me Inspired</span> every single time to{" "}
            <span className="italic text-blue">Explore new Possibilities</span>.
            <br /> <br />
            For all of my skills click <span className="italic text-blue">Resume</span> and for all
            of my latest projects click
            <span className="italic text-blue"> Projects</span>. Feel free to explore my{" "}
            <span className="italic text-blue">Github</span> or contact me using the
            <span className="italic"> contacts page.</span>
          </div>
          <div className="flex flex-row items-center justify-center w-full mt-4">
            <button type="button" onClick={downloadPDF}>
              <p className="text-blue md:text-lg hover:text-white_blue">Click Here for a Resume!</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(About);
