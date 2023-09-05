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

export interface IEndowmentMultiSigEmitterInterface extends utils.Interface {
  functions: {
    "approvalsRequirementChangedEndowment(uint256,uint256)": FunctionFragment;
    "createEndowmentMultisig(address,uint256,address,address[],uint256,bool,uint256)": FunctionFragment;
    "expiryChangedEndowment(uint256,uint256)": FunctionFragment;
    "ownerReplacedEndowment(uint256,address,address)": FunctionFragment;
    "ownersAddedEndowment(uint256,address[])": FunctionFragment;
    "ownersRemovedEndowment(uint256,address[])": FunctionFragment;
    "requireExecutionChangedEndowment(uint256,bool)": FunctionFragment;
    "transactionConfirmationRevokedEndowment(uint256,address,uint256)": FunctionFragment;
    "transactionConfirmedEndowment(uint256,address,uint256)": FunctionFragment;
    "transactionExecutedEndowment(uint256,uint256)": FunctionFragment;
    "transactionSubmittedEndowment(uint256,address,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approvalsRequirementChangedEndowment"
      | "createEndowmentMultisig"
      | "expiryChangedEndowment"
      | "ownerReplacedEndowment"
      | "ownersAddedEndowment"
      | "ownersRemovedEndowment"
      | "requireExecutionChangedEndowment"
      | "transactionConfirmationRevokedEndowment"
      | "transactionConfirmedEndowment"
      | "transactionExecutedEndowment"
      | "transactionSubmittedEndowment"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approvalsRequirementChangedEndowment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createEndowmentMultisig",
    values: [
      string,
      BigNumberish,
      string,
      string[],
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "expiryChangedEndowment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerReplacedEndowment",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ownersAddedEndowment",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "ownersRemovedEndowment",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requireExecutionChangedEndowment",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionConfirmationRevokedEndowment",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionConfirmedEndowment",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionExecutedEndowment",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transactionSubmittedEndowment",
    values: [BigNumberish, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "approvalsRequirementChangedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEndowmentMultisig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expiryChangedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerReplacedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownersAddedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownersRemovedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requireExecutionChangedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionConfirmationRevokedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionConfirmedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionExecutedEndowment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactionSubmittedEndowment",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IEndowmentMultiSigEmitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IEndowmentMultiSigEmitterInterface;

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
    approvalsRequirementChangedEndowment(
      endowmentId: BigNumberish,
      approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createEndowmentMultisig(
      multisigAddress: string,
      endowmentId: BigNumberish,
      emitter: string,
      owners: string[],
      required: BigNumberish,
      requireExecution: boolean,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    expiryChangedEndowment(
      endowmentId: BigNumberish,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ownerReplacedEndowment(
      endowmentId: BigNumberish,
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ownersAddedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    ownersRemovedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requireExecutionChangedEndowment(
      endowmentId: BigNumberish,
      requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transactionConfirmationRevokedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transactionConfirmedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transactionExecutedEndowment(
      endowmentId: BigNumberish,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transactionSubmittedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  approvalsRequirementChangedEndowment(
    endowmentId: BigNumberish,
    approvalsRequired: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createEndowmentMultisig(
    multisigAddress: string,
    endowmentId: BigNumberish,
    emitter: string,
    owners: string[],
    required: BigNumberish,
    requireExecution: boolean,
    transactionExpiry: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  expiryChangedEndowment(
    endowmentId: BigNumberish,
    transactionExpiry: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ownerReplacedEndowment(
    endowmentId: BigNumberish,
    currOwner: string,
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ownersAddedEndowment(
    endowmentId: BigNumberish,
    owners: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  ownersRemovedEndowment(
    endowmentId: BigNumberish,
    owners: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requireExecutionChangedEndowment(
    endowmentId: BigNumberish,
    requireExecution: boolean,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transactionConfirmationRevokedEndowment(
    endowmentId: BigNumberish,
    owner: string,
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transactionConfirmedEndowment(
    endowmentId: BigNumberish,
    owner: string,
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transactionExecutedEndowment(
    endowmentId: BigNumberish,
    transactionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transactionSubmittedEndowment(
    endowmentId: BigNumberish,
    owner: string,
    transactionId: BigNumberish,
    metadata: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    approvalsRequirementChangedEndowment(
      endowmentId: BigNumberish,
      approvalsRequired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createEndowmentMultisig(
      multisigAddress: string,
      endowmentId: BigNumberish,
      emitter: string,
      owners: string[],
      required: BigNumberish,
      requireExecution: boolean,
      transactionExpiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    expiryChangedEndowment(
      endowmentId: BigNumberish,
      transactionExpiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerReplacedEndowment(
      endowmentId: BigNumberish,
      currOwner: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ownersAddedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    ownersRemovedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    requireExecutionChangedEndowment(
      endowmentId: BigNumberish,
      requireExecution: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transactionConfirmationRevokedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transactionConfirmedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transactionExecutedEndowment(
      endowmentId: BigNumberish,
      transactionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transactionSubmittedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      metadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approvalsRequirementChangedEndowment(
      endowmentId: BigNumberish,
      approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createEndowmentMultisig(
      multisigAddress: string,
      endowmentId: BigNumberish,
      emitter: string,
      owners: string[],
      required: BigNumberish,
      requireExecution: boolean,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    expiryChangedEndowment(
      endowmentId: BigNumberish,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    ownerReplacedEndowment(
      endowmentId: BigNumberish,
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    ownersAddedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    ownersRemovedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requireExecutionChangedEndowment(
      endowmentId: BigNumberish,
      requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transactionConfirmationRevokedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transactionConfirmedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transactionExecutedEndowment(
      endowmentId: BigNumberish,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transactionSubmittedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approvalsRequirementChangedEndowment(
      endowmentId: BigNumberish,
      approvalsRequired: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createEndowmentMultisig(
      multisigAddress: string,
      endowmentId: BigNumberish,
      emitter: string,
      owners: string[],
      required: BigNumberish,
      requireExecution: boolean,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    expiryChangedEndowment(
      endowmentId: BigNumberish,
      transactionExpiry: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ownerReplacedEndowment(
      endowmentId: BigNumberish,
      currOwner: string,
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ownersAddedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    ownersRemovedEndowment(
      endowmentId: BigNumberish,
      owners: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requireExecutionChangedEndowment(
      endowmentId: BigNumberish,
      requireExecution: boolean,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transactionConfirmationRevokedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transactionConfirmedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transactionExecutedEndowment(
      endowmentId: BigNumberish,
      transactionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transactionSubmittedEndowment(
      endowmentId: BigNumberish,
      owner: string,
      transactionId: BigNumberish,
      metadata: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}