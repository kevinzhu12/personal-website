import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="mt-20 mb-10">
      <Separator className="my-5" />
      <div className="flex flex-row max-w-md mx-auto justify-between gap-10 text-sm text-gray-700">
        <a href="#" className="scroll-smooth">
          Back to Top
        </a>
        <a href="https://www.linkedin.com/in/kevin-zhu1284/" className="">
          LinkedIn
        </a>
        <a href="https://github.com/kevinzhu12" className="">
          Github
        </a>
        <a href="mailto:kbzhu@mit.edu" className="scroll-smooth">
          Email
        </a>
        <a href="" className="scroll-smooth">
          Resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
