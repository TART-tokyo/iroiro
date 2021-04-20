/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SingleTreasuryVesterInterfaceV1Interface
  extends ethers.utils.Interface {
  functions: {
    "initialize(address,address,uint256,uint256)": FunctionFragment;
    "remainingAmount()": FunctionFragment;
    "redeemableAmount()": FunctionFragment;
    "redeem()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remainingAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemableAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "redeem", values?: undefined): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "remainingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;

  events: {};
}

export class SingleTreasuryVesterInterfaceV1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SingleTreasuryVesterInterfaceV1Interface;

  functions: {
    initialize(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,uint256,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    remainingAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "remainingAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeemableAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "redeemableAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeem(overrides?: Overrides): Promise<ContractTransaction>;

    "redeem()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  initialize(
    token: string,
    recipient: string,
    vestingStart: BigNumberish,
    vestingYears: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,uint256,uint256)"(
    token: string,
    recipient: string,
    vestingStart: BigNumberish,
    vestingYears: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  remainingAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "remainingAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  redeemableAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "redeemableAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  redeem(overrides?: Overrides): Promise<ContractTransaction>;

  "redeem()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    initialize(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,uint256,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remainingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "remainingAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeemableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "redeemableAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(overrides?: CallOverrides): Promise<void>;

    "redeem()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initialize(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,uint256,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    remainingAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "remainingAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeemableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "redeemableAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(overrides?: Overrides): Promise<BigNumber>;

    "redeem()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,uint256,uint256)"(
      token: string,
      recipient: string,
      vestingStart: BigNumberish,
      vestingYears: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    remainingAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "remainingAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemableAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "redeemableAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(overrides?: Overrides): Promise<PopulatedTransaction>;

    "redeem()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}