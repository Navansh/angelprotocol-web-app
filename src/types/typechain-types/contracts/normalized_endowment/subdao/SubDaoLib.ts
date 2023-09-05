/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface SubDaoLibInterface extends utils.Interface {
  functions: {
    "queryAddressVotingBalanceAtBlock(address,address,uint256)": FunctionFragment;
    "queryTotalVotingBalanceAtBlock(address,uint256)": FunctionFragment;
    "utfStringLength(string)": FunctionFragment;
    "validateDescription(string)": FunctionFragment;
    "validateLink(string)": FunctionFragment;
    "validateQuorum(uint256)": FunctionFragment;
    "validateThreshold(uint256)": FunctionFragment;
    "validateTitle(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "queryAddressVotingBalanceAtBlock"
      | "queryTotalVotingBalanceAtBlock"
      | "utfStringLength"
      | "validateDescription"
      | "validateLink"
      | "validateQuorum"
      | "validateThreshold"
      | "validateTitle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "queryAddressVotingBalanceAtBlock",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queryTotalVotingBalanceAtBlock",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "utfStringLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateDescription",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateLink",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "validateQuorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validateTitle",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "queryAddressVotingBalanceAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryTotalVotingBalanceAtBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "utfStringLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateLink",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateQuorum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateTitle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SubDaoLib extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SubDaoLibInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    queryAddressVotingBalanceAtBlock(
      veAddr: string,
      targetAddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    queryTotalVotingBalanceAtBlock(
      veaddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    utfStringLength(
      str: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { length: BigNumber }>;

    validateDescription(
      description: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateLink(link: string, overrides?: CallOverrides): Promise<[boolean]>;

    validateQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateThreshold(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateTitle(title: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  queryAddressVotingBalanceAtBlock(
    veAddr: string,
    targetAddr: string,
    blocknumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  queryTotalVotingBalanceAtBlock(
    veaddr: string,
    blocknumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  utfStringLength(str: string, overrides?: CallOverrides): Promise<BigNumber>;

  validateDescription(
    description: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateLink(link: string, overrides?: CallOverrides): Promise<boolean>;

  validateQuorum(
    quorum: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateThreshold(
    threshold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateTitle(title: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    queryAddressVotingBalanceAtBlock(
      veAddr: string,
      targetAddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryTotalVotingBalanceAtBlock(
      veaddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    utfStringLength(str: string, overrides?: CallOverrides): Promise<BigNumber>;

    validateDescription(
      description: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateLink(link: string, overrides?: CallOverrides): Promise<boolean>;

    validateQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateThreshold(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateTitle(title: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    queryAddressVotingBalanceAtBlock(
      veAddr: string,
      targetAddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryTotalVotingBalanceAtBlock(
      veaddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    utfStringLength(str: string, overrides?: CallOverrides): Promise<BigNumber>;

    validateDescription(
      description: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateLink(link: string, overrides?: CallOverrides): Promise<BigNumber>;

    validateQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateThreshold(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateTitle(title: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    queryAddressVotingBalanceAtBlock(
      veAddr: string,
      targetAddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryTotalVotingBalanceAtBlock(
      veaddr: string,
      blocknumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    utfStringLength(
      str: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateDescription(
      description: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateLink(
      link: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateQuorum(
      quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateThreshold(
      threshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateTitle(
      title: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}