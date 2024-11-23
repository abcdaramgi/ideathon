const HeaderSetting: Record<
  string,
  { title: string; color: string; isMain: boolean }
> = {
  "/": { title: "Home", color: "white", isMain: true },
  "/application": {
    title: "신청서 작성",
    color: "primary-default",
    isMain: false,
  },
  "/application/state": {
    title: "신청 현황",
    color: "primary-default",
    isMain: false,
  },
  "/application/detail": {
    title: "신청서 조회",
    color: "primary-default",
    isMain: false,
  },
  "/offer": {
    title: "",
    color: "primary-default",
    isMain: false,
  },
  "/offer/detail": {
    title: "제안서 조회",
    color: "primary-default",
    isMain: false,
  },

  // 동적 경로를 위한 설정
  "/offer/detail/:id": {
    title: "제안서",
    color: "primary-default",
    isMain: false,
  },
  // 다른 경로를 추가할 수 있습니다.
};

export default HeaderSetting;
export function getHeaderSetting(pathname: string) {
  // 정확히 일치하는 경로 확인
  if (HeaderSetting[pathname]) {
    return HeaderSetting[pathname];
  }

  // 동적 경로 처리
  if (pathname.startsWith("/offer/detail/")) {
    return {
      ...HeaderSetting["/offer/detail/:id"],
      // title: `${pathname.split("/").pop()}`, // ID를 사용하여 제목을 동적으로 설정
    };
  }

  return { color: "primary-default", isMain: false }; // 기본 설정
}
