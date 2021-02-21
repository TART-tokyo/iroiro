/*
 *     Copyright (C) 2021 TART K.K.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import React, { Dispatch } from "react";
import AppHeader from "../../molecules/AppHeader";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { AudiusState, AUDIUS_ACTIONS } from "../../../reducers/audius";
import {
  CampaignDetailAction,
  CampaignDetailState,
} from "../../../reducers/campaignDetail";
import { useHistory } from "react-router-dom";
import { TabMenuForFunPage } from "../../molecules/TabMenuForFunPage";
import WalletCampaignDetailPanel from "../../organisms/WalletCampaignDetailPanel";
import { useMemo } from "react";
import { AppFooter } from "../../molecules/AppFooter";
import TokenInfoBar from "../../molecules/TokenInfoBar";

export interface TokenCampaignsDetailTemplateProps {
  readonly state: CampaignDetailState;
  readonly dispatch: Dispatch<CampaignDetailAction>;
  readonly audiusState: AudiusState;
  readonly audiusDispatch: Dispatch<AUDIUS_ACTIONS>;
  tokenAddress: string;
}

export const TokenCampaignsDetailTemplate: React.FC<TokenCampaignsDetailTemplateProps> = ({
  state,
  dispatch,
  audiusState,
  audiusDispatch,
  tokenAddress,
}) => {
  const CampaignDetailPanel = useMemo(() => {
    switch (state.distributorType) {
      case "wallet":
      case "uuid":
        return <WalletCampaignDetailPanel state={state} dispatch={dispatch} />;
    }

    return (
      <div
        style={{
          padding: 24,
          textAlign: "center",
          lineHeight: "240px",
          height: 240,
        }}
      >
        <Typography>Campaign not found.</Typography>
      </div>
    );
  }, [state]);

  return (
    <div style={{ height: "100%", minHeight: "100vh" }}>
      <AppHeader />
      <Box
        m={"auto"}
        minWidth={320}
        style={{
          boxSizing: "border-box",
          height: "calc(100% - 170px)",
          minHeight: "600px",
        }}
      >
        <Container maxWidth="md">
          <Box
            style={{
              padding: 24,
              margin: "0 auto",
              maxWidth: 860,
              minWidth: 320,
            }}
          >
            <TokenInfoBar />
            <TabMenuForFunPage
              current={"campaigns"}
              tokenAddress={tokenAddress}
            />
            <div style={{ backgroundColor: "#fff" }}>
              {state.campaign !== null &&
                state.campaign.campaignMetadata &&
                CampaignDetailPanel}
              {state.campaign === null && (
                <div
                  style={{
                    padding: 24,
                    textAlign: "center",
                    lineHeight: "240px",
                    height: 240,
                  }}
                >
                  <Typography>Campaign not found.</Typography>
                </div>
              )}
            </div>
          </Box>
        </Container>
      </Box>
      <AppFooter />
    </div>
  );
};
