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
} from "../../../common";

export interface IFluxInterface extends utils.Interface {
  functions: {
    "accrueInterest()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "balanceOfUnderlying(address)": FunctionFragment;
    "borrow(uint256)": FunctionFragment;
    "borrowBalanceCurrent(address)": FunctionFragment;
    "borrowBalanceStored(address)": FunctionFragment;
    "borrowRatePerBlock()": FunctionFragment;
    "exchangeRateCurrent()": FunctionFragment;
    "exchangeRateStored()": FunctionFragment;
    "getAccountSnapshot(address)": FunctionFragment;
    "getCash()": FunctionFragment;
    "mint(uint256)": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "redeemUnderlying(uint256)": FunctionFragment;
    "repayBorrow(uint256)": FunctionFragment;
    "repayBorrowBehalf(address,uint256)": FunctionFragment;
    "supplyRatePerBlock()": FunctionFragment;
    "totalBorrowsCurrent()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accrueInterest"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "balanceOfUnderlying"
      | "borrow"
      | "borrowBalanceCurrent"
      | "borrowBalanceStored"
      | "borrowRatePerBlock"
      | "exchangeRateCurrent"
      | "exchangeRateStored"
      | "getAccountSnapshot"
      | "getCash"
      | "mint"
      | "redeem"
      | "redeemUnderlying"
      | "repayBorrow"
      | "repayBorrowBehalf"
      | "supplyRatePerBlock"
      | "totalBorrowsCurrent"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accrueInterest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfUnderlying",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceCurrent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceStored",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeRateStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountSnapshot",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getCash", values?: undefined): string;
  encodeFunctionData(functionFragment: "mint", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemUnderlying",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrowBehalf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supplyRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowsCurrent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "accrueInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeRateStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrowBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supplyRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowsCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IFlux extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFluxInterface;

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
    accrueInterest(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeRateCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    exchangeRateStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getCash(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    repayBorrow(
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    repayBorrowBehalf(
      borrower: string,
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalBorrowsCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  accrueInterest(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfUnderlying(
    owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  borrow(
    borrowAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  borrowBalanceCurrent(
    account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  borrowBalanceStored(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeRateCurrent(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

  getAccountSnapshot(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  getCash(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    mintAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeem(
    redeemTokens: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeemUnderlying(
    redeemAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  repayBorrow(
    repayAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  repayBorrowBehalf(
    borrower: string,
    repayAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  totalBorrowsCurrent(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transfer(
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    src: string,
    dst: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    accrueInterest(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateCurrent(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    getCash(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayBorrow(
      repayAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayBorrowBehalf(
      borrower: string,
      repayAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrowsCurrent(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    accrueInterest(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeRateCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    exchangeRateStored(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCash(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    repayBorrow(
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    repayBorrowBehalf(
      borrower: string,
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    supplyRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    totalBorrowsCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accrueInterest(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfUnderlying(
      owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangeRateCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    exchangeRateStored(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      mintAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    repayBorrow(
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    repayBorrowBehalf(
      borrower: string,
      repayAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    supplyRatePerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowsCurrent(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transfer(
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      src: string,
      dst: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}