import { Cell, Slice, Address, Builder, beginCell, ComputeError, TupleItem, TupleReader, Dictionary, contractAddress, ContractProvider, Sender, Contract, ContractABI } from 'ton-core';
import { ContractSystem, ContractExecutor } from 'ton-emulator';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeRef(src.code);
        b_0 = b_0.storeRef(src.data);
    };
}

export function packStackStateInit(src: StateInit, __stack: TupleItem[]) {
    __stack.push({ type: 'cell', cell: src.code });
    __stack.push({ type: 'cell', cell: src.data });
}

export function packTupleStateInit(src: StateInit): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'cell', cell: src.code });
    __stack.push({ type: 'cell', cell: src.data });
    return __stack;
}

export function unpackStackStateInit(slice: TupleReader): StateInit {
    const code = slice.readCell();
    const data = slice.readCell();
    return { $$type: 'StateInit', code: code, data: data };
}
export function unpackTupleStateInit(slice: TupleReader): StateInit {
    const code = slice.readCell();
    const data = slice.readCell();
    return { $$type: 'StateInit', code: code, data: data };
}
export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeBit(src.bounced);
        b_0 = b_0.storeAddress(src.sender);
        b_0 = b_0.storeInt(src.value, 257);
        b_0 = b_0.storeRef(src.raw);
    };
}

export function packStackContext(src: Context, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.bounced ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.sender).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'slice', cell: src.raw });
}

export function packTupleContext(src: Context): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.bounced ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.sender).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'slice', cell: src.raw });
    return __stack;
}

export function unpackStackContext(slice: TupleReader): Context {
    const bounced = slice.readBoolean();
    const sender = slice.readAddress();
    const value = slice.readBigNumber();
    const raw = slice.readCell();
    return { $$type: 'Context', bounced: bounced, sender: sender, value: value, raw: raw };
}
export function unpackTupleContext(slice: TupleReader): Context {
    const bounced = slice.readBoolean();
    const sender = slice.readAddress();
    const value = slice.readBigNumber();
    const raw = slice.readCell();
    return { $$type: 'Context', bounced: bounced, sender: sender, value: value, raw: raw };
}
export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeBit(src.bounce);
        b_0 = b_0.storeAddress(src.to);
        b_0 = b_0.storeInt(src.value, 257);
        b_0 = b_0.storeInt(src.mode, 257);
        if (src.body !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.body);
        } else {
            b_0 = b_0.storeBit(false);
        }
        if (src.code !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.code);
        } else {
            b_0 = b_0.storeBit(false);
        }
        if (src.data !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.data);
        } else {
            b_0 = b_0.storeBit(false);
        }
    };
}

export function packStackSendParameters(src: SendParameters, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.bounce ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'int', value: src.mode });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.code !== null) {
        __stack.push({ type: 'cell', cell: src.code });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.data !== null) {
        __stack.push({ type: 'cell', cell: src.data });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleSendParameters(src: SendParameters): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.bounce ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.to).endCell() });
    __stack.push({ type: 'int', value: src.value });
    __stack.push({ type: 'int', value: src.mode });
    if (src.body !== null) {
        __stack.push({ type: 'cell', cell: src.body });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.code !== null) {
        __stack.push({ type: 'cell', cell: src.code });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.data !== null) {
        __stack.push({ type: 'cell', cell: src.data });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackSendParameters(slice: TupleReader): SendParameters {
    const bounce = slice.readBoolean();
    const to = slice.readAddress();
    const value = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const body = slice.readCellOpt();
    const code = slice.readCellOpt();
    const data = slice.readCellOpt();
    return { $$type: 'SendParameters', bounce: bounce, to: to, value: value, mode: mode, body: body, code: code, data: data };
}
export function unpackTupleSendParameters(slice: TupleReader): SendParameters {
    const bounce = slice.readBoolean();
    const to = slice.readAddress();
    const value = slice.readBigNumber();
    const mode = slice.readBigNumber();
    const body = slice.readCellOpt();
    const code = slice.readCellOpt();
    const data = slice.readCellOpt();
    return { $$type: 'SendParameters', bounce: bounce, to: to, value: value, mode: mode, body: body, code: code, data: data };
}
export type ChangeOwner = {
    $$type: 'ChangeOwner';
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(3067051791, 32);
        b_0 = b_0.storeAddress(src.newOwner);
    };
}

export function packStackChangeOwner(src: ChangeOwner, __stack: TupleItem[]) {
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.newOwner).endCell() });
}

export function packTupleChangeOwner(src: ChangeOwner): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.newOwner).endCell() });
    return __stack;
}

export function unpackStackChangeOwner(slice: TupleReader): ChangeOwner {
    const newOwner = slice.readAddress();
    return { $$type: 'ChangeOwner', newOwner: newOwner };
}
export function unpackTupleChangeOwner(slice: TupleReader): ChangeOwner {
    const newOwner = slice.readAddress();
    return { $$type: 'ChangeOwner', newOwner: newOwner };
}
export type TokenTransfer = {
    $$type: 'TokenTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Cell;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(260734629, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
        b_0 = b_0.storeCoins(src.amount);
        b_0 = b_0.storeAddress(src.destination);
        b_0 = b_0.storeAddress(src.responseDestination);
        if (src.customPayload !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.customPayload);
        } else {
            b_0 = b_0.storeBit(false);
        }
        b_0 = b_0.storeCoins(src.forwardTonAmount);
        b_0 = b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function packStackTokenTransfer(src: TokenTransfer, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.destination).endCell() });
    if (src.responseDestination !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseDestination).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.customPayload !== null) {
        __stack.push({ type: 'cell', cell: src.customPayload });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'int', value: src.forwardTonAmount });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
}

export function packTupleTokenTransfer(src: TokenTransfer): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.destination).endCell() });
    if (src.responseDestination !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseDestination).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    if (src.customPayload !== null) {
        __stack.push({ type: 'cell', cell: src.customPayload });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'int', value: src.forwardTonAmount });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
    return __stack;
}

export function unpackStackTokenTransfer(slice: TupleReader): TokenTransfer {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const destination = slice.readAddress();
    const responseDestination = slice.readAddressOpt();
    const customPayload = slice.readCellOpt();
    const forwardTonAmount = slice.readBigNumber();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenTransfer', queryId: queryId, amount: amount, destination: destination, responseDestination: responseDestination, customPayload: customPayload, forwardTonAmount: forwardTonAmount, forwardPayload: forwardPayload };
}
export function unpackTupleTokenTransfer(slice: TupleReader): TokenTransfer {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const destination = slice.readAddress();
    const responseDestination = slice.readAddressOpt();
    const customPayload = slice.readCellOpt();
    const forwardTonAmount = slice.readBigNumber();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenTransfer', queryId: queryId, amount: amount, destination: destination, responseDestination: responseDestination, customPayload: customPayload, forwardTonAmount: forwardTonAmount, forwardPayload: forwardPayload };
}
export type TokenTransferInternal = {
    $$type: 'TokenTransferInternal';
    queryId: bigint;
    amount: bigint;
    from: Address;
    responseAddress: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Cell;
}

export function storeTokenTransferInternal(src: TokenTransferInternal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(395134233, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
        b_0 = b_0.storeCoins(src.amount);
        b_0 = b_0.storeAddress(src.from);
        b_0 = b_0.storeAddress(src.responseAddress);
        b_0 = b_0.storeCoins(src.forwardTonAmount);
        b_0 = b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function packStackTokenTransferInternal(src: TokenTransferInternal, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.from).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'int', value: src.forwardTonAmount });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
}

export function packTupleTokenTransferInternal(src: TokenTransferInternal): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.from).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'int', value: src.forwardTonAmount });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
    return __stack;
}

export function unpackStackTokenTransferInternal(slice: TupleReader): TokenTransferInternal {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const from = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    const forwardTonAmount = slice.readBigNumber();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenTransferInternal', queryId: queryId, amount: amount, from: from, responseAddress: responseAddress, forwardTonAmount: forwardTonAmount, forwardPayload: forwardPayload };
}
export function unpackTupleTokenTransferInternal(slice: TupleReader): TokenTransferInternal {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const from = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    const forwardTonAmount = slice.readBigNumber();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenTransferInternal', queryId: queryId, amount: amount, from: from, responseAddress: responseAddress, forwardTonAmount: forwardTonAmount, forwardPayload: forwardPayload };
}
export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    from: Address;
    forwardPayload: Cell;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(1935855772, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
        b_0 = b_0.storeCoins(src.amount);
        b_0 = b_0.storeAddress(src.from);
        b_0 = b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function packStackTokenNotification(src: TokenNotification, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.from).endCell() });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
}

export function packTupleTokenNotification(src: TokenNotification): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.from).endCell() });
    __stack.push({ type: 'slice', cell: src.forwardPayload });
    return __stack;
}

export function unpackStackTokenNotification(slice: TupleReader): TokenNotification {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const from = slice.readAddress();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenNotification', queryId: queryId, amount: amount, from: from, forwardPayload: forwardPayload };
}
export function unpackTupleTokenNotification(slice: TupleReader): TokenNotification {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const from = slice.readAddress();
    const forwardPayload = slice.readCell();
    return { $$type: 'TokenNotification', queryId: queryId, amount: amount, from: from, forwardPayload: forwardPayload };
}
export type TokenBurn = {
    $$type: 'TokenBurn';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    responseAddress: Address | null;
}

export function storeTokenBurn(src: TokenBurn) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(1499400124, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
        b_0 = b_0.storeCoins(src.amount);
        b_0 = b_0.storeAddress(src.owner);
        b_0 = b_0.storeAddress(src.responseAddress);
    };
}

export function packStackTokenBurn(src: TokenBurn, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleTokenBurn(src: TokenBurn): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackTokenBurn(slice: TupleReader): TokenBurn {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const owner = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    return { $$type: 'TokenBurn', queryId: queryId, amount: amount, owner: owner, responseAddress: responseAddress };
}
export function unpackTupleTokenBurn(slice: TupleReader): TokenBurn {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const owner = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    return { $$type: 'TokenBurn', queryId: queryId, amount: amount, owner: owner, responseAddress: responseAddress };
}
export type TokenBurnNotification = {
    $$type: 'TokenBurnNotification';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    responseAddress: Address | null;
}

export function storeTokenBurnNotification(src: TokenBurnNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(2078119902, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
        b_0 = b_0.storeCoins(src.amount);
        b_0 = b_0.storeAddress(src.owner);
        b_0 = b_0.storeAddress(src.responseAddress);
    };
}

export function packStackTokenBurnNotification(src: TokenBurnNotification, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleTokenBurnNotification(src: TokenBurnNotification): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    __stack.push({ type: 'int', value: src.amount });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.responseAddress !== null) {
        __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.responseAddress).endCell() });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackTokenBurnNotification(slice: TupleReader): TokenBurnNotification {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const owner = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    return { $$type: 'TokenBurnNotification', queryId: queryId, amount: amount, owner: owner, responseAddress: responseAddress };
}
export function unpackTupleTokenBurnNotification(slice: TupleReader): TokenBurnNotification {
    const queryId = slice.readBigNumber();
    const amount = slice.readBigNumber();
    const owner = slice.readAddress();
    const responseAddress = slice.readAddressOpt();
    return { $$type: 'TokenBurnNotification', queryId: queryId, amount: amount, owner: owner, responseAddress: responseAddress };
}
export type TokenExcesses = {
    $$type: 'TokenExcesses';
    queryId: bigint;
}

export function storeTokenExcesses(src: TokenExcesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(3576854235, 32);
        b_0 = b_0.storeUint(src.queryId, 64);
    };
}

export function packStackTokenExcesses(src: TokenExcesses, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.queryId });
}

export function packTupleTokenExcesses(src: TokenExcesses): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.queryId });
    return __stack;
}

export function unpackStackTokenExcesses(slice: TupleReader): TokenExcesses {
    const queryId = slice.readBigNumber();
    return { $$type: 'TokenExcesses', queryId: queryId };
}
export function unpackTupleTokenExcesses(slice: TupleReader): TokenExcesses {
    const queryId = slice.readBigNumber();
    return { $$type: 'TokenExcesses', queryId: queryId };
}
export type TokenUpdateContent = {
    $$type: 'TokenUpdateContent';
    content: Cell | null;
}

export function storeTokenUpdateContent(src: TokenUpdateContent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(1862840892, 32);
        if (src.content !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.content);
        } else {
            b_0 = b_0.storeBit(false);
        }
    };
}

export function packStackTokenUpdateContent(src: TokenUpdateContent, __stack: TupleItem[]) {
    if (src.content !== null) {
        __stack.push({ type: 'cell', cell: src.content });
    } else {
        __stack.push({ type: 'null' });
    }
}

export function packTupleTokenUpdateContent(src: TokenUpdateContent): TupleItem[] {
    let __stack: TupleItem[] = [];
    if (src.content !== null) {
        __stack.push({ type: 'cell', cell: src.content });
    } else {
        __stack.push({ type: 'null' });
    }
    return __stack;
}

export function unpackStackTokenUpdateContent(slice: TupleReader): TokenUpdateContent {
    const content = slice.readCellOpt();
    return { $$type: 'TokenUpdateContent', content: content };
}
export function unpackTupleTokenUpdateContent(slice: TupleReader): TokenUpdateContent {
    const content = slice.readCellOpt();
    return { $$type: 'TokenUpdateContent', content: content };
}
export type JettonData = {
    $$type: 'JettonData';
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell | null;
    walletCode: Cell;
}

export function storeJettonData(src: JettonData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeInt(src.totalSupply, 257);
        b_0 = b_0.storeBit(src.mintable);
        b_0 = b_0.storeAddress(src.owner);
        if (src.content !== null) {
            b_0 = b_0.storeBit(true);
            b_0 = b_0.storeRef(src.content);
        } else {
            b_0 = b_0.storeBit(false);
        }
        b_0 = b_0.storeRef(src.walletCode);
    };
}

export function packStackJettonData(src: JettonData, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.totalSupply });
    __stack.push({ type: 'int', value: src.mintable ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.content !== null) {
        __stack.push({ type: 'cell', cell: src.content });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'cell', cell: src.walletCode });
}

export function packTupleJettonData(src: JettonData): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.totalSupply });
    __stack.push({ type: 'int', value: src.mintable ? -1n : 0n });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    if (src.content !== null) {
        __stack.push({ type: 'cell', cell: src.content });
    } else {
        __stack.push({ type: 'null' });
    }
    __stack.push({ type: 'cell', cell: src.walletCode });
    return __stack;
}

export function unpackStackJettonData(slice: TupleReader): JettonData {
    const totalSupply = slice.readBigNumber();
    const mintable = slice.readBoolean();
    const owner = slice.readAddress();
    const content = slice.readCellOpt();
    const walletCode = slice.readCell();
    return { $$type: 'JettonData', totalSupply: totalSupply, mintable: mintable, owner: owner, content: content, walletCode: walletCode };
}
export function unpackTupleJettonData(slice: TupleReader): JettonData {
    const totalSupply = slice.readBigNumber();
    const mintable = slice.readBoolean();
    const owner = slice.readAddress();
    const content = slice.readCellOpt();
    const walletCode = slice.readCell();
    return { $$type: 'JettonData', totalSupply: totalSupply, mintable: mintable, owner: owner, content: content, walletCode: walletCode };
}
export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    master: Address;
    walletCode: Cell;
}

export function storeJettonWalletData(src: JettonWalletData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeInt(src.balance, 257);
        b_0 = b_0.storeAddress(src.owner);
        b_0 = b_0.storeAddress(src.master);
        b_0 = b_0.storeRef(src.walletCode);
    };
}

export function packStackJettonWalletData(src: JettonWalletData, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.balance });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.master).endCell() });
    __stack.push({ type: 'cell', cell: src.walletCode });
}

export function packTupleJettonWalletData(src: JettonWalletData): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.balance });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.owner).endCell() });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(src.master).endCell() });
    __stack.push({ type: 'cell', cell: src.walletCode });
    return __stack;
}

export function unpackStackJettonWalletData(slice: TupleReader): JettonWalletData {
    const balance = slice.readBigNumber();
    const owner = slice.readAddress();
    const master = slice.readAddress();
    const walletCode = slice.readCell();
    return { $$type: 'JettonWalletData', balance: balance, owner: owner, master: master, walletCode: walletCode };
}
export function unpackTupleJettonWalletData(slice: TupleReader): JettonWalletData {
    const balance = slice.readBigNumber();
    const owner = slice.readAddress();
    const master = slice.readAddress();
    const walletCode = slice.readCell();
    return { $$type: 'JettonWalletData', balance: balance, owner: owner, master: master, walletCode: walletCode };
}
export type Mint = {
    $$type: 'Mint';
    amount: bigint;
}

export function storeMint(src: Mint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0 = b_0.storeUint(2737462367, 32);
        b_0 = b_0.storeInt(src.amount, 257);
    };
}

export function packStackMint(src: Mint, __stack: TupleItem[]) {
    __stack.push({ type: 'int', value: src.amount });
}

export function packTupleMint(src: Mint): TupleItem[] {
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'int', value: src.amount });
    return __stack;
}

export function unpackStackMint(slice: TupleReader): Mint {
    const amount = slice.readBigNumber();
    return { $$type: 'Mint', amount: amount };
}
export function unpackTupleMint(slice: TupleReader): Mint {
    const amount = slice.readBigNumber();
    return { $$type: 'Mint', amount: amount };
}
async function JettonDefaultWallet_init(master: Address, owner: Address) {
    const __code = 'te6ccgECKQEABYcAART/APSkE/S88sgLAQIBYgIDAgLKBAUCASAlJgIBIAYHAgFIEhMCASAICQIB7hARAgFICgsAR7OQ4AOWAuYDlgLgA5YAJZmZk/IBkOQDlgLgA5YAJZQPl/+ToQT1RwIddJwh+VMCDXCx/eAtDTAwFxsMABkX+RcOIB+kAiUGZvBPhhAo4zMO1E0NQB+GKBAQHXAPpAAQH6QAFDMGwTVQLwKMj4QgHMVSBQI4EBAc8AAc8WAc8Wye1U4CCCEA+KfqW64wIgghAXjUUZuuMCghBZXwe8uuMCMIDA0ODwALQgbvLQgIAN4w7UTQ1AH4YoEBAdcA+kABAfpAAUMwbBMD0x8BghAPin6luvLggdM/+gD6QAEB+kAh1wsBwwCRAZIxbeJtAtIAAZRsEtQS3voAUWYWFURANxCJEHhVBfAlyPhCAcxVIFAjgQEBzwABzxYBzxbJ7VQAyjDtRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEBeNRRm68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4gH6AFFVFRRDMDYQeBBnVQTwJsj4QgHMVSBQI4EBAc8AAc8WAc8Wye1UALztRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEFlfB7y68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4hRDMDQQVhBFVQLwJ8j4QgHMVSBQI4EBAc8AAc8WAc8Wye1UAAbywIIAFSUfwHKAOBwAcoAgAAkcFnwCYAIBIBQVAE/cAQa5Dpj+mfmP0AGECaqRFBCAvGoozdAcEIPe7L710J2Il5egnQAUAgEgFhcCASAdHgIBIBgZAgEgGxwB9zIcQHKAVAH8B5wAcoCUAXPFlAD+gJwAcpoI26zJW6zsY49f/AeyHDwHnDwHiRus5l/8B4E8AJQBMyVNANw8B7iJG6zmX/wHgTwAlAEzJU0A3DwHuJw8B4Cf/AeAslYzJYzMwFw8B7iIW6zmH/wHgHwAgHMlDFw8B7iyQGAaACUbDH6ADFx1yH6ADH6ADCnA6sAgAAT7AAApHADyMxDE1AjgQEBzwABzxYBzxbJgAG8AtD0BDAgggDYrwGAEPQPb6Hy4GRtAoIA2K8BgBD0D2+h8uBkEoIA2K8BAoAQ9BfI9ADJQAPwIoAIBIB8gAgEgIiMADz4QlMS8CMwgAacbCL4QW8kgRFNUzvHBfL0UbehggD1/CHC//L0QzBSPPAhcSTCAJIwct6BPrsCqIIJMS0AoIIImJaAoBK88vT4QlQgZPAjXPAff1B2cIBAK1RMORiAhAGTIVVCCEBeNRRlQB8sfFcs/UAP6AgHPFgEgbpUwcAHLAZLPFuIB+gIBzxbJEFYQNFnwIAHvPhBbyRTKscFs44S+EJTuPAjAYERTQLwHyTHBfL03lHIoIIA9fwhwv/y9CH4J28QIaGCCJiWgGa2CKGCCJiWgKChJsIAlhB9UIlfCOMNJW6zIsIAsI4dcAbwAnAEyAGCENUydttYyx/LP8kQR0MwF21t8CCSNVvigJADTFv4QW8kgRFNUzjHBfL0UYShggD1/CHC//L0QzBSOfAhgT67AYIJMS0AoIIImJaAoBK88vR/cAOAQFQzZshVMIIQe92X3lAFyx8Tyz8B+gIBzxYBIG6VMHABywGSzxbiyVQTBFAzbW3wIIAByUE1DMPAhUjCgGqFwcChIE1B0yFUwghBzYtCcUAXLHxPLPwH6AgHPFgHPFskoEEZDE1BVbW3wIFAFADe/2BdqJoagD8MUCAgOuAfSAAgP0gAKGYNgn4EkAgJzJygACazx+BFAAHGt6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4TujwAfLZsB5P5B1ZLNZRCcA=';
    const depends = Dictionary.empty(Dictionary.Keys.Uint(16), Dictionary.Values.Cell());
    depends.set(55471, Cell.fromBoc(Buffer.from('te6ccgECKQEABYcAART/APSkE/S88sgLAQIBYgIDAgLKBAUCASAlJgIBIAYHAgFIEhMCASAICQIB7hARAgFICgsAR7OQ4AOWAuYDlgLgA5YAJZmZk/IBkOQDlgLgA5YAJZQPl/+ToQT1RwIddJwh+VMCDXCx/eAtDTAwFxsMABkX+RcOIB+kAiUGZvBPhhAo4zMO1E0NQB+GKBAQHXAPpAAQH6QAFDMGwTVQLwKMj4QgHMVSBQI4EBAc8AAc8WAc8Wye1U4CCCEA+KfqW64wIgghAXjUUZuuMCghBZXwe8uuMCMIDA0ODwALQgbvLQgIAN4w7UTQ1AH4YoEBAdcA+kABAfpAAUMwbBMD0x8BghAPin6luvLggdM/+gD6QAEB+kAh1wsBwwCRAZIxbeJtAtIAAZRsEtQS3voAUWYWFURANxCJEHhVBfAlyPhCAcxVIFAjgQEBzwABzxYBzxbJ7VQAyjDtRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEBeNRRm68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4gH6AFFVFRRDMDYQeBBnVQTwJsj4QgHMVSBQI4EBAc8AAc8WAc8Wye1UALztRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEFlfB7y68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4hRDMDQQVhBFVQLwJ8j4QgHMVSBQI4EBAc8AAc8WAc8Wye1UAAbywIIAFSUfwHKAOBwAcoAgAAkcFnwCYAIBIBQVAE/cAQa5Dpj+mfmP0AGECaqRFBCAvGoozdAcEIPe7L710J2Il5egnQAUAgEgFhcCASAdHgIBIBgZAgEgGxwB9zIcQHKAVAH8B5wAcoCUAXPFlAD+gJwAcpoI26zJW6zsY49f/AeyHDwHnDwHiRus5l/8B4E8AJQBMyVNANw8B7iJG6zmX/wHgTwAlAEzJU0A3DwHuJw8B4Cf/AeAslYzJYzMwFw8B7iIW6zmH/wHgHwAgHMlDFw8B7iyQGAaACUbDH6ADFx1yH6ADH6ADCnA6sAgAAT7AAApHADyMxDE1AjgQEBzwABzxYBzxbJgAG8AtD0BDAgggDYrwGAEPQPb6Hy4GRtAoIA2K8BgBD0D2+h8uBkEoIA2K8BAoAQ9BfI9ADJQAPwIoAIBIB8gAgEgIiMADz4QlMS8CMwgAacbCL4QW8kgRFNUzvHBfL0UbehggD1/CHC//L0QzBSPPAhcSTCAJIwct6BPrsCqIIJMS0AoIIImJaAoBK88vT4QlQgZPAjXPAff1B2cIBAK1RMORiAhAGTIVVCCEBeNRRlQB8sfFcs/UAP6AgHPFgEgbpUwcAHLAZLPFuIB+gIBzxbJEFYQNFnwIAHvPhBbyRTKscFs44S+EJTuPAjAYERTQLwHyTHBfL03lHIoIIA9fwhwv/y9CH4J28QIaGCCJiWgGa2CKGCCJiWgKChJsIAlhB9UIlfCOMNJW6zIsIAsI4dcAbwAnAEyAGCENUydttYyx/LP8kQR0MwF21t8CCSNVvigJADTFv4QW8kgRFNUzjHBfL0UYShggD1/CHC//L0QzBSOfAhgT67AYIJMS0AoIIImJaAoBK88vR/cAOAQFQzZshVMIIQe92X3lAFyx8Tyz8B+gIBzxYBIG6VMHABywGSzxbiyVQTBFAzbW3wIIAByUE1DMPAhUjCgGqFwcChIE1B0yFUwghBzYtCcUAXLHxPLPwH6AgHPFgHPFskoEEZDE1BVbW3wIFAFADe/2BdqJoagD8MUCAgOuAfSAAgP0gAKGYNgn4EkAgJzJygACazx+BFAAHGt6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4TujwAfLZsB5P5B1ZLNZRCcA=', 'base64'))[0]);
    let systemCell = beginCell().storeDict(depends).endCell();
    let __stack: TupleItem[] = [];
    __stack.push({ type: 'cell', cell: systemCell });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(master).endCell() });
    __stack.push({ type: 'slice', cell: beginCell().storeAddress(owner).endCell() });
    let codeCell = Cell.fromBoc(Buffer.from(__code, 'base64'))[0];
    let system = await ContractSystem.create();
    let executor = await ContractExecutor.create({ code: codeCell, data: new Cell() }, system);
    let res = await executor.get('init_JettonDefaultWallet', __stack);
    if (!res.success) { throw Error(res.error); }
    let data = res.stack.readCell();
    return { code: codeCell, data };
}

const JettonDefaultWallet_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    4429: { message: `Invalid sender` },
    13650: { message: `Invalid bounced message` },
    16059: { message: `Invalid value` },
    62972: { message: `Invalid balance` },
}

export class JettonDefaultWallet implements Contract {
    
    static async init(master: Address, owner: Address) {
        return await JettonDefaultWallet_init(master,owner);
    }
    
    static async fromInit(master: Address, owner: Address) {
        const init = await JettonDefaultWallet_init(master,owner);
        const address = contractAddress(0, init);
        return new JettonDefaultWallet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new JettonDefaultWallet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        errors: JettonDefaultWallet_errors
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenTransfer | TokenTransferInternal | TokenBurn) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransfer') {
            body = beginCell().store(storeTokenTransfer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransferInternal') {
            body = beginCell().store(storeTokenTransferInternal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenBurn') {
            body = beginCell().store(storeTokenBurn(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetWalletData(provider: ContractProvider) {
        let __stack: TupleItem[] = [];
        let result = await provider.get('get_wallet_data', __stack);
        return unpackStackJettonWalletData(result.stack);
    }
    
}