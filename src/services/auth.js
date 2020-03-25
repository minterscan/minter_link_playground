import { mPrefixToHex } from 'minterjs-util'
import { pubToAddress } from 'ethereumjs-util/dist/account'
import { toBuffer, bufferToHex } from 'ethereumjs-util/dist/bytes'
import { ecrecover, fromRpcSig } from 'ethereumjs-util/dist/signature'

export default class AuthService {
  static set (wallet, value) {
    localStorage.setItem(wallet, value)
  }

  static get (wallet) {
    return localStorage.getItem(wallet)
  }

  static clear (wallet) {
    localStorage.removeItem(wallet)
  }

  static verifySignature (wallet, message, signature) {
    const buf = toBuffer(message)
    const sigParams = fromRpcSig(signature)
    const publicKey = ecrecover(buf, sigParams.v, sigParams.r, sigParams.s)
    const address = pubToAddress(publicKey)

    return mPrefixToHex(wallet) === bufferToHex(address)
  }
}
