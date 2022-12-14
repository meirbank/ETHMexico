// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Process extends ethereum.Event {
  get params(): Process__Params {
    return new Process__Params(this);
  }
}

export class Process__Params {
  _event: Process;

  constructor(event: Process) {
    this._event = event;
  }

  get messageHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ValidatorManagerSet extends ethereum.Event {
  get params(): ValidatorManagerSet__Params {
    return new ValidatorManagerSet__Params(this);
  }
}

export class ValidatorManagerSet__Params {
  _event: ValidatorManagerSet;

  constructor(event: ValidatorManagerSet) {
    this._event = event;
  }

  get validatorManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpgradeBeaconProxy extends ethereum.SmartContract {
  static bind(address: Address): UpgradeBeaconProxy {
    return new UpgradeBeaconProxy("UpgradeBeaconProxy", address);
  }

  VERSION(): i32 {
    let result = super.call("VERSION", "VERSION():(uint8)", []);

    return result[0].toI32();
  }

  try_VERSION(): ethereum.CallResult<i32> {
    let result = super.tryCall("VERSION", "VERSION():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  localDomain(): BigInt {
    let result = super.call("localDomain", "localDomain():(uint32)", []);

    return result[0].toBigInt();
  }

  try_localDomain(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("localDomain", "localDomain():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  messages(param0: Bytes): i32 {
    let result = super.call("messages", "messages(bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toI32();
  }

  try_messages(param0: Bytes): ethereum.CallResult<i32> {
    let result = super.tryCall("messages", "messages(bytes32):(uint8)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  remoteDomain(): BigInt {
    let result = super.call("remoteDomain", "remoteDomain():(uint32)", []);

    return result[0].toBigInt();
  }

  try_remoteDomain(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("remoteDomain", "remoteDomain():(uint32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  validatorManager(): Address {
    let result = super.call(
      "validatorManager",
      "validatorManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_validatorManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "validatorManager",
      "validatorManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _localDomain(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _remoteDomain(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _validatorManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ProcessCall extends ethereum.Call {
  get inputs(): ProcessCall__Inputs {
    return new ProcessCall__Inputs(this);
  }

  get outputs(): ProcessCall__Outputs {
    return new ProcessCall__Outputs(this);
  }
}

export class ProcessCall__Inputs {
  _call: ProcessCall;

  constructor(call: ProcessCall) {
    this._call = call;
  }

  get _root(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _message(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _proof(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }

  get _leafIndex(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ProcessCall__Outputs {
  _call: ProcessCall;

  constructor(call: ProcessCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetValidatorManagerCall extends ethereum.Call {
  get inputs(): SetValidatorManagerCall__Inputs {
    return new SetValidatorManagerCall__Inputs(this);
  }

  get outputs(): SetValidatorManagerCall__Outputs {
    return new SetValidatorManagerCall__Outputs(this);
  }
}

export class SetValidatorManagerCall__Inputs {
  _call: SetValidatorManagerCall;

  constructor(call: SetValidatorManagerCall) {
    this._call = call;
  }

  get _validatorManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetValidatorManagerCall__Outputs {
  _call: SetValidatorManagerCall;

  constructor(call: SetValidatorManagerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
