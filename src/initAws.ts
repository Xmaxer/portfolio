import AWS from "aws-sdk";
import { FULL_SIZE_BUCKET, THUMBNAIL_BUCKET } from "./constants/constants";

export class AwsConfig {
  static initialised = false;
  static THUMBNAIL_BASE_URL = "";
  static FULL_SIZE_BASE_URL = "";

  static init() {
    const thumbnailBucket = new AWS.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: THUMBNAIL_BUCKET },
    });

    const fullSizeBucket = new AWS.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: FULL_SIZE_BUCKET },
    });
    AwsConfig.THUMBNAIL_BASE_URL =
      new AWS.Request(thumbnailBucket, "getObject").httpRequest.endpoint.href +
      THUMBNAIL_BUCKET +
      "/";
    AwsConfig.FULL_SIZE_BASE_URL =
      new AWS.Request(fullSizeBucket, "getObject").httpRequest.endpoint.href +
      FULL_SIZE_BUCKET +
      "/";
  }
}
