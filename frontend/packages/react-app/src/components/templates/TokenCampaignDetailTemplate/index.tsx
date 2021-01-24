import React, { Dispatch, useState } from "react";
import AppHeader from "../../molecules/AppHeader";
import { TabMenuForFanPage } from "../../molecules/TabMenuForFanPage";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TokenInformationBar from "../../organisms/TokenInformationBar";
import TokenDetailCampaignPanel from "../../organisms/TokenCampaignDetailPanel";
import { TokenInformationState } from "../../../interfaces";
import { TokenInformationAction } from "../../../reducers/tokenInformation";
import { AudiusState, AUDIUS_ACTIONS } from "../../../reducers/audius";

export interface TokenCampaignsDetailTemplateProps {
  state: TokenInformationState;
  readonly dispatch: Dispatch<TokenInformationAction>;
  readonly audiusState: AudiusState;
  readonly audiusDispatch: Dispatch<AUDIUS_ACTIONS>;
}

export const TokenCampaignsDetailTemplate: React.FC<TokenCampaignsDetailTemplateProps> = ({
  state,
  dispatch,
  audiusState,
  audiusDispatch,
}) => {
  const [tabNumber, setTubNumber] = useState(1);
  return (
    <div style={{ minHeight: "100vh" }}>
      <AppHeader />
      <TokenInformationBar
        token={state.token}
        userAddress={state.userAddress}
        userBalance={state.userBalance}
      />
      <TabMenuForFanPage value={tabNumber} onChange={(n) => setTubNumber(n)} />
      <Container>
        <Box style={{ padding: 24 }}>
          <TokenDetailCampaignPanel
            state={state}
            dispatch={dispatch}
            audiusState={audiusState}
            audiusDispatch={audiusDispatch}
          />
        </Box>
      </Container>
    </div>
  );
};
