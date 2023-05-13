"use client";
import header from "@/app/components/styles/Header.module.scss";
const Header = () => {
  const onMoveScroll = (e: React.MouseEvent<HTMLButtonElement>, y: number) => {
    e.preventDefault();
    window.scrollTo({ left: 0, top: y });
  };
  return (
    <header className={header.wrapper}>
      <div className={header.container}>
        <div className={header.package__left}>
          <button onClick={(e) => onMoveScroll(e, 0)}>Intro</button>
        </div>
        <div className={header.package__right}>
          <button onClick={(e) => onMoveScroll(e, 700)}>About Me</button>
          <button onClick={(e) => onMoveScroll(e, 1000)}>I Am</button>
          <button onClick={(e) => onMoveScroll(e, 1400)}>Skills</button>
          <button onClick={(e) => onMoveScroll(e, 1900)}>Projects</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
