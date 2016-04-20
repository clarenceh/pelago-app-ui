import {Injectable} from 'angular2/core';

export class AppConfig {
    
  public static get REST_API_BASE_URL(): string {
    return "http://api.pelago.app";
  }
    
}