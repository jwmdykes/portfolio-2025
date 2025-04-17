import { Envelope, Github, Medium, Youtube } from '../../components/Icons';

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-4 fill-neutral-100">
      <li>
        <a
          href="https://github.com/jwmdykes"
          aria-label="Github Profile"
          className="hover:fill-white transition-colors duration-400"
        >
          <Github className="w-7"></Github>
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@aByteWizard"
          aria-label="Youtube Channel"
          className="hover:fill-white transition-colors duration-400"
        >
          <Youtube className="w-8"></Youtube>
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@98johndykes"
          aria-label="Medium Account"
          className="hover:fill-white transition-colors duration-400"
        >
          <Medium className="w-9"></Medium>
        </a>
      </li>
      <li>
        <a
          href="mailto:98johndykes@gmail.com"
          aria-label="Contact By Email"
          className="hover:fill-white transition-colors duration-400"
        >
          <Envelope className="w-7"></Envelope>
        </a>
      </li>
    </ul>
  );
}
