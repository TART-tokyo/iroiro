/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PointerInterface } from "../PointerInterface";

export class PointerInterface__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PointerInterface {
    return new Contract(address, _abi, signerOrProvider) as PointerInterface;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];