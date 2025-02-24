import type { Address } from 'viem';

export enum TokenType {
  ETH = 'ETH',

  // https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
  ERC20 = 'ERC20',

  // https://ethereum.org/en/developers/docs/standards/tokens/erc-721/
  ERC721 = 'ERC721',

  // https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/
  ERC1155 = 'ERC1155',
}

export type Token = {
  type: TokenType;
  name: string;
  symbol: string;
  addresses: Record<string, Address>;
  decimals: number;
  logoURI?: string;
  imported?: boolean;
  mintable?: boolean;
  balance?: bigint;
  uri?: string;
};

export type NFT = Token & {
  tokenId: number;
};

export type GetCrossChainAddressArgs = {
  token: Token;
  srcChainId: number;
  destChainId: number;
};

export interface TokenService {
  storeToken(token: Token, address: string): Token[];
  getTokens(address: string): Token[];
  removeToken(token: Token, address: string): Token[];
  updateToken(token: Token, address: string): Token[];
}
