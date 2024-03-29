// @generated by protoc-gen-es v1.5.0
// @generated from file goatorepo/rpc.proto (package goatorepo, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * Top-level message used for all GOAT communications.
 *
 * @generated from message goatorepo.Rpc
 */
export const Rpc = proto3.makeMessageType(
  "goatorepo.Rpc",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "header", kind: "message", T: RequestHeader },
    { no: 3, name: "status", kind: "message", T: ResponseStatus },
    { no: 4, name: "body", kind: "message", T: Body },
    { no: 5, name: "trailer", kind: "message", T: Trailer },
    { no: 6, name: "reset", kind: "message", T: Reset },
  ],
);

/**
 * @generated from message goatorepo.RequestHeader
 */
export const RequestHeader = proto3.makeMessageType(
  "goatorepo.RequestHeader",
  () => [
    { no: 1, name: "method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "headers", kind: "message", T: KeyValue, repeated: true },
    { no: 3, name: "source", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "destination", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "proxy_record", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "proxy_next", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * Based on https://cloud.google.com/apis/design/errors
 * See: https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
 *
 * @generated from message goatorepo.ResponseStatus
 */
export const ResponseStatus = proto3.makeMessageType(
  "goatorepo.ResponseStatus",
  () => [
    { no: 1, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "details", kind: "message", T: Any, repeated: true },
  ],
);

/**
 * @generated from message goatorepo.KeyValue
 */
export const KeyValue = proto3.makeMessageType(
  "goatorepo.KeyValue",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message goatorepo.Body
 */
export const Body = proto3.makeMessageType(
  "goatorepo.Body",
  () => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Signals that a stream is done. Used only as a response.
 *
 * @generated from message goatorepo.Trailer
 */
export const Trailer = proto3.makeMessageType(
  "goatorepo.Trailer",
  () => [
    { no: 1, name: "metadata", kind: "message", T: KeyValue, repeated: true },
  ],
);

/**
 * @generated from message goatorepo.Reset
 */
export const Reset = proto3.makeMessageType(
  "goatorepo.Reset",
  () => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

