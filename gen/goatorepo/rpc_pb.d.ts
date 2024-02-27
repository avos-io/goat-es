// @generated by protoc-gen-es v1.5.0
// @generated from file goatorepo/rpc.proto (package goatorepo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { Any, BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Top-level message used for all GOAT communications.
 *
 * @generated from message goatorepo.Rpc
 */
export declare class Rpc extends Message<Rpc> {
  /**
   * Analogous to a "Stream Identifier" in HTTP/2: allocated by the initator of an RPC, a
   * unique identifier used to group requests and responses specific to this request.
   *
   * @generated from field: uint64 id = 1;
   */
  id: bigint;

  /**
   * Information identifying the request to be made; hence always set in the initial
   * request. At a minimum in such a request, the RPC method to be invoked is set. This
   * information is transferred in the URL path in HTTP/2.
   *
   * @generated from field: goatorepo.RequestHeader header = 2;
   */
  header?: RequestHeader;

  /**
   * When a request finishes, it is explicitly marked with a status code, and
   * with trailers. In HTTP/2 this is communicated with a HEADERS frame following the
   * response DATA frame, with certain canonical headers set like `grpc-status`.
   *
   * @generated from field: goatorepo.ResponseStatus status = 3;
   */
  status?: ResponseStatus;

  /**
   * The actual RPC request or response data: just some opaque bytes, this is usually
   * protobuf-serialised bytes.
   *
   * @generated from field: goatorepo.Body body = 4;
   */
  body?: Body;

  /**
   * Like status, this is sent as part of a response, and allows arbitrary key/values
   * to be communicated. This maps onto "Trailers" in the HTTP/2 encoding, but without
   * status-code, which is encoded explicitly above.
   *
   * @generated from field: goatorepo.Trailer trailer = 5;
   */
  trailer?: Trailer;

  /**
   * Abnormal reset information, like RST_STREAM in HTTP/2.
   *
   * @generated from field: goatorepo.Reset reset = 6;
   */
  reset?: Reset;

  constructor(data?: PartialMessage<Rpc>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.Rpc";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Rpc;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Rpc;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Rpc;

  static equals(a: Rpc | PlainMessage<Rpc> | undefined, b: Rpc | PlainMessage<Rpc> | undefined): boolean;
}

/**
 * @generated from message goatorepo.RequestHeader
 */
export declare class RequestHeader extends Message<RequestHeader> {
  /**
   * @generated from field: string method = 1;
   */
  method: string;

  /**
   * @generated from field: repeated goatorepo.KeyValue headers = 2;
   */
  headers: KeyValue[];

  /**
   * @generated from field: string source = 3;
   */
  source: string;

  /**
   * @generated from field: string destination = 4;
   */
  destination: string;

  /**
   * @generated from field: repeated string proxy_record = 5;
   */
  proxyRecord: string[];

  /**
   * @generated from field: repeated string proxy_next = 6;
   */
  proxyNext: string[];

  constructor(data?: PartialMessage<RequestHeader>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.RequestHeader";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequestHeader;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequestHeader;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequestHeader;

  static equals(a: RequestHeader | PlainMessage<RequestHeader> | undefined, b: RequestHeader | PlainMessage<RequestHeader> | undefined): boolean;
}

/**
 * Based on https://cloud.google.com/apis/design/errors
 * See: https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
 *
 * @generated from message goatorepo.ResponseStatus
 */
export declare class ResponseStatus extends Message<ResponseStatus> {
  /**
   * @generated from field: int32 code = 1;
   */
  code: number;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  /**
   * @generated from field: repeated google.protobuf.Any details = 3;
   */
  details: Any[];

  constructor(data?: PartialMessage<ResponseStatus>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.ResponseStatus";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResponseStatus;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResponseStatus;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResponseStatus;

  static equals(a: ResponseStatus | PlainMessage<ResponseStatus> | undefined, b: ResponseStatus | PlainMessage<ResponseStatus> | undefined): boolean;
}

/**
 * @generated from message goatorepo.KeyValue
 */
export declare class KeyValue extends Message<KeyValue> {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string value = 2;
   */
  value: string;

  constructor(data?: PartialMessage<KeyValue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.KeyValue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyValue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyValue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyValue;

  static equals(a: KeyValue | PlainMessage<KeyValue> | undefined, b: KeyValue | PlainMessage<KeyValue> | undefined): boolean;
}

/**
 * @generated from message goatorepo.Body
 */
export declare class Body extends Message<Body> {
  /**
   * @generated from field: bytes data = 1;
   */
  data: Uint8Array;

  constructor(data?: PartialMessage<Body>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.Body";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body;

  static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean;
}

/**
 * Signals that a stream is done. Used only as a response.
 *
 * @generated from message goatorepo.Trailer
 */
export declare class Trailer extends Message<Trailer> {
  /**
   * @generated from field: repeated goatorepo.KeyValue metadata = 1;
   */
  metadata: KeyValue[];

  constructor(data?: PartialMessage<Trailer>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.Trailer";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Trailer;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Trailer;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Trailer;

  static equals(a: Trailer | PlainMessage<Trailer> | undefined, b: Trailer | PlainMessage<Trailer> | undefined): boolean;
}

/**
 * @generated from message goatorepo.Reset
 */
export declare class Reset extends Message<Reset> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  constructor(data?: PartialMessage<Reset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "goatorepo.Reset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reset;

  static equals(a: Reset | PlainMessage<Reset> | undefined, b: Reset | PlainMessage<Reset> | undefined): boolean;
}

