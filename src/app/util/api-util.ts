import { RequestInit } from "next/dist/server/web/spec-extension/request";
import { URL } from "url";


export async function fetcher(url: string | URL, config?:RequestInit) {
  let data = await fetch(url, config);
  if(data.status !== 200) {
    throw new Error( data.statusText || 'Failed to fetch data');
  }
  return data.json();
}