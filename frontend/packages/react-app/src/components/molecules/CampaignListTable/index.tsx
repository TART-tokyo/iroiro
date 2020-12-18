import * as React from "react";
import { Table, Text, Box } from "rimble-ui";
import { Link } from "react-router-dom";
import { TokenAndCampaignProps } from "../../../interfaces";

const CampaignListTable: React.FC<TokenAndCampaignProps> = ({
  tokenState,
  campaignsState,
}) => (
  <>
    {campaignsState.campaigns.length > 0 ? (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Startdate</th>
          </tr>
        </thead>
        <tbody>
          {campaignsState.campaigns.length > 0 &&
            campaignsState.campaigns.map((campaign) => (
              <tr key={campaign.id}>
                {"campaignMetadata" in campaign ? (
                  <td>
                    <Link
                      to={`/dashboard/${tokenState.token?.tokenAddress}/distributors/${campaign.distributor.id}/campaigns/${campaign.id}`}
                      style={{ textDecoration: "none", color: "#48C5D5" }}
                    >
                      <Text fontSize="2" fontWeight="bold">
                        {campaign.campaignMetadata.name}
                      </Text>
                    </Link>
                  </td>
                ) : (
                  <td>loading...</td>
                )}
                {/* TODO: あとで正確な数字にする */}
                <td>{campaign.claimAmount}</td>
                <td>
                  {new Date(parseInt(campaign.startDate)).toLocaleDateString()}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    ) : (
      <Box style={{ textAlign: "center" }}>
        <Text>No Campaign</Text>
      </Box>
    )}
  </>
);

export default CampaignListTable;
