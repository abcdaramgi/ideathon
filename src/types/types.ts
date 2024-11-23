export type GetUserInfoResponse = {
  id: number;
  email: string;
  name: string;
  nickname: string;
  profileImageUrl: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type CheckoutSessionResponse = {
  url: string;
};

export enum BidStatus {
  BIDDING = "BIDDING",
  NOT_BIDDING = "NOT_BIDDING",
  HIGHEST_BID = "HIGHEST_BID",
}

export enum AuctionStatus {
  ONGOING = "경매중", // 경매 ONGOING
  BIDDING = "입찰", // 입찰 BIDDING
  WINNING = "낙찰", // 낙찰 WINNING
  FINISHED = "경매종료", // 경매종료 FINISHED
  PASSED = "유찰", // 유찰 PASSED
}

export enum AuctionDeliveryStage {
  PAYMENT_PENDING = "결제대기", // 결제대기 PAYMENT_PENDING
  PAYMENT = "결제완료", // 결제완료 PAYMENT
  CREATOR_DELIVERY = "크리에이터 배송완료", // 크리에이터 배송완료 CREATOR_DELIVERY
  INSPECTION = "검수완료", // 검수완료 INSPECTION
  DELIVERY = "배송완료", // 배송완료 DELIVERY
}

export enum ERROR {
  SWEAR_WORD = "SWEAR_WORD", // 비속어 발견
  DUPLICATION = "DUPLICATION", // 중복 작성
  AUTHENTICATION = "AUTHENTICATION", // 인증에러
  EID_AUTHENTICATION = "EID_AUTHENTICATION", // 인증에러
  EID_REFRESH_AUTHENTICATION = "EID_REFRESH_AUTHENTICATION", // 인증에러
  AUTHORIZATION = "AUTHORIZATION", // 권한에러
  NOT_EXIST_DATA = "NOT_EXIST_DATA", // 해당 데이터 없음
  UNKNOWN_APP_ID = "UNKNOWN_APP_ID", // 비정상적인 앱 접근

  //Auction
  AUCTION_SAVE_FAILED = "AUCTION_SAVE_FAILED", // 경매 사용자 정보 저장 실패
  INVALID_BID_AMOUNT = "INVALID_BID_AMOUNT", // 유효하지 않은 입찰 금액

  //Wallet
  INVALID_WALLET_CRAB_AMOUNT = "INVALID_WALLET_CRAB_AMOUNT", // 비정상적인 금액
}
