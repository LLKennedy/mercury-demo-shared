/**
 * Code generated by protoc-gen-tsjson. DO NOT EDIT.
 * versions:
 * 	protoc-gen-tsjson v0.5.0
 * 	protoc            v3.10.1
 * source: auth.proto
 */

import * as tsjson from "@llkennedy/protoc-gen-tsjson";
import { google } from "@llkennedy/protoc-gen-tsjson";
import { UserID as shared__UserID } from "user";

/** A message */
export class Token extends Object implements tsjson.ProtoJSONCompatible {
	/** A field */
	public id?: shared__UserID;
	/** A field */
	public created?: google.protobuf.Timestamp;
	/** A field */
	public expires?: google.protobuf.Timestamp;
	public ToProtoJSON(): Object {
		return {
			id: this.id?.ToProtoJSON(),
			created: this.created?.ToProtoJSON(),
			expires: this.expires?.ToProtoJSON(),
		};
	}
	public static async Parse(data: any): Promise<Token> {
		let objData: Object = tsjson.AnyToObject(data);
		let res = new Token();
		res.id = await tsjson.Parse.Message(objData, "id", "id", shared__UserID.Parse);
		res.created = await tsjson.Parse.Message(objData, "created", "created", google.protobuf.Timestamp.Parse);
		res.expires = await tsjson.Parse.Message(objData, "expires", "expires", google.protobuf.Timestamp.Parse);
		return res;
	}
}

