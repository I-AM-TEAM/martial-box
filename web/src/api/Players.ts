/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { ResponsePlayer } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Players<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags players
   * @name PlayersControllerGetPlayerTopRank
   * @request GET:/players/top-rank
   */
  playersControllerGetPlayerTopRank = (params: RequestParams = {}) =>
    this.request<ResponsePlayer[], any>({
      path: `/players/top-rank`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
