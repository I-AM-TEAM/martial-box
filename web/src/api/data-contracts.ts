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

export interface ResponsePlayer {
  id: number;
  name: string;
  highScore: number;
}

export interface CreateBattleDto {
  redPlayerName: string;
  redPlayerScore: number;
  bluePlayerName: string;
  bluePlayerScore: number;
}

export interface ResponseBattle {
  id: number;
  redPlayerName: string;
  bluePlayerName: string;
  redScore: number;
  blueScore: number;
  winner: string;
}
