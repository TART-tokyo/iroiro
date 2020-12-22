/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { VestingInterface } from "../VestingInterface";

export class VestingInterface__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VestingInterface {
    return new Contract(address, _abi, signerOrProvider) as VestingInterface;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vestingStart",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingEnd",
        type: "uint256",
      },
    ],
    name: "addVesting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];