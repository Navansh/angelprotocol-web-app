/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace DonationMatchStorage {
  export type ConfigStruct = {
    reserveToken: string;
    uniswapFactory: string;
    usdcAddress: string;
    registrarContract: string;
    poolFee: BigNumberish;
  };

  export type ConfigStructOutput = [string, string, string, string, number] & {
    reserveToken: string;
    uniswapFactory: string;
    usdcAddress: string;
    registrarContract: string;
    poolFee: number;
  };
}

export interface DonationMatchEmitterInterface extends utils.Interface {
  functions: {
    "burnErc20(uint32,address,uint256)": FunctionFragment;
    "executeDonorMatch(address,uint256,address,uint32,address)": FunctionFragment;
    "giveApprovalErc20(uint32,address,address,uint256)": FunctionFragment;
    "initDonationMatchEmiiter(address)": FunctionFragment;
    "initializeDonationMatch(uint32,address,(address,address,address,address,uint24))": FunctionFragment;
    "isDonationMatch(address)": FunctionFragment;
    "transferErc20(uint32,address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnErc20"
      | "executeDonorMatch"
      | "giveApprovalErc20"
      | "initDonationMatchEmiiter"
      | "initializeDonationMatch"
      | "isDonationMatch"
      | "transferErc20"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnErc20",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeDonorMatch",
    values: [string, BigNumberish, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "giveApprovalErc20",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initDonationMatchEmiiter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeDonationMatch",
    values: [BigNumberish, string, DonationMatchStorage.ConfigStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "isDonationMatch",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferErc20",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "burnErc20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeDonorMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "giveApprovalErc20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initDonationMatchEmiiter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeDonationMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDonationMatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferErc20",
    data: BytesLike
  ): Result;

  events: {
    "Approval(uint32,address,address,uint256)": EventFragment;
    "Burn(uint32,address,uint256)": EventFragment;
    "DonationMatchExecuted(address,address,uint256,address,uint32,address)": EventFragment;
    "DonationMatchInitialized(uint32,address,(address,address,address,address,uint24))": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Transfer(uint32,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonationMatchExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DonationMatchInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  endowmentId: number;
  tokenAddress: string;
  spender: string;
  amount: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [number, string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface BurnEventObject {
  endowmentId: number;
  tokenAddress: string;
  amount: BigNumber;
}
export type BurnEvent = TypedEvent<
  [number, string, BigNumber],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface DonationMatchExecutedEventObject {
  donationMatch: string;
  tokenAddress: string;
  amount: BigNumber;
  accountsContract: string;
  endowmentId: number;
  donor: string;
}
export type DonationMatchExecutedEvent = TypedEvent<
  [string, string, BigNumber, string, number, string],
  DonationMatchExecutedEventObject
>;

export type DonationMatchExecutedEventFilter =
  TypedEventFilter<DonationMatchExecutedEvent>;

export interface DonationMatchInitializedEventObject {
  endowmentId: number;
  donationMatch: string;
  config: DonationMatchStorage.ConfigStructOutput;
}
export type DonationMatchInitializedEvent = TypedEvent<
  [number, string, DonationMatchStorage.ConfigStructOutput],
  DonationMatchInitializedEventObject
>;

export type DonationMatchInitializedEventFilter =
  TypedEventFilter<DonationMatchInitializedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface TransferEventObject {
  endowmentId: number;
  tokenAddress: string;
  recipient: string;
  amount: BigNumber;
}
export type TransferEvent = TypedEvent<
  [number, string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface DonationMatchEmitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DonationMatchEmitterInterface;

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
    burnErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeDonorMatch(
      tokenAddress: string,
      amount: BigNumberish,
      _accountsContract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    giveApprovalErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initDonationMatchEmiiter(
      _accountsContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    initializeDonationMatch(
      endowmentId: BigNumberish,
      donationMatch: string,
      config: DonationMatchStorage.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isDonationMatch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  burnErc20(
    endowmentId: BigNumberish,
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeDonorMatch(
    tokenAddress: string,
    amount: BigNumberish,
    _accountsContract: string,
    endowmentId: BigNumberish,
    donor: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  giveApprovalErc20(
    endowmentId: BigNumberish,
    tokenAddress: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initDonationMatchEmiiter(
    _accountsContract: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  initializeDonationMatch(
    endowmentId: BigNumberish,
    donationMatch: string,
    config: DonationMatchStorage.ConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isDonationMatch(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  transferErc20(
    endowmentId: BigNumberish,
    tokenAddress: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    burnErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeDonorMatch(
      tokenAddress: string,
      amount: BigNumberish,
      _accountsContract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    giveApprovalErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initDonationMatchEmiiter(
      _accountsContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeDonationMatch(
      endowmentId: BigNumberish,
      donationMatch: string,
      config: DonationMatchStorage.ConfigStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    isDonationMatch(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    transferErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(uint32,address,address,uint256)"(
      endowmentId?: null,
      tokenAddress?: null,
      spender?: null,
      amount?: null
    ): ApprovalEventFilter;
    Approval(
      endowmentId?: null,
      tokenAddress?: null,
      spender?: null,
      amount?: null
    ): ApprovalEventFilter;

    "Burn(uint32,address,uint256)"(
      endowmentId?: null,
      tokenAddress?: null,
      amount?: null
    ): BurnEventFilter;
    Burn(
      endowmentId?: null,
      tokenAddress?: null,
      amount?: null
    ): BurnEventFilter;

    "DonationMatchExecuted(address,address,uint256,address,uint32,address)"(
      donationMatch?: null,
      tokenAddress?: null,
      amount?: null,
      accountsContract?: null,
      endowmentId?: null,
      donor?: null
    ): DonationMatchExecutedEventFilter;
    DonationMatchExecuted(
      donationMatch?: null,
      tokenAddress?: null,
      amount?: null,
      accountsContract?: null,
      endowmentId?: null,
      donor?: null
    ): DonationMatchExecutedEventFilter;

    "DonationMatchInitialized(uint32,address,(address,address,address,address,uint24))"(
      endowmentId?: null,
      donationMatch?: null,
      config?: null
    ): DonationMatchInitializedEventFilter;
    DonationMatchInitialized(
      endowmentId?: null,
      donationMatch?: null,
      config?: null
    ): DonationMatchInitializedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Transfer(uint32,address,address,uint256)"(
      endowmentId?: null,
      tokenAddress?: null,
      recipient?: null,
      amount?: null
    ): TransferEventFilter;
    Transfer(
      endowmentId?: null,
      tokenAddress?: null,
      recipient?: null,
      amount?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    burnErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeDonorMatch(
      tokenAddress: string,
      amount: BigNumberish,
      _accountsContract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    giveApprovalErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initDonationMatchEmiiter(
      _accountsContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    initializeDonationMatch(
      endowmentId: BigNumberish,
      donationMatch: string,
      config: DonationMatchStorage.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isDonationMatch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeDonorMatch(
      tokenAddress: string,
      amount: BigNumberish,
      _accountsContract: string,
      endowmentId: BigNumberish,
      donor: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    giveApprovalErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initDonationMatchEmiiter(
      _accountsContract: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    initializeDonationMatch(
      endowmentId: BigNumberish,
      donationMatch: string,
      config: DonationMatchStorage.ConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isDonationMatch(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferErc20(
      endowmentId: BigNumberish,
      tokenAddress: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
