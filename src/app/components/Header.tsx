import header from "@/app/components/styles/Header.module.scss";
const Header = () => {
  return (
    <header className={header.wrapper}>
      <div className={header.container}>
        <span>About Me</span>
        <span>I am</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Education</span>
      </div>
    </header>
  );
};

export default Header;
