import axios, { AxiosInstance } from "axios"

export abstract class AxiosHttpClient {
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      baseURL: 'https://listx-back.herokuapp.com/list'
    })
  }
}
