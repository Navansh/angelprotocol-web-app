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

export declare namespace LibAccounts {
  export type FeeSettingStruct = { payoutAddress: string; bps: BigNumberish };

  export type FeeSettingStructOutput = [string, BigNumber] & {
    payoutAddress: string;
    bps: BigNumber;
  };

  export type DelegateStruct = { addr: string; expires: BigNumberish };

  export type DelegateStructOutput = [string, BigNumber] & {
    addr: string;
    expires: BigNumber;
  };

  export type SettingsPermissionStruct = {
    locked: boolean;
    delegate: LibAccounts.DelegateStruct;
  };

  export type SettingsPermissionStructOutput = [
    boolean,
    LibAccounts.DelegateStructOutput
  ] & { locked: boolean; delegate: LibAccounts.DelegateStructOutput };

  export type SettingsControllerStruct = {
    acceptedTokens: LibAccounts.SettingsPermissionStruct;
    lockedInvestmentManagement: LibAccounts.SettingsPermissionStruct;
    liquidInvestmentManagement: LibAccounts.SettingsPermissionStruct;
    allowlistedBeneficiaries: LibAccounts.SettingsPermissionStruct;
    allowlistedContributors: LibAccounts.SettingsPermissionStruct;
    maturityAllowlist: LibAccounts.SettingsPermissionStruct;
    maturityTime: LibAccounts.SettingsPermissionStruct;
    earlyLockedWithdrawFee: LibAccounts.SettingsPermissionStruct;
    withdrawFee: LibAccounts.SettingsPermissionStruct;
    depositFee: LibAccounts.SettingsPermissionStruct;
    balanceFee: LibAccounts.SettingsPermissionStruct;
    name: LibAccounts.SettingsPermissionStruct;
    image: LibAccounts.SettingsPermissionStruct;
    logo: LibAccounts.SettingsPermissionStruct;
    sdgs: LibAccounts.SettingsPermissionStruct;
    splitToLiquid: LibAccounts.SettingsPermissionStruct;
    ignoreUserSplits: LibAccounts.SettingsPermissionStruct;
  };

  export type SettingsControllerStructOutput = [
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput,
    LibAccounts.SettingsPermissionStructOutput
  ] & {
    acceptedTokens: LibAccounts.SettingsPermissionStructOutput;
    lockedInvestmentManagement: LibAccounts.SettingsPermissionStructOutput;
    liquidInvestmentManagement: LibAccounts.SettingsPermissionStructOutput;
    allowlistedBeneficiaries: LibAccounts.SettingsPermissionStructOutput;
    allowlistedContributors: LibAccounts.SettingsPermissionStructOutput;
    maturityAllowlist: LibAccounts.SettingsPermissionStructOutput;
    maturityTime: LibAccounts.SettingsPermissionStructOutput;
    earlyLockedWithdrawFee: LibAccounts.SettingsPermissionStructOutput;
    withdrawFee: LibAccounts.SettingsPermissionStructOutput;
    depositFee: LibAccounts.SettingsPermissionStructOutput;
    balanceFee: LibAccounts.SettingsPermissionStructOutput;
    name: LibAccounts.SettingsPermissionStructOutput;
    image: LibAccounts.SettingsPermissionStructOutput;
    logo: LibAccounts.SettingsPermissionStructOutput;
    sdgs: LibAccounts.SettingsPermissionStructOutput;
    splitToLiquid: LibAccounts.SettingsPermissionStructOutput;
    ignoreUserSplits: LibAccounts.SettingsPermissionStructOutput;
  };

  export type SplitDetailsStruct = {
    max: BigNumberish;
    min: BigNumberish;
    defaultSplit: BigNumberish;
  };

  export type SplitDetailsStructOutput = [BigNumber, BigNumber, BigNumber] & {
    max: BigNumber;
    min: BigNumber;
    defaultSplit: BigNumber;
  };
}

export declare namespace AccountMessages {
  export type CreateEndowmentRequestStruct = {
    withdrawBeforeMaturity: boolean;
    maturityTime: BigNumberish;
    name: string;
    sdgs: BigNumberish[];
    tier: BigNumberish;
    endowType: BigNumberish;
    logo: string;
    image: string;
    members: string[];
    threshold: BigNumberish;
    duration: BigNumberish;
    allowlistedBeneficiaries: string[];
    allowlistedContributors: string[];
    earlyLockedWithdrawFee: LibAccounts.FeeSettingStruct;
    withdrawFee: LibAccounts.FeeSettingStruct;
    depositFee: LibAccounts.FeeSettingStruct;
    balanceFee: LibAccounts.FeeSettingStruct;
    proposalLink: BigNumberish;
    settingsController: LibAccounts.SettingsControllerStruct;
    parent: BigNumberish;
    maturityAllowlist: string[];
    ignoreUserSplits: boolean;
    splitToLiquid: LibAccounts.SplitDetailsStruct;
    referralId: BigNumberish;
  };

  export type CreateEndowmentRequestStructOutput = [
    boolean,
    BigNumber,
    string,
    BigNumber[],
    number,
    number,
    string,
    string,
    string[],
    BigNumber,
    BigNumber,
    string[],
    string[],
    LibAccounts.FeeSettingStructOutput,
    LibAccounts.FeeSettingStructOutput,
    LibAccounts.FeeSettingStructOutput,
    LibAccounts.FeeSettingStructOutput,
    BigNumber,
    LibAccounts.SettingsControllerStructOutput,
    number,
    string[],
    boolean,
    LibAccounts.SplitDetailsStructOutput,
    BigNumber
  ] & {
    withdrawBeforeMaturity: boolean;
    maturityTime: BigNumber;
    name: string;
    sdgs: BigNumber[];
    tier: number;
    endowType: number;
    logo: string;
    image: string;
    members: string[];
    threshold: BigNumber;
    duration: BigNumber;
    allowlistedBeneficiaries: string[];
    allowlistedContributors: string[];
    earlyLockedWithdrawFee: LibAccounts.FeeSettingStructOutput;
    withdrawFee: LibAccounts.FeeSettingStructOutput;
    depositFee: LibAccounts.FeeSettingStructOutput;
    balanceFee: LibAccounts.FeeSettingStructOutput;
    proposalLink: BigNumber;
    settingsController: LibAccounts.SettingsControllerStructOutput;
    parent: number;
    maturityAllowlist: string[];
    ignoreUserSplits: boolean;
    splitToLiquid: LibAccounts.SplitDetailsStructOutput;
    referralId: BigNumber;
  };
}

export interface StorageApplicationsInterface extends utils.Interface {
  functions: {
    "config()": FunctionFragment;
    "proposalConfirmations(uint256)": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "config" | "proposalConfirmations" | "proposals"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "config", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalConfirmations",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "config", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalConfirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;

  events: {};
}

export interface StorageApplications extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StorageApplicationsInterface;

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
    config(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string, BigNumber] & {
        accountsContract: string;
        seedSplitToLiquid: BigNumber;
        gasAmount: BigNumber;
        seedAsset: string;
        seedAmount: BigNumber;
      }
    >;

    proposalConfirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        AccountMessages.CreateEndowmentRequestStructOutput,
        string,
        BigNumber,
        boolean
      ] & {
        proposer: string;
        application: AccountMessages.CreateEndowmentRequestStructOutput;
        metadata: string;
        expiry: BigNumber;
        executed: boolean;
      }
    >;
  };

  config(
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, string, BigNumber] & {
      accountsContract: string;
      seedSplitToLiquid: BigNumber;
      gasAmount: BigNumber;
      seedAsset: string;
      seedAmount: BigNumber;
    }
  >;

  proposalConfirmations(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      AccountMessages.CreateEndowmentRequestStructOutput,
      string,
      BigNumber,
      boolean
    ] & {
      proposer: string;
      application: AccountMessages.CreateEndowmentRequestStructOutput;
      metadata: string;
      expiry: BigNumber;
      executed: boolean;
    }
  >;

  callStatic: {
    config(
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, string, BigNumber] & {
        accountsContract: string;
        seedSplitToLiquid: BigNumber;
        gasAmount: BigNumber;
        seedAsset: string;
        seedAmount: BigNumber;
      }
    >;

    proposalConfirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        AccountMessages.CreateEndowmentRequestStructOutput,
        string,
        BigNumber,
        boolean
      ] & {
        proposer: string;
        application: AccountMessages.CreateEndowmentRequestStructOutput;
        metadata: string;
        expiry: BigNumber;
        executed: boolean;
      }
    >;
  };

  filters: {};

  estimateGas: {
    config(overrides?: CallOverrides): Promise<BigNumber>;

    proposalConfirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    config(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalConfirmations(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
