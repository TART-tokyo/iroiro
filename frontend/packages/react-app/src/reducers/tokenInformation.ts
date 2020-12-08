import { CampaignInfo, TokenBasic, TokenInformationState } from "../interfaces";
import { BigNumber } from "ethers";
import { LINK_APPROVE_AMOUNT } from "../utils/const";

export type TokenInformationAction =
  | {
      type: "token:set";
      payload: {
        token: TokenBasic;
      };
    }
  | {
      type: "isTokenApproved:set";
      payload: {
        allowance: BigNumber;
      };
    }
  | {
      type: "campaigns:set";
      payload: {
        campaigns: CampaignInfo[];
      };
    }
  | {
      type: "campaignAddress:set";
      payload: {
        campaignAddress: string;
      };
    }
  | {
      type: "campaignAddress:remove";
    }
  | {
      type: "userAddress:set";
      payload: {
        address: string;
      };
    }
  | {
      type: "userBalance:set";
      payload: {
        balance: string;
      };
    };

export const tokenInformationReducer = (
  state: TokenInformationState,
  action: TokenInformationAction
) => {
  switch (action.type) {
    case "token:set":
      return {
        ...state,
        token: {
          ...action.payload.token,
        },
      };
    case "isTokenApproved:set": {
      const isTokenApproved = action.payload.allowance.gte(
        BigNumber.from(LINK_APPROVE_AMOUNT)
      );
      return {
        ...state,
        isTokenApproved,
      };
    }
    case "campaigns:set":
      return {
        ...state,
        campaigns: action.payload.campaigns,
      };
    case "campaignAddress:set":
      return {
        ...state,
        campaignAddress: action.payload.campaignAddress,
      };
    case "campaignAddress:remove":
      return {
        ...state,
        campaignAddress: undefined,
      };
    case "userAddress:set":
      return {
        ...state,
        userAddress: action.payload.address,
      };
    case "userBalance:set":
      return {
        ...state,
        userBalance: action.payload.balance,
      };
    default:
      return state;
  }
};

export const initialState: TokenInformationState = {
  token: undefined,
  isTokenApproved: false,
  isTokenRequested: false,
  isTokenCheckFinished: false,
  campaigns: [],
  campaignAddress: undefined,
  isCampaignClaimable: false,
  isCampaignClaimed: false,
  userAddress: undefined,
  userBalance: undefined,
  activities: [],
  balances: [],
};
