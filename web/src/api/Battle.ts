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

import { CreateBattleDto, ResponseBattle } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Battle<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags battles
   * @name BattleControllerCreateBattle
   * @request POST:/battle
   */
  battleControllerCreateBattle = (
    data: CreateBattleDto,
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/battle`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags battles
   * @name BattleControllerFindAll
   * @request GET:/battle
   */
  battleControllerFindAll = (params: RequestParams = {}) =>
    this.request<ResponseBattle[], any>({
      path: `/battle`,
      method: 'GET',
      format: 'json',
      ...params,
    });
}
