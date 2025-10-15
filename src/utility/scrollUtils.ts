export const handleNavClick = (targetId: string) => {
  const element = document.getElementById(targetId);
  const header = document.querySelector("header");
  const headerOffset = header ? header.clientHeight : 0;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

