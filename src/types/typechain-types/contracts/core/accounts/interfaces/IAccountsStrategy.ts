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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";

export declare namespace AccountMessages {
  export type InvestRequestStruct = {
    strategy: BytesLike;
    token: string;
    lockAmt: BigNumberish;
    liquidAmt: BigNumberish;
    gasFee: BigNumberish;
  };

  export type InvestRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    strategy: string;
    token: string;
    lockAmt: BigNumber;
    liquidAmt: BigNumber;
    gasFee: BigNumber;
  };

  export type RedeemRequestStruct = {
    strategy: BytesLike;
    token: string;
    lockAmt: BigNumberish;
    liquidAmt: BigNumberish;
    gasFee: BigNumberish;
  };

  export type RedeemRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    strategy: string;
    token: string;
    lockAmt: BigNumber;
    liquidAmt: BigNumber;
    gasFee: BigNumber;
  };

  export type RedeemAllRequestStruct = {
    strategy: BytesLike;
    token: string;
    redeemLocked: boolean;
    redeemLiquid: boolean;
    gasFee: BigNumberish;
  };

  export type RedeemAllRequestStructOutput = [
    string,
    string,
    boolean,
    boolean,
    BigNumber
  ] & {
    strategy: string;
    token: string;
    redeemLocked: boolean;
    redeemLiquid: boolean;
    gasFee: BigNumber;
  };
}

export interface IAccountsStrategyInterface extends utils.Interface {
  functions: {
    "strategyInvest(uint32,(bytes4,string,uint256,uint256,uint256))": FunctionFragment;
    "strategyRedeem(uint32,(bytes4,string,uint256,uint256,uint256))": FunctionFragment;
    "strategyRedeemAll(uint32,(bytes4,string,bool,bool,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "strategyInvest"
      | "strategyRedeem"
      | "strategyRedeemAll"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "strategyInvest",
    values: [BigNumberish, AccountMessages.InvestRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyRedeem",
    values: [BigNumberish, AccountMessages.RedeemRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyRedeemAll",
    values: [BigNumberish, AccountMessages.RedeemAllRequestStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "strategyInvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyRedeemAll",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAccountsStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountsStrategyInterface;

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
    strategyInvest(
      id: BigNumberish,
      investRequest: AccountMessages.InvestRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    strategyRedeem(
      id: BigNumberish,
      redeemRequest: AccountMessages.RedeemRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    strategyRedeemAll(
      id: BigNumberish,
      redeemAllRequest: AccountMessages.RedeemAllRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  strategyInvest(
    id: BigNumberish,
    investRequest: AccountMessages.InvestRequestStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  strategyRedeem(
    id: BigNumberish,
    redeemRequest: AccountMessages.RedeemRequestStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  strategyRedeemAll(
    id: BigNumberish,
    redeemAllRequest: AccountMessages.RedeemAllRequestStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    strategyInvest(
      id: BigNumberish,
      investRequest: AccountMessages.InvestRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    strategyRedeem(
      id: BigNumberish,
      redeemRequest: AccountMessages.RedeemRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    strategyRedeemAll(
      id: BigNumberish,
      redeemAllRequest: AccountMessages.RedeemAllRequestStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    strategyInvest(
      id: BigNumberish,
      investRequest: AccountMessages.InvestRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    strategyRedeem(
      id: BigNumberish,
      redeemRequest: AccountMessages.RedeemRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    strategyRedeemAll(
      id: BigNumberish,
      redeemAllRequest: AccountMessages.RedeemAllRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    strategyInvest(
      id: BigNumberish,
      investRequest: AccountMessages.InvestRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    strategyRedeem(
      id: BigNumberish,
      redeemRequest: AccountMessages.RedeemRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    strategyRedeemAll(
      id: BigNumberish,
      redeemAllRequest: AccountMessages.RedeemAllRequestStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}