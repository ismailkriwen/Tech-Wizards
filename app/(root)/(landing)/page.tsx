import { Navbar } from "@/app/(root)/(landing)/components/Navbar";
import { Pricing } from "@/app/(root)/(landing)/components/Pricing";
import { About } from "@/app/(root)/(landing)/components/About";
import { Divider } from "@nextui-org/react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <div className="container">
        <Divider className="my-2" />
      </div>
      <Pricing />
    </>
  );
};

export default LandingPage;
