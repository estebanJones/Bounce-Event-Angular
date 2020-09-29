import { Injectable } from '@angular/core';
import { Utilisateur } from '../entites/utilisateur';


export class CacheService {

  private static instance : CacheService = new CacheService();

  public ob : Utilisateur[] = [];

  public static getInstance(): CacheService {
    return this.instance;
  }

  public static setCache(object : Utilisateur[]) : void {
      this.instance.ob = object;
  }

  public static getCache() : Utilisateur[] {
    return this.instance.ob;
  }
  
  private constructor() { }
}
