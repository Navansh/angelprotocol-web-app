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
  PromiseOrValue,
} from "../../../../common";

export declare namespace LibAccounts {
  export type FeeSettingStruct = {
    payoutAddress: PromiseOrValue<string>;
    bps: PromiseOrValue<BigNumberish>;
  };

  export type FeeSettingStructOutput = [string, BigNumber] & {
    payoutAddress: string;
    bps: BigNumber;
  };

  export type DelegateStruct = {
    addr: PromiseOrValue<string>;
    expires: PromiseOrValue<BigNumberish>;
  };

  export type DelegateStructOutput = [string, BigNumber] & {
    addr: string;
    expires: BigNumber;
  };

  export type SettingsPermissionStruct = {
    locked: PromiseOrValue<boolean>;
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
    max: PromiseOrValue<BigNumberish>;
    min: PromiseOrValue<BigNumberish>;
    defaultSplit: PromiseOrValue<BigNumberish>;
  };

  export type SplitDetailsStructOutput = [BigNumber, BigNumber, BigNumber] & {
    max: BigNumber;
    min: BigNumber;
    defaultSplit: BigNumber;
  };
}

export declare namespace AccountMessages {
  export type CreateEndowmentRequestStruct = {
    withdrawBeforeMaturity: PromiseOrValue<boolean>;
    maturityTime: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    sdgs: PromiseOrValue<BigNumberish>[];
    tier: PromiseOrValue<BigNumberish>;
    endowType: PromiseOrValue<BigNumberish>;
    logo: PromiseOrValue<string>;
    image: PromiseOrValue<string>;
    members: PromiseOrValue<string>[];
    threshold: PromiseOrValue<BigNumberish>;
    duration: PromiseOrValue<BigNumberish>;
    allowlistedBeneficiaries: PromiseOrValue<string>[];
    allowlistedContributors: PromiseOrValue<string>[];
    earlyLockedWithdrawFee: LibAccounts.FeeSettingStruct;
    withdrawFee: LibAccounts.FeeSettingStruct;
    depositFee: LibAccounts.FeeSettingStruct;
    balanceFee: LibAccounts.FeeSettingStruct;
    proposalLink: PromiseOrValue<BigNumberish>;
    settingsController: LibAccounts.SettingsControllerStruct;
    parent: PromiseOrValue<BigNumberish>;
    maturityAllowlist: PromiseOrValue<string>[];
    ignoreUserSplits: PromiseOrValue<boolean>;
    splitToLiquid: LibAccounts.SplitDetailsStruct;
    referralId: PromiseOrValue<BigNumberish>;
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

export interface IAccountsCreateEndowmentInterface extends utils.Interface {
  functions: {
    "createEndowment((bool,uint256,string,uint256[],uint8,uint8,string,string,address[],uint256,uint256,address[],address[],(address,uint256),(address,uint256),(address,uint256),(address,uint256),uint256,((bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256)),(bool,(address,uint256))),uint32,address[],bool,(uint256,uint256,uint256),uint256))": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "createEndowment"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createEndowment",
    values: [AccountMessages.CreateEndowmentRequestStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "createEndowment",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAccountsCreateEndowment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountsCreateEndowmentInterface;

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
    createEndowment(
      details: AccountMessages.CreateEndowmentRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  createEndowment(
    details: AccountMessages.CreateEndowmentRequestStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createEndowment(
      details: AccountMessages.CreateEndowmentRequestStruct,
      overrides?: CallOverrides
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    createEndowment(
      details: AccountMessages.CreateEndowmentRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createEndowment(
      details: AccountMessages.CreateEndowmentRequestStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
