const HomeContentButtonData: Record<
  number,
  {
    title: string;
    description: string;
    img: string;
    color: string;
    navigate: string;
  }
> = {
  0: {
    title: "당딱대",
    description: "대출 제안을 받아보세요!",
    img: require("../assets/images/wallet with cash.png"),
    color: "primary-default",
    navigate: "/application",
  },

  1: {
    title: "현황 조회",
    description: "",
    img: "",
    color: "primary-dark",
    navigate: "/",
  },

  2: {
    title: "제안 조회",
    description: "",
    img: "",
    color: "primary-dark",
    navigate: "/offer",
  },
};

export default HomeContentButtonData;
